import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'

import Routers from './Routers'

function App() {
    const dispatch = useDispatch()

    useLayoutEffect(() => {
    },[dispatch])

    return (
        <div className="App">
            <Routers />
        </div>
    );
}

export default App;
