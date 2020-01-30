import React from 'react'

export class AddTodo extends React.Component {

    state = {
        title: ''
    }

    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmitTodo} >
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add todo..."
                    value={this.state.title}
                    onChange={this.onChangeInput}
                />
                <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default AddTodo;
