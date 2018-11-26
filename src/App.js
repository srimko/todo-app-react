import React, { Component } from 'react';
import Task from './components/Task'
import FormAddTask from './components/FormAddTask'
import './App.css';

class App extends Component {
  state = {
    tasks: {
      "xldoencjfn": {
        name: "Tache 1",
        description: "Description tache 1",
        createdDate: 1542976982,
        todoDate: 1543236182,
        done: false
      },
      "xldamngzfe": {
        name: "Tache 2",
        description: "Description tache 2",
        createdDate: 1542976982,
        todoDate: 1543236182,
        done: true
      },
      "vldqpncjfe": {
        name: "Tache 3",
        description: "Description tache 3",
        createdDate: 1542976982,
        todoDate: 1543236182,
        done: false
      }
    }
  }

  handleChange(event) {
    console.log(event)
    this.tempTask = event.target.value
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.tempTask);
    event.preventDefault();

    this.setState({ value: "" });
    this.addTask()
  }

  addTask = (taskName) => {
    const tasks = this.state.tasks

    let tempTask = {
      name: this.tempTask,
      description: "Description de la tache " + this.tempTask,
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

    console.log(list)
    return (
      <div className="App">
        <h1>To Do App</h1>
        <FormAddTask state={this.state} value={this.state.value} handleChange={(event) => this.handleChange(event)} handleSubmit={(event) => this.handleSubmit(event)}/>
        {list}
      </div>
    );
  }
}

export default App;
