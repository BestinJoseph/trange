import React, { Fragment } from 'react'

import About from './About'
import Difference from './Difference'
import Services from './Services'
import Slider from './Slider'

const Home = () => {
    return (
        <Fragment>
            <Slider />
            <About />
            <Services />
            <Difference />
        </Fragment>
    )
}

export default Home
