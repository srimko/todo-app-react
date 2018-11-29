import React, { Component } from 'react';
import Task from './components/Task'
import FormAddTask from './components/FormAddTask'
import './App.css';

// Firebase 
import base from './base'

class App extends Component {
  state = {
    tasks: {}
  }

  constructor() {
    super()
    if (localStorage.getItem('state') === undefined || localStorage.getItem('state') === null) {
      this.state.tasks = {}
    }
    localStorage.setItem('state', this.state)
  }

  componentDidMount () {
    base.syncState('/', {
      context: this,
      'state': 'tasks'
    })
  }

  addTask = (taskName) => {
    console.log(taskName)
    const tasks = this.state.tasks

    let tempTask = {
      name: taskName,
      description: "Description de la tache " + taskName,
      createdDate: 1542976982,
      todoDate: 1543236182,
      done: false
    }

    tasks[this.generateUniqueId()] = tempTask

    this.setState({ tasks })
  }

  generateUniqueId = () => Math.random().toString(36).substr(2, 9)
  

  // saveTask = () => {
  //   const tasks = this.state.tasks
  // }

  changeState = (taskId) => {
    const tasks = this.state.tasks
    tasks[taskId].done = !this.state.tasks[taskId].done

    this.setState({ tasks }) 
  }
  
  render() {
    const list = Object.keys(this.state.tasks).map(taskId => (
      <Task className="task" key={taskId} task={this.state.tasks[taskId]} changeState={() => this.changeState(taskId)}/>
    ))

    return (
      <div className="App">
        <h1>To Do App</h1>
        <FormAddTask state={this.state} value={this.state.value} addTask={(value) => this.addTask(value)}/>
        {list}
      </div>
    );
  }
}

export default App;
