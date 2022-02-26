import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'

import {About, Services, Clients, Projects, ContactUs, Difference, Organization, NotFound, Home} from '../Components'

const Routers_source = () => {

    return (
        <Router onUpdate={() => window.scrollTo(0,0)}>
            <Layout>
                <Routes>
                    <Route exact path="/clients" element={<Clients />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/projects/:name" element={<Projects />} />
                    <Route exact path="/contactus" element={<ContactUs />} />
                    <Route exact path="/difference" element={<Difference />} />
                    <Route exact path="/organization" element={<Organization />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default Routers_source
