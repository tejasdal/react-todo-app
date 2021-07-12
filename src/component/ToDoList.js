import React from 'react';

export default function ToDoList(props) {

    let title = (props.isComplete) ? "Completed" : "ToDo";
    let ulId = (props.isComplete) ? "completed-tasks" : "incomplete-tasks";

    const handleOnChecked = ({target}) => {
        let oppTask;
        props.setTasks( tasks => {
            let newTasks = [];
            tasks.map( t => {
                if (t.id == target.name) {
                    oppTask = t;
                    oppTask.isChecked = (oppTask.isChecked) ? false : true;
                }else {
                    newTasks.push(t);
                }
            })
            return newTasks;
        });

        //add task to opposite task list
        props.setOppTasks( prev => {
            return [oppTask, ...prev];
        });
        
    }

    const handleDelete = ({target}) => {
        props.setTasks( tasks => {
            return tasks.filter( t => t.id != target.name);
        });
    }

    return (
        <div>
            <h3>{title}</h3>
                <ul id={ulId}>
                {
                    props.tasks.map( (task, i) => {
                        return (
                        <li key={i} >
                            <input type="checkbox" checked={props.isComplete} name={task.id} onChange={handleOnChecked}/>
                            <label>{task.task}</label>
                            <input type="text" value={task.task} readOnly/>
                            <button className="delete" name={task.id} onClick={handleDelete}>Delete</button>
                        </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}