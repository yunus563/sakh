import React, {useState} from "react";
import "../styles/components.css";
import { Link } from "react-router-dom";

import Love from "../Images/ShapeMenu_Love.svg";
import Login from "../Images/VectorLogin_User.svg";
import search from "../Images/VectorSearch_Menu_Left.svg";
import Logo from "../Images/image 1LogoMenuBar.png";
import Bottom from "../Images/VectorMenu_Bottom_Icon.svg";

import elektr from '../Images/responsive 1elektronika.svg'
import kiyimlar from '../Images/Groupkiyimlar.svg'
import uyvabog from '../Images/svg (1) 1uyvabog.svg'
import bolalar from '../Images/little-kid 1bolalar.svg'
import goazllik from '../Images/makeup 1goazllik.svg'
import maishiy from '../Images/Groupmaishiy.svg'
import sport from '../Images/ball 1sport.svg'
import qurilish from '../Images/tools 1qurilish.svg'
import kitob from '../Images/book 2kitob.svg'
import mebel from '../Images/sofa 1mebel.svg'
import zargarlik from '../Images/diamond-ring 1zargarlik.svg'
import oyinlar from '../Images/console 1oyinlar.svg'
import close from '../Images/VectorClose.svg'
import menu from '../Images/VectorVector_menu.svg'





const MenuDrop = () => {

const [active, setActive] = useState(false)

function handle(){
  if(active){
    setActive(false)
  }
  else{
    setActive(true)
  }
}

  return (
    <>
      <nav class="navbar  bg-light top_menu">
        <div className="container">
          <div class="top_menus">
            <div className="menu_acordion">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
              <div className="katalog">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                        onClick={handle}
                      >
                        {active ? <div><img src={close} alt="menu" /></div> : <div><img src={menu} alt="menu" /></div>}
                        <div>Каталог</div>
                      </button>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="menu_right_center">
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "8px 0 0 8px",
                  }}
                >
                  <button>Везде</button>
                  <input type="text" id="serch5" placeholder="Поиск по товарам" />
                </div>
                <span>
                  <label htmlFor="serch5">
                    <img src={search} alt="search" />
                  </label>
                </span>
              </div>
            </div>

            <div className="menu_right">
              <span>
                RУ{" "}
                <div style={{ marginLeft: "5px" }}>
                  <img src={Bottom} alt="icon" />
                </div>
              </span>
              <Link to="/korzinka">
                <span>
                  <img src={Love} alt="search" />
                </span>
              </Link>
              <span>
                <img src={Login} alt="user" />
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="katalog_drop">
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="col-lg-3">
              <a href="/elektronika">
                <div class="accordion-body"> <div><img src={elektr} alt="elektr" /></div> Elektronika</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={kiyimlar} alt="elektr" /></div>Kiyimlar</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={uyvabog} alt="elektr" /></div>Uy va bog’</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={bolalar} alt="elektr" /></div>Bolalar mahsuloti</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={goazllik} alt="elektr" /></div>Go’zallik</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={maishiy} alt="elektr" /></div>Maishiy texnika</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={sport} alt="elektr" /></div>Sport va dam olish</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={qurilish} alt="elektr" /></div>Qurilish va remont</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={kitob} alt="elektr" /></div>Kitob</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={mebel} alt="elektr" /></div>Mebel</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={zargarlik} alt="elektr" /></div>Zargarlik</div>
              </a>
              <a href="/elektronika">
                <div class="accordion-body"><div><img src={oyinlar} alt="elektr" /></div>O’yinlar</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDrop;
