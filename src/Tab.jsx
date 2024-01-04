import React from 'react'

function Tab() {
    return (
        <div className='mainDiv'>
            <div className="container" id="container">

                <aside>
                    <div>
                    <div>
                        {/* <input type="text" placeholder="Search" /> */}
                        <h1 className='ToDOLogo'>ToDo</h1>
                        <br />
                        <button className="active" id="sidebar-btn">
                        Home
                        </button>
                        <button  id="sidebar-btn">
                        Completed
                        </button>
                        <button id="sidebar-btn">Pending</button>
                    </div>
                    
                    </div>
                </aside>
                <div className="content">
                    <div className="ideas">
                        <div className="idea">
                            {/* <p>achievement</p> */}
                            <h1>
                            Completed Tasks
                                <br /><span className='taskCount'>0</span>
                            </h1>
                            {/* <p>0</p> */}
                        </div>
                        <div className="idea">
                            {/* <p>sd</p> */}
                            <h1>Pending</h1>
                            <p>sd</p>
                        </div>
                    </div>
                    <section className="updates">
                        <h1>All Task</h1>
                        <div className="update ">
                            <div className="updt-left">
                                {/* <img
                                    src="https://img.icons8.com/color/452/microsoft-powerpoint-2019.png"
                                    alt="powerpoint icon"
                                /> */}
                                <h1>test</h1>
                            </div>
                            <div className="buttons">
                                <a href="https://bit.ly/3gdGvT8" target="_warning">
                                    <button>Edit</button>
                                </a>
                            </div>
                        </div>
                        
                        <div className="addSection">
                            <input placeholder='Add a Task' className='addInput' type="text" />
                            <button className="fa-solid fa-plus" onClick={()=>{
                                console.log("clicked")
                            }}></button>
                        </div>
                        
                    </section>
                   
                   
                </div>
            </div>
            </div>

       
    )
}

export default Tab
