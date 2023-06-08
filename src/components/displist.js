import React, { useState } from 'react'

const DispList = (props) => {

    const { list, updateList, removeTask } = props

    const checkHandler = (checked, index) => {
        list[index].isComp = !checked
        updateList(list[index], index)
    }
    const handleDelete = (index) => {
        removeTask(index)

    }
    console.log(list)
    return (
        <div>
            <ul>{
                list.map((taskObj, index) =>
                    <div>
                        <li id={index}>
                            <input type="checkbox" checked={taskObj.isComp} onChange={e => checkHandler(taskObj.isComp, index)} />
                            {taskObj.task}
                            <button onClick={e => handleDelete(index)}>Delete</button>
                        </li>
                    </div>
                )
            }</ul>
        </div>
    )
};

export default DispList;