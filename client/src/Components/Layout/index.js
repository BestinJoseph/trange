import React, { useLayoutEffect } from 'react'

import Header from '../Header'
import Footer from '../Footer'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
    const location = useLocation()

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0,0)
    },[location.pathname])

    return (
        <div>
            <Header />
            <main>{ children }</main>
            <Footer />
        </div>
    )
}

export default Layout
