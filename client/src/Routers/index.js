import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Layout from '../Components/Layout'

import {NotFound} from '../Components'
import CreateDailyActivitie from '../Components/CreateDailyActivitie'
import DailyActivities from '../Components/DailyActivities'
import DailyActivityOne from '../Components/DailyActivityOne'
import SignIn from '../Components/SignIn'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
                <Route exact path="/create" element={<PrivateRoute><CreateDailyActivitie /></PrivateRoute>} />
                <Route exact path="/edit/:id" element={<PrivateRoute><CreateDailyActivitie /></PrivateRoute>} />
                <Route exact path="/:_id" element={<PrivateRoute><DailyActivityOne /></PrivateRoute>} />
                <Route path="/" element={<PrivateRoute><DailyActivities /></PrivateRoute>} exact />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default Routers
