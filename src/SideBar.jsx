import React from 'react'

function SideBar() {
    return (
        <aside>
            <div>
                <div>
                    {/* <input type="text" placeholder="Search" /> */}
                    <h1 className='ToDOLogo'>ToDo</h1>
                    <br />
                    <button className="active" id="sidebar-btn">
                        Home
                    </button>
                    <button id="sidebar-btn">
                        Completed
                    </button>
                    <button id="sidebar-btn">Pending</button>
                </div>

            </div>
        </aside>
    )
}

export default SideBar
