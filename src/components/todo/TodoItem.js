import React from 'react';

export class TodoItem extends React.Component {

    getStyles = () => {
        return {
            padding: '11px',
            borderBottom: '1px solid#ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        // Deconstructing
        const { id, title } = this.props.todo;

        return(
            <div style={this.getStyles()}>
                {/* component drilling */}
                <input
                    type="checkbox"
                    onChange={this.props.markComplete.bind(this, id)}
                />
                { title }
                <button
                    onClick={this.props.delTodo.bind(this, id)}
                    style={btnStyle}
                >
                    x
                </button>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#ffffff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
