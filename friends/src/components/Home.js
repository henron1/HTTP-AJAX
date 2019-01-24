import React from 'react';
import { NavLink } from 'react-router-dom';


function Home(props){
    return(
        <div>
        <h1>This is a Friends List</h1>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends List</NavLink>
            <NavLink to="/form">Friends Form</NavLink>
        </div>
        </div>
    );
}

export default Home;