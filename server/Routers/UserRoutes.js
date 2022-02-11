import express from 'express'
import passport from 'passport'

import { UserSignInController, UserSignUpController, CreateTokenController, UserProfileController, UserLogoutController } from '../Controllers/UserController.js'
import { verifyUser } from '../authenticate.js'

const router = express.Router()

router.route('/signup').post(UserSignUpController)
router.route('/signin').all(passport.authenticate("local")).post(UserSignInController)
router.route('/createrefreshtoken').post(CreateTokenController)
router.route('/profile').all(verifyUser).get(UserProfileController)
router.route('/signoff').all(verifyUser).get(UserLogoutController)

export default router