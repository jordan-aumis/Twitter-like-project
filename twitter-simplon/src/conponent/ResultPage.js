import React, { Component } from 'react'
import SearchUser from './SearchUser'
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
export default class ResultPage extends Component {

    constructor(props){
        super(props)
        this.state={
            users: [],
            follows: [],
            isFollowed: []
        }
    }

    getUser=()=>{
        let option = {
            method: 'POST',
            headers: {'content-type': 'application/json', 'Authorization': 'Bearer '+window.localStorage.getItem('token')},
            body: JSON.stringify({query: this.props.match.params.name})
        }
        fetch('http://localhost:3050/getusers/byname', option).then((response)=>{return response.json()})
        .then((data)=>{
            if (data){
                console.log(data)    
                this.setState({users: data})
            }
        })
    }

    getFollows=()=>{
        let option = {
            method: 'GET',
            headers: {'content-type': 'application/json', 'Authorization': 'Bearer '+window.localStorage.getItem('token')},
        }
        fetch('http://localhost:3050/follows/allfollows', option).then((response)=>{return response.json()})
        .then((data)=>{
            if (data){
                console.log(data)
                this.setState({follows: data})
                console.log(this.state.users)
                this.state.users.forEach(element=>{
                    this.state.follows.forEach(follow =>{
                        console.log(element.id)
                        console.log("enter follows")
                        if(follow.fk_idFollower == window.localStorage.getItem('id') && follow.fk_idFollowed == element.id){
                            console.log(element.id)
                            console.log('enter if')
                            this.setState({isFollowed:this.state.isFollowed.concat(element.id)})
                        }
                        else{
                            console.log(element.id)
                            console.log('not enter condition')
                        }
                    })
                })
            }
        })
    }


    componentDidMount=()=>{
        this.getUser()
        this.getFollows()
    }

    render() {
        console.log(this.state.isFollowed)
           const item = this.state.users.map((user, i)=>
            <div className='searchCard' key={i}>
            <div className='cardPicture'></div>
            <div className='right'>
            <Link to={'/user/'+user.id}><h2>{user.pseudo}</h2></Link>
                <div className='divbuttonUser'>

                {
                    
                    this.state.isFollowed.map((element) =>{
                        if(element == user.id ){
                            return <h3>followed</h3>
                        }
                       
                            
                    })
                } 
                    <button className='btn-user' type='submit'>follow</button>
                    
                </div>
            </div>
            

            
            </div>
            
        )
        
    

        return (
            <main>
                <SearchUser history={this.props.history}/>
                {/* <h1>Result</h1> */}
                {item}
            </main>
        )
    }
}
