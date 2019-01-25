import React from 'react';
import Friend from './friends';

function FriendList (props) {
    return (
        <div>
            {props.friends.map(friend => {
                return <Friend friend={friend} key={friend.id} deleteFriend={props.deleteFriend} populateFriend={props.populateFriend} />;
                
            })}
        </div>
    )
}

export default FriendList;