import React from 'react';

function FriendForm(props) {
    function handleSubmit(ev) {
        ev.preventDefault();
        if (props.isUpdating) {
            props.updateItem();
        } else {
            props.addItem();
        }
    }

    return (
        <div>
            <h2>{props.isUpdating ? 'Update Friend' : 'Add New Friend'}</h2>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={props.friend.name}
                placeholder="Name"
                // onChange={props.handleChanges}
            />
            <div className="baseline" />
            <input
                type="number"
                name="age"
                value={props.friend.age}
                placeholder="Age"
                // onChange={props.handleChanges}
            />
            <div className="baseline" />
            <input
                type="text"
                name="email"
                value={props.friend.email}
                placeholder="Email"
                // onChange={props.handleChanges}
            />
            <div className="baseline" />
            <button type='submit' onClick={this.addFriend}>{props.isUpdating ? 'Update Friend' : 'Add New Friend'}</button>
            </form>

        </div>
    )
}

export default FriendForm;