import React from 'react'
import '../src/Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
       <nav>
           <li>
               <Link to="/">All</Link>
           </li>
           <ul className="nav-links">
               <li>
                   <Link to="/about">React Js</Link>
               </li>
               <li>
                   <Link to="/blog">Javascript</Link>
               </li>
               <li>
                   <Link to="/konsovka">Node Js</Link>
               </li>
           </ul>
       </nav>
    )
}

export default Nav;
