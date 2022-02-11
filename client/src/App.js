import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'

import Routers from './Routers'
import { getAllActivities } from './Actions/ActivitiesAction'

function App() {
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        const dataCall = () => {
            dispatch(getAllActivities())
        }
        dataCall()
    },[dispatch])

    return (
        <div className="App">
            <Routers />
        </div>
    );
}

export default App;
