import React, { Component } from 'react';
import Task from './components/Task'
import './App.css';

class App extends Component {
  state = {
    tasks: {
      "xldoencjfe": {
        name: "Tache 1",
        description: "Description tache 1",
        done: false
      },
      "xldamncjfe": {
        name: "Tache 2",
        description: "Description tache 2",
        done: true
      },
      "vldqpncjfe": {
        name: "Tache 3",
        description: "Description tache 3",
        done: false
      }
    }
  }

  saveTask = () => {
    let tasks = this.state.tasks
  }

  changeState = (taskId) => {
    const tasks = this.state.tasks
    tasks[taskId].done = !this.state.tasks[taskId].done

    this.setState({ tasks }) 
  }
  
  render() {
    const list = Object.keys(this.state.tasks).map(taskId => (
      <Task key={taskId} task={this.state.tasks[taskId]} changeState={() => this.changeState(taskId)}/>
    ))

    console.log(list)
    return (
      <div className="App">
        <h1>To Do App</h1>
        {list}
      </div>
    );
  }
}

export default App;
