import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import FriendList from './components/friendlist';
import FriendForm from './components/friendForm';

class App extends Component {
  state = {
    friends: [],
    friend: {
      name: '',
      age: '',
      email: ''
    }
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

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  addFriend = () => {
    axios
    .post('http://localhost:5000/friends', this.state.friend)
    .then(res => {
      this.setState({ friends: res.data});
      this.props.history.push('/friends');
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        {/* {this.state.error && <h4>{this.state.error}</h4>} */}
        
        <FriendList friends={this.state.friends} />
        <FriendForm addFriend={this.addFriend} friend={this.state.friend} handleChanges={this.handleChanges}/>
        
      </div>
    );
  }
}

export default App;
