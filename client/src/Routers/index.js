import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Layout from '../Components/Layout'

import {NotFound} from '../Components'
import CreateDailyActivitie from '../Components/CreateDailyActivitie'
import DailyActivities from '../Components/DailyActivities'
import DailyActivityOne from '../Components/DailyActivityOne'

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/create" element={<CreateDailyActivitie />} />
                <Route exact path="/" element={<DailyActivities />} />
                <Route exact path="/:_id" element={<DailyActivityOne />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default Routers
