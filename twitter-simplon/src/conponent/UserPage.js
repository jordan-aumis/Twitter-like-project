import React, { Component } from 'react'

export default class User extends Component {

    constructor(props){
        super(props)
        this.state={
            userinpage: [],
            isfollowed: '',
            userconected: [],
            posts: []
        }
    }

    getUser=()=>{
        let option = {
            method: 'GET',
            headers: {'content-type': 'application/json', 'Authorization': 'Bearer '+window.localStorage.getItem('token')}
        }
        fetch('http://localhost:3050/getusers/byid/'+this.props.match.params.id, option).then((response)=>{return response.json()})
        .then((data)=>{
            if (data){
                console.log(data)    
                this.setState({userinpage: data})
            }
        })
    }

    getPost=()=>{
        let option = {
            method: 'POST',
            headers: {'content-type': 'application/json', 'Authorization': 'Bearer '+window.localStorage.getItem('token')},
            body: JSON.stringify({query: this.state.userinpage.id})    
        }
        fetch('http://localhost:3050//getposts/posts', option).then((response)=>{return response.json()})
        .then((data)=>{
            if (data){
                console.log(data)    
                this.setState({posts: data})
            }
        })

    }

    newFollow=()=>{
        console.log('here')
        let option = {
            method: 'POST',
            headers: {'content-type': 'application/json', 'Authorization': 'Bearer '+window.localStorage.getItem('token')},
            body: JSON.stringify({fk_idFollowed: this.state.userinpage.id})    
        }
        fetch('http://localhost:3050/follows', option).then((response)=>{return response.json()})
        .then((data)=>{
            if (data){
                console.log(data)    
                this.setState({isfollowed: true})
            }
        })

    }

    getUserConnected=()=>{
        let option = {
            method: 'GET',
            headers: {'content-type': 'application/json', 'Authorization': 'Bearer '+window.localStorage.getItem('token')}
        }
        fetch('http://localhost:3050/getusers/byid/'+window.localStorage.getItem('id'), option).then((response)=>{return response.json()})
        .then((data)=>{
            if (data){
                console.log(data)    
                this.setState({userconnected: data})
                data.Follows.forEach((follow)=>{
                    console.log('enter')
                    console.log(follow.fk_idFollowed)
                    if(follow.fk_idFollowed == this.state.userinpage.id){ 
                        this.setState({isfollowed: true})
                    }
                })
            }
        })

    }

    componentDidMount=()=>{
        this.getUser()
        this.getUserConnected()
    }

    render() {
        console.log(this.state.isfollowed)
        console.log('CHECK')
        return (
            <main>
                <div className='userCard'>
                    <div className='pictureSide'>
                        <img className='pictureProfile'/>
                    </div>
                    <div className='infoProfile'>
                        <h1 className='information'>Information :</h1>
                        
                        <div className='label'>
                        <label>Pseudo :</label>
                        <h5>{this.state.userinpage.pseudo}</h5>
                        </div>
                        <div className='label'>
                        <label>E-mail :</label>
                        <h5>{this.state.userinpage.pseudo}</h5>
                        </div>
                        <div className='label'>
                        <label>Posts :</label>
                        <h5>{this.state.posts.length}</h5>
                        </div>

                    </div>
                   
                </div>
                {this.state.isfollowed ? <h2>Followed</h2> : <div className='control'><button className='btn-user btn-pos' type='submit' onClick={this.newFollow}>follow</button></div>}
            </main>
        )
    }
}
