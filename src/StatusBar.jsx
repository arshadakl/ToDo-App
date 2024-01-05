import React from 'react'

function StatusBar({completed,Pending}) {
    return (
        <div className="ideas">
            <div className="idea">
                <h1>
                    Completed Tasks
                    <br /><span className='taskCount'>{completed}</span>
                </h1>
            </div>
            <div className="idea">
                {/* <p>sd</p> */}
                <h1>Pending Tasks
                <br /><span className='taskCount'>{Pending}</span>
                </h1>
                
            </div>
        </div>
    )
}

export default StatusBar
