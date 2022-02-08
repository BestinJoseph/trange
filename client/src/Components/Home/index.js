import React, { Fragment } from 'react'

import Slider from './Slider'
import About from './About'
import Services from './Services'
import Difference from './Difference'
import Clients from '../Clients'
import Request from './Request'

const Home = () => {
    return (
        <Fragment>
            <Slider />
            <About />
            <Services />
            <Request />
            <Difference />
            <Clients />
        </Fragment>
    )
}

export default Home
