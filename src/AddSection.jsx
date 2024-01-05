// AddSection.js

import React, { useState } from 'react';
import EditForm from './editForm';

function AddSection({Todos,setTodos}) {
    // const [Todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([...Todos, { id: Date.now(), text: input, status: false, isEdit: false }]);
        setInput('');
    };

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

    const deleteItem = (id) => {
        const updatedList = Todos.filter((item) => item.id !== id);
        setTodos(updatedList);
    };

    const editHandler = (item) => {
        setTodos((prevTodos) =>
            prevTodos.map((list) => {
                if (list.id === item.id) {
                    return { ...list, isEdit: true };
                }
                return list;
            })
        );
    };

    const saveHandler = (id, newText) => {
        setTodos((prevTodos) =>
            prevTodos.map((list) => {
                if (list.id === id) {
                    return { ...list, text: newText, isEdit: false };
                }
                return list;
            })
        );
    };

    return (
        <section className="updates">
            <h1>All Task</h1>
            <form className="addSection" onSubmit={submitHandler}>
                <input value={input} onChange={(e) => setInput(e.target.value)}
                    placeholder="Add new Task..." className="addInput" type="text"
                />
                <button type='submit' className="fa-solid fa-plus"></button>
            </form>
            {Todos.map((item) =>
                item.isEdit ? (
                    <EditForm key={item.id} id={item.id} text={item.text} onSave={saveHandler} />
                ) : (
                    <div key={item.id} className="update">
                        <div className="updt-left">
                            <div id="checklist">
                                <input checked={item.status} id={item.id} type="checkbox" name="r" onChange={(e) => checkHandler(e, item)}></input>
                                <label className='listItem' htmlFor={item.id}>
                                    <h1 >{item.text}</h1>
                                </label>
                            </div>
                        </div>
                        <div className="buttons">
                            <a>
                                {item.status ? null : <button onClick={() => editHandler(item)}>Edit</button>}
                                <button onClick={() => deleteItem(item.id)} className="delete-BTN">
                                    <i className="fa-solid fa-trash "></i>
                                </button>
                            </a>
                        </div>
                    </div>
                )
            )}
        </section>
    );
}

export default AddSection;
