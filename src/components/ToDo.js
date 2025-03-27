import React, { useState } from 'react';

function ToDo() {

const [todo, setTodo] = useState([]);
const [inputValue, setInputValue] = useState('');

function handleInputChange(event) {
    setInputValue(event.target.value);
}

function handleSubmit() {
    if (inputValue.trim()) {
        setTodo([...todo, inputValue.trim()]);
        setInputValue('');
    }
}

function handleDelete(index) {
    setTodo(todo.filter((_, i) => i !== index));
}

return (
    <div> 
        <input type="text" value={inputValue} onChange={handleInputChange} />

        <button onClick={handleSubmit}>Add To Do</button>

        <ul>
            {todo.map((todo, index) => (
                <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Remove</button>
            </li>
            ))}
            </ul>

    </div>
);
}

export default ToDo;