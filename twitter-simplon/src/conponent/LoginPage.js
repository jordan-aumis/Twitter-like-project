import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

export default class LoginPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    getUser=()=>{
        let option = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: this.state.email, password: this.state.password})
        }
        fetch('http://localhost:3050/login', option).then((response)=>{
            return response.json()})
            .then((data)=>{
                if(data){
                    window.localStorage.setItem('token', data.token)
                    window.localStorage.setItem('id', data.idUser)
                    this.props.history.push('/home/'+data.idUser)
                }
            })
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit=(e)=>{
        this.getUser()
        e.preventDefault()
    }

    checkIfToken=()=>{
        let token = window.localStorage.getItem('token')
        let id = window.localStorage.getItem('id')
        if(token && id){
            this.props.history.push('/home/'+id)
        }
    }
    

    componentDidMount=()=>{
        this.checkIfToken()
    }

    render() {
        return (
            <main>
                <div className='card-form'>

            <h5 className="card-head info-color white-text text-center py-4 form-head">
                <strong>Sign in</strong>
            </h5>

            <div className="card-body px-lg-5 pt-0">

          
                <form className="text-center" onSubmit={this.handleSubmit}>

               
                <div className='label'>
                    <label>E-mail :</label>
                    <input type="text" name='email' className='input' value={this.state.email} onChange={this.handleChange}></input>
                </div>

       
                <div className='label'>
                    <label >Password :</label>
                    <input type="password" name='password' className='input' value={this.state.password} onChange={this.handleChange}></input>
                </div>

                <div className="d-flex justify-content-around">
                    <div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"></input>
                        <label className="form-check-label">Remember me</label>
                    </div>
                    </div>
                    <div>
                    <a href="">Forgot password?</a>
                    </div>
                </div>
         
                <button className="btn-form my-4 " type="submit">Sign in</button>

                <p>Not a member?
                <Link to="/register">Register</Link>
                </p>
                </form>
            </div>

        </div>
            </main>
        )
    }
}
