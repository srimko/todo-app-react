import React from 'react'

const FormAddTask = ({value, handleChange, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}> 
      <input type="text" value={value} onChange={handleChange} name="name"/>
      <input type="submit" value="Ajouter"/>
    </form>
  )
}

export default FormAddTask