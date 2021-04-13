import React, { Component } from 'react'

export default class SearchUser extends Component {

    constructor(props){
        super(props)
        this.state={
            query: ''
        }
    }

    handleChange=(e)=>{
        this.setState({query: e.target.value})
    }

    handleSubmit=(e)=>{
        this.props.history.push('/result/'+this.state.query)
    }


    render() {
        return (
            <div className='searchBar'>
                <form  onSubmit={this.handleSubmit}>
                <input name='search' value={this.state.query} placeholder='Search user...' onChange={this.handleChange}></input>
                <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}
