import React, { Component } from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import FriendList from './components/friendlist';
import FriendForm from './components/friendForm';
import Friend from './components/friends';


const clearedFriend= {
  name:'',
  age:'',
  email:'',

}

class App extends Component {
  state = {
    friends: [],
    friend: clearedFriend,
    isUpdating: false
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

  addFriend = e => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/friends', this.state.friend)
    .then(res => {
      this.setState({ friends: res.data});
      this.props.history.push('/friends');
    })
    .catch(err => console.log(err));
  }

  deleteFriend = (friendId) => {
    
   axios
   .delete(`http://localhost:5000/friends/${friendId}`)
   .then(res => {
     this.setState({ friends:res.data });
     this.props.history.push('/friends');
   })
   .catch(err => {
     console.log(err);
   });
  };

  populateFriend = (id) =>{
   
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      isUpdating:true
    });
    this.props.history.push('/friends')
  }

  updateFriend = () => {
    console.log(this.state.friend.id);
    axios.put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
    .then(res => {
      this.setState({
        friends: res.data,
        isUpdating:false,
        friend: clearedFriend
      });
      this.props.history.push('/friends')
    })
    .catch(err => {
      console.log(err)
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        {/* {this.state.error && <h4>{this.state.error}</h4>} */}
        {/* <Route exact path='/' component={Home} />
        <Route 
          exact 
          path={`/friends/:friendId`} 
          render={props => ( <FriendList {...props} friends={this.state.friends}/>)} 
        /> 
        <Route path="/friends/:friendId" render={props =>
        <Friend friends={this.state.friends} friend={this.state.friend} deleteFriend={this.deleteFriend} populateFriend={this.populateFriend} />
        } />
            
       <Route path="/form" render={props => (
           <FriendForm {...props} addFriend={this.addFriend} friend={this.state.friend} handleChanges={this.handleChanges} updateFriend={this.updateFriend} isUpdating={this.state.isUpdating}/>
       )}/> */}
       <FriendList friends={this.state.friends} deleteFriend={this.deleteFriend} populateFriend={this.populateFriend}/>
       <FriendForm addFriend={this.addFriend} friend={this.state.friend} handleChanges={this.handleChanges} updateFriend={this.updateFriend} isUpdating={this.state.isUpdating}/>
      </div>
    );
  }
}

export default App;
