import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

export default class RegisterPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            pseudo: '',
            email: '',
            password: ''
        }
    }

    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    newUser=()=>{
        let option = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({pseudo: this.state.pseudo, email: this.state.email, password: this.state.password})
        }
        fetch('http://localhost:3050/register', option).then((response)=> {return response.json()})
        .then((data)=>{
            if(data){
               this.props.history.push('/home/'+data.id)
            }
            
        })
    }

    handleSubmit=(e)=>{
        this.newUser()
        e.preventDefault()
    }

    render() {
        return (
            <main>
                <div className='card-form'>

            <h5 className="card-head info-color white-text text-center py-4 form-head">
                <strong>Register</strong>
            </h5>

            <div className="card-body px-lg-5 pt-0">

          
                <form className="text-center" onSubmit={this.handleSubmit}>

                <div className='label'>
                    <label>Pseudo :</label>
                    <input type="text" name='pseudo' className='input' value={this.state.pseudo} onChange={this.handleChange}></input>
                </div>

               
                <div className='label'>
                    <label >E-mail :</label>
                    <input type="text" name='email' className='input' value={this.state.email} onChange={this.handleChange}></input>
                </div>

       
                <div className='label'>
                    <label>Password :</label>
                    <input type="text" name='password' className='input' value={this.state.password} onChange={this.handleChange}></input>
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

             
                <button className="btn-form my-4 " type="submit">Register</button>

               
                <p>Already a member?
                <Link to="/">Sign in</Link>
                </p>
                </form>
            </div>

        </div>
            </main>
        )
    }
}
