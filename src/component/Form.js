import React, { useState } from 'react';

export default function ToDoForm(props){
    const [currentTask, setCurrentTask] = useState('');

    const handleClikAdd = () => {
        props.setTasks( (prevTasks) => {
            return [
                {
                    id: new Date().getMilliseconds(),
                    task: currentTask,
                    isChecked: false
                },
                ...prevTasks
            ];
        })
        setCurrentTask('');
    }

    const handleOnChange = ({target}) => {
        setCurrentTask(target.value);
    }

    return (
    <p>
        <label htmlFor="new-task">
            Add Item
        </label>
        <input id="new-task" type="text" value={currentTask} onChange={handleOnChange} />
        <button onClick={handleClikAdd}>Add</button>
    </p>  
    );
}