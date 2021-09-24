import React from "react";
import '../styles/components.css';
import MenuDrop from './MenuDrop'
import {Link} from 'react-router-dom'

import Logo from '../Images/image 1LogoMenuBar.png';
import Search from '../Images/VectorMenu_Search.svg';
import User from '../Images/VectorMenu_User.svg';
import Bottom from '../Images/VectorMenu_Bottom_Icon.svg';




function MenuBar() {
  
  return (
    <>
    {window.location.pathname !== '/auksion' ? (
      <nav class="navbar  bg-light top_menu">
      <div class="container">
        <a href="/"><img src={Logo} alt="logo" /></a>
        <div className="menu_right">
          <span>RУ <div style={{marginLeft:'5px'}}><img src={Bottom} alt="icon" /></div></span>
          <span><img src={Search} alt="search" /></span>
          <Link to="/register"><span><img src={User} alt="user" /></span></Link>
        </div>
      </div>
    </nav>
    ): 
    // Auksion uchun
      <MenuDrop/>
    }
    </>
  );
}

export default MenuBar;
