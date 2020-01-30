import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/todo/AddTodo';
import TodoList from './components/todo/TodoList'
import About from './components/pages/About';
import TodosSaved from './components/todoV2/TodosSavedApp';


class App extends React.Component {
  state = {
    todos: []
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    // spread operator basically saying: okay this is what this array has
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" render={props => (

              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>

            )} />

            <Route path="/about" component={About} />
            <Route path="/todos-saved" component={TodosSaved} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
