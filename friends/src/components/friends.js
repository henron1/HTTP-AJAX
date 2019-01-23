import React from 'react';

function Friend(props) {
    return(
        <div>
           <h2>{props.friend.id}</h2> 
           <p>{props.friend.name}</p> 
           <p>{props.friend.age}</p> 
           <p>{props.friend.email}</p> 
        </div>
    );
};

export default Friend;