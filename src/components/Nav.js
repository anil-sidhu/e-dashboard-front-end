import React from 'react';
import { Link
 } from 'react-router-dom';
const Nav=()=>{
    return(
        <div>
           <ul className="nav-ul">
               <li><Link to="/">Products</Link></li>
               <li><Link to="/add">Add Products</Link></li>
               <li><Link to="/update"> Update Products</Link></li>
               <li><Link to="/logout">Logout</Link></li>
               <li><Link to="/profile">Profile</Link></li>
               <li><Link to="/signup">Sign Up</Link></li>


           </ul>
        </div>
    )
}

export default Nav;