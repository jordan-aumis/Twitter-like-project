import React, { Component } from 'react'
import logo from '../simplon_logo.png'
export default class Header extends Component {
    
    constructor(props) {
        super(props);
        
    }
    render() {
        {
            if(!window.localStorage.getItem('token')){
                return (
                    <header>
                        <nav className="header-nav">
                        <img className='logoSimplon' src={logo}></img>
                           <h1 className='header-title' >Découvrez Simplonier et restez connecté sur l'actualité</h1>
                        </nav>
                        <hr></hr>
                    </header>
                )
            }
            else{
                return (
                    <header>
                        <nav className="header-nav">
                        <img className='logoSimplon' src={logo}></img>
                           <h1 className='header-title' >Connecté</h1>
                        </nav>
                        <hr></hr>
                    </header>
                )
            }

        }
        
    }
}
