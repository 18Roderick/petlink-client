import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import * as Color from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createMuiTheme } from "@material-ui/core/styles";

import Body from "../body";

import "./index.css";

export default function SimpleTabs() {
  const [active, setActive] = React.useState('');

  
  const toogleBurger = (e) => {
    
    if(active){
      setActive('nav-active')
    }else{
      setActive('')
    }
  }
  return (
    <Router>
      <nav className="navbar-container">
        <div className="brand-title">
          <h4>
            <Link to="/">Petlink</Link>
          </h4>
        </div>
        <ul className="ul-nav">
          <li>
            <Link to="/adopta">Adopta</Link>
          </li>
          <li>
            <Link to="/linker">Linker</Link>
          </li>
        </ul>

        <div className={`burger ${active}`} onClick={toogleBurger}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
      <Body />
    </Router>
  );
}
