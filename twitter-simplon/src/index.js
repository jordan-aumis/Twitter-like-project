import React from 'react';
import ReactDOM from 'react-dom';
// import './normalize.css'
import './index.css'
import './style.css';
import './bootstrap.css'
import App from './App';
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginPage from './conponent/LoginPage';
import RegisterPage from './conponent/RegisterPage';
import HomePage from './conponent/HomePage';
import ResultPage from './conponent/ResultPage'
import UserPage from './conponent/UserPage'
import NewPost from './conponent/NewPost'
import Header from './conponent/Header'

const routing =(
  <Router>
      <Header/>
      <Route exact path='/' component={LoginPage}/>
      <Route exact path='/register' component={RegisterPage}/>
      <Route exact path='/newpost' component={NewPost}/>
      <Route exact path='/home/:id' component={HomePage}/>
      <Route exact path='/result/:name' component={ResultPage}/>
      <Route exact path='/user/:id' component={UserPage}/>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
