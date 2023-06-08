import React, { useState } from 'react'

const AddForm = (props) => {
    let { list, addTask } = props;
    let [task, setTask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ task: task, isComp: false });
        setTask('')
    }

    return (
        <form onSubmit={handleSubmit} style={{
            margin: '50px'
        }}>
            <div>
                <label>New Task:</label><br />
                <input type="text" value={task} onChange={(e) => { setTask(e.target.value) }} />
            </div>
            <input type="submit" value="Add Task" />
        </form>
    )
}

export default AddForm