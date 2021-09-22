import React, {useEffect,useState} from "react";
import '../styles/components.css';
import {Link} from 'react-router-dom';


import Logo from '../Images/image 1LogoMenuBar.png';
import Search from '../Images/VectorMenu_Search.svg';
import User from '../Images/VectorMenu_User.svg';
import Bottom from '../Images/VectorMenu_Bottom_Icon.svg';
import Love from '../Images/ShapeMenu_Love.svg';
import Login from '../Images/VectorLogin_User.svg';
import search from '../Images/VectorSearch_Menu_Left.svg'



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
          <span><img src={User} alt="user" /></span>
        </div>
      </div>
    </nav>
    ): 
    // Auksion uchun
    <nav class="navbar  bg-light top_menu">
      <div class="container top_menus">
        <div className="menu_acordion">
        <a href="/"><img src={Logo} alt="logo" /></a>
          <div className="menu_right_center">
            <div style={{backgroundColor:'white', borderRadius:'8px 0 0 8px',}}>
              <button>Везде</button>
              <input type="text" placeholder="Поиск по товарам"/>
            </div>
          <span><img src={search} alt="search" /></span>
          </div>
        </div>

        <div className="menu_right">
          <span>RУ <div style={{marginLeft:'5px'}}><img src={Bottom} alt="icon" /></div></span>
          <Link to="/korzinka">
          <span><img src={Love} alt="search" /></span>
          </Link>
          <span><img src={Login} alt="user" /></span>
        </div>
      </div>
    </nav>
    }
    </>
  );
}

export default MenuBar;
