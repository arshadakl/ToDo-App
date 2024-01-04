import React from 'react'

function AddSection() {
    return (
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
                <button className="fa-solid fa-plus" onClick={() => {
                    console.log("clicked")
                }}></button>
            </div>

        </section>
    )
}

export default AddSection
