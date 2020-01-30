import React from 'react';

class AddV2Todo extends React.Component {

    state = {
        title: ''
    }

    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        console.log('hello')
        return (
            <form style={flexStyles} onSubmit={this.onSubmitTodo}>
                <input
                    type="text"
                    placeholder="Add To do"
                    style={inputTextStyles}
                    name="title"
                    onChange={this.onChangeInput}
                    value={this.state.title}
                />
                <input
                    type="submit"
                    value="Submit"
                    style={inputSubmitStyles}

                />
            </form>
        )
    }
}

const flexStyles = {
    display: 'flex',
    flexDirection: 'row'
}
const inputTextStyles = {
    display: 'flex',
    flex: '10 1 0%',
    padding: '11px 8px',
    marginTop: '11px',
    fontSize: '15px'
}

const inputSubmitStyles = {
    padding: '7px 11px',
    display: 'inline-block',
    flex: '1 1 0%',
    textAlign: 'center',
    border: 'none',
    marginTop: '11px',
    background: '#555555',
    color: 'white'
}

export default AddV2Todo;