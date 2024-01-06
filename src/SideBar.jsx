import React from 'react'

function SideBar({page,setPage}) {
 const handilPage=(newPage)=>{
    setPage(newPage)
 }
    return (
        <aside>
            <div>
                <div>
                    {/* <input type="text" placeholder="Search" /> */}
                    <h1 className='ToDOLogo'>ToDo</h1>
                    <br />
                    <button className={page=="All" ? "active" : ""}  onClick={()=>handilPage("All")} id="sidebar-btn">
                        All
                    </button>
                    <button className={page=="Completed" ? "active" : ""} id="sidebar-btn" onClick={()=>handilPage("Completed")}>
                        Completed
                    </button>
                    <button className={page=="" ? "active" : ""} onClick={()=>handilPage("Pending")} id="sidebar-btn">Pending</button>
                </div>
                

            </div>
        </aside>
    )
}

export default SideBar
