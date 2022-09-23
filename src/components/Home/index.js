// Write your code here
import {Component} from 'react'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {status: true}

  onStatus = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {status && <Message msg="true" />}
          {status && (
            <button className="button" type="button" onClick={this.onStatus}>
              <Login />
            </button>
          )}
          {!status && <Message msg="false" />}
          {!status && (
            <button className="button" type="button" onClick={this.onStatus}>
              <Logout />
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default Home
