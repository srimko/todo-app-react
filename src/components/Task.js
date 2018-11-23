import React from 'react'

const Task = ({ task, taskId, changeState}) => {
  
  return (
    <div className={task.done ? 'done' : 'todo'}>
      <div className="line"></div>
      <p>{task.name}</p>
      <span>{task.description}</span>
      <input type="checkbox" name="done" checked={task.done ? 'cehcked' : ''} onChange={changeState}/>
    </div>
  )
}


export default Task