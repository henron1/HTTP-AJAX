import React from 'react';

function Friend(props) {

    // const friend = props.friendList.find(
    //     friend => `${friend.id}` === props.match.params.friendId
    // );

    return(
        <div>
            <p>{props.friend.name}</p> 
            <p>{props.friend.age}</p> 
            <p>{props.friend.email}</p> 
            <button onClick={ e => props.deleteFriend(props.friend.id)}> 
                Delete Friend
            </button>
            <button onClick={() => props.populateFriend(props.friend.id)}>
                Update Friend
            </button>
           
        </div>
    );
};

export default Friend;