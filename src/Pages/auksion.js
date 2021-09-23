import React from 'react';
import '../styles/pages.css';
// import { useSelector } from "react-redux";
import Pc from '../Images/Rectangle 3375Nootebook.png'
import Js from '../Images/Rectangle 3375Jostik.png'
import Vs from '../Images/Rectangle 3375Velosiped.png'
import Vl from '../Images/Rectangle 3375Volume.png'

import NotLike from '../Images/VectorLike_Product.svg'


function Auksion (){
  // const products = useSelector((state) => state.allProducts.products);
  // console.log("Auksion",products)
  return(
    <>
     <div className="auksion">
       <div className="row">
         <div className="col-lg-3">
           <div className="products">
             <div className="for_likes"><img src={Pc} alt="Pc" /> <div className="abs"><img src={NotLike} alt="NotLike" /></div> </div>
             <div className="f1"><span>120 650 000 so’m</span></div>
             <div><p>Macbook Air M1 2020</p></div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="products">
             <div className="for_likes"><img src={Js} alt="Pc" /> <div className="abs"><img src={NotLike} alt="NotLike" /></div> </div>
             <div className="f1"><span>120 650 000 so’m</span></div>
             <div><p>Macbook Air M1 2020</p></div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="products">
             <div className="for_likes"><img src={Vs} alt="Pc" /> <div className="abs"><img src={NotLike} alt="NotLike" /></div> </div>
             <div className="f1"><span>120 650 000 so’m</span></div>
             <div><p>Macbook Air M1 2020</p></div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="products">
             <div className="for_likes"><img src={Vl} alt="Pc" /> <div className="abs"><img src={NotLike} alt="NotLike" /></div> </div>
             <div className="f1"><span>120 650 000 so’m</span></div>
             <div><p>Macbook Air M1 2020</p></div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="products">
             <div className="for_likes"><img src={Pc} alt="Pc" /> <div className="abs"><img src={NotLike} alt="NotLike" /></div> </div>
             <div className="f1"><span>120 650 000 so’m</span></div>
             <div><p>Macbook Air M1 2020</p></div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="products">
             <div className="for_likes"><img src={Js} alt="Js" /> <div className="abs"><img src={NotLike} alt="NotLike" /></div> </div>
             <div className="f1"><span>120 650 000 so’m</span></div>
             <div><p>Macbook Air M1 2020</p></div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="products">
             <div className="for_likes"><img src={Vs} alt="Vs" /> <div className="abs"><img src={NotLike} alt="NotLike" /></div> </div>
             <div className="f1"><span>120 650 000 so’m</span></div>
             <div><p>Macbook Air M1 2020</p></div>
           </div>
         </div>
         <div className="col-lg-3">
           <div className="products">
             <div className="for_likes"><img src={Vl} alt="Vl" /> <div className="abs"><img src={NotLike} alt="NotLike" /></div> </div>
             <div className="f1"><span>120 650 000 so’m</span></div>
             <div><p>Macbook Air M1 2020</p></div>
           </div>
         </div>
       </div>
       <div className="auk_bot"><button>Ko’proq ko’rsatish</button></div>
     </div>
    
    </>
  )
}

export default Auksion