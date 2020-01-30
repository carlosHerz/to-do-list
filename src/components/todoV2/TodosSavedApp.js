import React from 'react';
import axios from 'axios';
import AddV2Todo from './AddV2Todo';
import TodoV2List from './TodoV2List';

class TodosSaved extends React.Component {

    state = {
        todosFirebase: []
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get(`https://todos-860f1.firebaseio.com/.json?auth=xvdFrfbyJOMjHFR83PgXVGTW7A8PHIWyjfDV0lDD`)
        .then(response => {
            this.setState({ todosFirebase: response.data })
        })
    }

    markComplete = (id) => {
        Object.keys(this.state.todosFirebase).map( (todo) => {
            if(this.state.todosFirebase[todo].id === id) {
                axios.patch(`https://todos-860f1.firebaseio.com/${this.state.todosFirebase[todo].title}.json?auth=xvdFrfbyJOMjHFR83PgXVGTW7A8PHIWyjfDV0lDD`, {
                    completed: !this.state.todosFirebase[todo].completed
                })
                .then(res => {
                    this.fetchData()
                })
            }

        } )
    }

    deleteTodo = (id) => {
        Object.keys(this.state.todosFirebase).map((todo) => {
            if (this.state.todosFirebase[todo].id === id) {
                axios.delete(`https://todos-860f1.firebaseio.com/${this.state.todosFirebase[todo].title}.json?auth=xvdFrfbyJOMjHFR83PgXVGTW7A8PHIWyjfDV0lDD`)
                .then(res => {
                    this.fetchData()
                })
            }

        })
    }

    addTodo = (title) => {
        console.log("here again")
        axios.put(`https://todos-860f1.firebaseio.com/${title}.json?auth=xvdFrfbyJOMjHFR83PgXVGTW7A8PHIWyjfDV0lDD`, {
            title: title,
            completed: false,
            id: Date.now()
        })
        .then(res => {
            this.fetchData();
        })
    }

    render() {
        return (
            <React.Fragment>
                <AddV2Todo addTodo={this.addTodo} />
                <ul style={ulStyles}>
                    <TodoV2List
                        todosFirebase={this.state.todosFirebase}
                        markComplete={this.markComplete}
                        deleteTodo={this.deleteTodo}
                    />
                </ul>
            </React.Fragment>
        )
    }
}

const ulStyles = {
    paddingLeft: '0px'
}

export default TodosSaved;