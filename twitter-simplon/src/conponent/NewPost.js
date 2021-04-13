import React, { Component } from 'react'

export default class NewPost extends Component {

    constructor(props){
        super(props)
        this.state={
            post: ''
        }
    }

    createPost=()=>{
        
        
    }

    handleChange=(e)=>{
        this.setState({post: e.target.value})
    }

    handleSubmit=(e)=>{
        console.log(this.state.post)
        let option = {
            method: 'POST',
            headers: {'content-type': 'application/json', 'Authorization': 'Bearer '+window.localStorage.getItem('token')},
            body: JSON.stringify({content: this.state.post})
        }
        fetch('http://localhost:3050/post', option).then((response)=>{
            return response.json()})
            .then((data)=>{
                if(data){
                    this.props.history.push('/home/'+window.localStorage.getItem('id'))
                }
            })
        e.preventDefault()
    }

    render() {
        return (
            <div className='postDiv'>
                {/* <h1>New poste</h1> */}
                <form className='formPost' onSubmit={this.handleSubmit}>
                <input type='text' className='post' value={this.state.post} onChange={this.handleChange}></input>
                <button type='submit' ></button>
                </form>
            </div>
        )
    }
}
