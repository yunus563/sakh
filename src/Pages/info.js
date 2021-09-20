import React from 'react'
import '../styles/pages.css'
import Pc from '../Images/Rectangle 3375Nootebook.png'
import Like from '../Images/VectorLike_red_Product.svg'


const info = () => {
  return (
    <>
     <div className="korzinka">
        <h3>Saqlanganlar</h3>
        <div className="col-12">
          <div className="tech">
            <div><img src={Pc} alt="img" /></div>
            <div className="left">
              <div><span>Macbook Air M1 2020 Black</span><p>120 650 000 so’m</p></div>
              <div><span>Toshkent, Yunusobod tumani - 12 sentabr</span><div><img src={Like} alt="like" /></div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default info
