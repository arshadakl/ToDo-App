import React from 'react'

function FilterTask({ Todos, setTodos, page }) {

    const checkHandler = (e, item) => {
        setTodos((prevTodos) =>
            prevTodos.map((list) => {
                if (list.id === item.id) {
                    return { ...list, status: e.target.checked };
                }
                return list;
            })
        );
    };
    return (
        <section className="updates">
            <h1>{page} Task</h1>
            {Todos.map((item) => (
                <div key={item.id} className="update">
                    <div className="updt-left">
                        <div id="checklist">
                            {item.status? null : <input id={item.id} type="checkbox" name="r" value={item.status} onClick={(e) => checkHandler(e, item)}></input>}
                            <label className='listItem' htmlFor={item.id}>
                                <h1 >{item.text}</h1>
                            </label>
                        </div>
                    </div>

                </div>
            )
            )}
        </section>
    )
}

export default FilterTask
