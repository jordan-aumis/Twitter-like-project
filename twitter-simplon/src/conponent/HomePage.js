import React, { Component } from 'react'
import SearchUser from './SearchUser'

export default class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
            posts: {}
        }
    }

    getFollowerPost=()=>{
        let option = {
            method: 'GET',
            headers: {'content-type': 'application/json', 'Authorization': 'Bearer '+window.localStorage.getItem('token')},
        }
        fetch('http://localhost:3050/getposts/followerpost', option).then((res)=>{return res.json()})
        .then((data)=>{
            if(data){
                this.setState({posts: data})
            }
        })
    }

    checkIfnotConnected=()=>{
        if(!window.localStorage.getItem('token')){
            this.props.history.push('/')
        }
    }

    componentDidMount=()=>{
        this.checkIfnotConnected()
        this.getFollowerPost()
    }


    render() {
        console.log(this.state.posts)
        return (
            <div>
                <SearchUser history={this.props.history}/>
                <h1>Home</h1>
            </div>
        )
    }
}
