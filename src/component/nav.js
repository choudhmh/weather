import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes, 
  Router,
  Route, Link,
} from "react-router-dom";


import DisplayDifferentLocation from './displayDifferentLocation';


function Nav() {
    return(
        <div className="App">
      <nav>
     <li>
      <Link to="/displayDifferentLocation"> DisplayDifferentLocation </Link>
       </li>
      </nav>
    </div>
    )

       
}


export default Nav;