import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
class HostSigInPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      errors: ''
     };
  }
_handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
_handleSubmit = (event) => {
    event.preventDefault()
  };
render() {
    const {username, email, password} = this.state
return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this._handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this._handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this._handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this._handleChange}
          />
         <button placeholder="submit" type="submit">
            Log In
          </button>
          <div>
            or <Link to='/signup'>sign up</Link>
          </div>
          
         </form>
      </div>
    );
  }
}
export default HostSigInPage;