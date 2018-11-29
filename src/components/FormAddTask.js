import React, { Component } from 'react'

class FormAddTask extends Component  {
  state = {
    value: ""
  }

  handleChange = event => {
    const value = event.target.value
    this.setState({value})
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log(this.state.value)
    this.props.addTask(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <input type="text" value={this.state.value} onChange={this.handleChange} name="name"/>
        <input type="submit" value="Ajouter"/>
      </form>
    )
  } 
}

export default FormAddTask