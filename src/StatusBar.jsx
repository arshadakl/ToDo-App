import React from 'react'

function StatusBar() {
    return (
        <div className="ideas">
            <div className="idea">
                <h1>
                    Completed Tasks
                    <br /><span className='taskCount'>0</span>
                </h1>
            </div>
            <div className="idea">
                {/* <p>sd</p> */}
                <h1>Pending</h1>
                <p>sd</p>
            </div>
        </div>
    )
}

export default StatusBar
