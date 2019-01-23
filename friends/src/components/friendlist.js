import React from 'react';
import Friend from './friends';

function FriendList (props) {
    return (
        <div>
            {props.friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />
                
            })}
        </div>
    )
}

export default FriendList;