import React, { Component } from 'react'


export default class AddTrack extends Component {
    state = {
        name: '',
        url: '',
        title: ''

    }
    addTrack = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addTrack(this.state)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="input"
                        id="name"
                        placeholder="enter name"
                        onChange={this.addTrack}
                    />
                    <input
                        type="text"
                        className="input"
                        id="url"
                        placeholder="enter url"
                        onChange={this.addTrack}
                    />
                    <input
                        type="text"
                        className="input"
                        id="title"
                        placeholder="enter title"
                        onChange={this.addTrack}
                    />
                    <button tybe="submit" value="Add" >
                        Add Item
                    </button>
                </form>
            </div>
        )
    }
}
