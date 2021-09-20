import React from "react";
import '../styles/pages.css'
import { Link } from 'react-router-dom';



import Pc from '../Images/Rectangle 3375Nootebook.png'
import Js from '../Images/Rectangle 3375Jostik.png'
import Vs from '../Images/Rectangle 3375Velosiped.png'
import Vl from '../Images/Rectangle 3375Volume.png'
import LikeActive from '../Images/VectorLike_red_Product.svg'



const Korzinka = () => {

  
  return (
    <>
      <div className="korzinka">
        <h3>Saqlanganlar</h3>
        <div className="products">
          <span>В Избранном пока ничего нет</span>
          <p>Добавляйте товары в Избранное с помощью</p>
        </div>
      </div>

      <div className="korzinka">
        <div className="products_header"><h3>Saqlanganlar</h3> <button>Очистить всё</button> </div>
        <div className="row">
          <div className="col-lg-3">
            <Link to={"/info/" + 1}>
            <div className="card1">
              <div className="z_pos">
                <img src={Pc} alt="pc" />
                <div className="like"><img src={LikeActive} alt="like" /></div>
              </div>
              <span>120 650 000 so’m</span>
              <p>Macbook Air M1 2020</p>
            </div>
            </Link>
          </div>
          <div className="col-lg-3">
            <Link to={"/info/" + 2}>
            <div className="card1">
            <div className="z_pos">
                <img src={Js} alt="pc" />
                <div className="like"><img src={LikeActive} alt="like" /></div>
              </div>
              <span>120 650 000 so’m</span>
              <p>Play Station 5 </p>
            </div>
            </Link>
          </div>
          <div className="col-lg-3">
           <Link to={"/info/" + 3}>
           <div className="card1">
            <div className="z_pos">
                <img src={Vs} alt="pc" />
                <div className="like"><img src={LikeActive} alt="like" /></div>
              </div>
              <span>120 650 000 so’m</span>
              <p>Huawei Mate Pro 40</p>
            </div>
           </Link>
          </div>
          <div className="col-lg-3">
            <Link to={"/info/" + 4}>
            <div className="card1">
            <div className="z_pos">
                <img src={Vl} alt="pc" />
                <div className="like"><img src={LikeActive} alt="like" /></div>
              </div>
              <span>120 650 000 so’m</span>
              <p>Velosiped Sportiviy</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Korzinka
