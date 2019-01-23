import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import FriendList from './components/friendlist';

class App extends Component {
  state = {
    friends: [],
    // error: ''
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      this.setState({
        friends: res.data,
        // error: ''
      })
     
    })
    .catch(err => {
      this.setState({error: err});
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        {/* {this.state.error && <h4>{this.state.error}</h4>} */}
        
        <FriendList friends={this.state.friends} />
        
      </div>
    );
  }
}

export default App;
