import React from 'react'

const Task = ({ task, taskId, changeState}) => {
  
  return (
    <div className={task.done ? 'task done' : 'task todo'}>
      <div className="line"></div>
      <p>{task.name} <span>{task.createdDate}</span></p>
      <span>{task.description}</span>
      <input type="checkbox" name="done" checked={task.done ? 'cehcked' : ''} onChange={changeState}/>
    </div>
  )
}


export default Task