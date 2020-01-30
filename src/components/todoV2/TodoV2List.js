import React from 'react';
import TodoV2Item from './TodoV2Item';

class TodoV2List extends React.Component {
    render() {
        return(
            Object.keys(this.props.todosFirebase).map((todoName, index) => (
                <TodoV2Item
                    key={index}
                    todo={this.props.todosFirebase[todoName]}
                    markComplete={this.props.markComplete}
                    deleteTodo={this.props.deleteTodo}
                />
            ))
        )
    }
}

export default TodoV2List;