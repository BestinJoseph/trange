import jwt from 'jsonwebtoken'
import User from '../Models/UserModel.js'

import { getToken, getRefreshToken, COOKIE_OPTIONS } from '../authenticate.js'

export const UserSignUpController = (req, res) => {
    // console.log(req.body)
    if (!req.body.firstName) {
        res.status(500).json({errors: { msg: "First name is not provided" }, success: false})
    } else {
        User.register( new User({username: req.body.username}), req.body.password, (err, user) => {
            if (err) {
                res.status(500).json({errors: err.msg, success: false})
            } else {
                user.firstName = req.body.firstName
                user.lastName = req.body.lastName || ""
                const token = getToken({ _id: user._id })
                const refreshToken = getRefreshToken({ _id: user._id })
                user.refreshToken.push({ refreshToken })
                user.save((err, user) => {
                    if(err) {
                        res.status(400).json({errors: err.msg, success: false})
                    } else {
                        res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS )
                        res.status(200).json({errors: null, success: true, token})
                    }
                })
            }
        })
    }
}

export const UserSignInController = (req, res, next) => {
    const token = getToken({_id: req.user._id})
    const refreshToken = getRefreshToken({_id: req.user._id})
    User.findById({_id: req.user._id}).then( user => {
        user.refreshToken.push({refreshToken})
        user.save((err, userData) => {
            if (err) {
                res.status(500).json({errors: err.msg, success: false})
            } else {
                res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                res.status(200).json({errors: null, success: true, token, userData})
            }
        })
    }, (err) => next(err))
}

export const CreateTokenController = (req, res, next) => {
    const { signedCookies = {}} = req
    const { refreshToken } = signedCookies

    if( refreshToken ) {
        try {
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            const userID = payload._id
            
            User.findOne({ _id: userID }).then( (user) => {
                if (user) {
                    const tokenIndex = user.refreshToken.findIndex( item => item.refreshToken === refreshToken )
                    if(tokenIndex === -1) {
                        res.status(401).json({errors: "Unauthorized", success: false})
                    } else {
                        const token = getToken({ _id: userID })
                        const newRefreshToken = getRefreshToken({ _id: userID })
                        user.refreshToken[tokenIndex] = { refreshToken: newRefreshToken}
                        user.save((err,user) => {
                            if(err) {
                                res.status(500).json({errors: err.msg, success: false})
                            } else {
                                res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                                res.status(201).json({erors: null, success: true, token})
                            }
                        })
                    }
                } else {
                    res.status(401).json({errors: "Unauthorized", success: false})
                }
            })
        } catch (err) {
            res.status(401).json({errors: "Unauthorized", success: false})
        }
    } else {
        res.status(401).json({errors: "Unauthorized", success: false})
    }
}

export const UserProfileController = (req, res) => {
    res.status(200).json({errors: null, success: true, user})
}

export const UserLogoutController = (req, res, next) => {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies
    
    User.findOne({_id:req.user._id}).then( user => {
        const tokenIndex = user.refreshToken.findIndex( item => item.refreshToken === refreshToken )
        if(tokenIndex !== -1) {
            user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove()
        }

        user.save( (err, user) => {
            if (err) {
                res.status(401).json({errors: err.msg, success: false})
            } else {
                res.clearCookie("refreshToken", COOKIE_OPTIONS)
                res.status(200).json({errors: null, success: true})
            }
        }, (err) => next(err))
    })
}
