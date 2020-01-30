import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo}
            />
        ))
    }
}

export default TodoList;
