import React from 'react'
import SideBar from './SideBar'
import StatusBar from './StatusBar'
import AddSection from './AddSection'

function Tab() {
    return (
        <div className='mainDiv'>
            <div className="container" id="container">
            <SideBar/>
                <div className="content">
                <StatusBar/>
                <AddSection/>
                   
                   
                </div>
            </div>
            </div>

       
    )
}

export default Tab
