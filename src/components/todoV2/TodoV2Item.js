import React from 'react'

class TodoV2Item extends React.Component {
    render() {
        const {title, id, completed} = this.props.todo;
        return (
            <React.Fragment>
                <li
                    key={id}
                    style={liStyles}
                    className={completed ? 'completed' : ''}
                >
                    <input
                        type="checkbox"
                        style={inputStyles}
                        onChange={this.props.markComplete.bind(this, id)}
                        checked={completed ? true : false}
                    />
                    {title}
                    <span
                        style={spanXStyles}
                        onClick={this.props.deleteTodo.bind(this, id)}
                    >
                        x
                    </span>
                </li>
            </React.Fragment>
        )
    }
}

const liStyles = {
    listStyleType: 'none',
    padding: '10px',
    borderBottom: '1px solid #ccc',
}

const inputStyles = {
    marginRight: '8px'
}

const spanXStyles = {
    float: 'right',
    color: 'white',
    background: 'red',
    padding: '5px 8px',
    borderRadius: '50%',
    lineHeight: '12px',
    fontSize: '12px',
    fontWeight: '900',
    cursor: 'pointer'
}

export default TodoV2Item;
