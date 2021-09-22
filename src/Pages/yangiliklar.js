import React from 'react'
import '../styles/pages.css'


import newsFt from '../Images/Rectangle 3369News_Foto.png'
import dates from '../Images/Vectornews_Date.svg';
import eyes from '../Images/eyeEyes.svg';
import line from '../Images/Line 287Lines.svg';
import Allf from '../Images/Rectangle 2820All_News.png';
import allB from '../Images/Rectangle 2755All_Top.png';
import allT from '../Images/Rectangle 2755All_Bottom.png';


import sumka from '../Images/VectorSumka.svg';
import devor from '../Images/Line 287Devor.svg';
import koz from '../Images/eyeKoz.svg';


const Yangiliklar = () => {
  return (
    <>
      <div className="row new_page">
        <div className="news_top">
          <h3>Oxirgi yangiliklar</h3>
        </div>
        <div className="news_drop">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Jahon
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#!">Tabiat</a></li>
              <li><a class="dropdown-item" href="#!">Jahon</a></li>
              <li><a class="dropdown-item" href="#!">Iqtisodiyot</a></li>
              <li><a class="dropdown-item" href="#!">Jamiyat</a></li>
              <li><a class="dropdown-item" href="#!">Fan</a></li>
              <li><a class="dropdown-item" href="#!">Texnika</a></li>
              <li><a class="dropdown-item" href="#!">Sport</a></li>
              <li><a class="dropdown-item" href="#!">Avto</a></li>
            </ul>
        </div>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Hududlar
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" href="#!">Toshkent</a></li>
              <li><a class="dropdown-item" href="#!">Toshkent viloyati</a></li>
              <li><a class="dropdown-item" href="#!">Samarqand</a></li>
              <li><a class="dropdown-item" href="#!">Buxoro</a></li>
              <li><a class="dropdown-item" href="#!">Jizzax</a></li>
              <li><a class="dropdown-item" href="#!">Namamgan</a></li>
              <li><a class="dropdown-item" href="#!">Navoiy</a></li>
              <li><a class="dropdown-item" href="#!">Farg'ona</a></li>
              <li><a class="dropdown-item" href="#!">Termiz</a></li>
              <li><a class="dropdown-item" href="#!">Sirdaryo</a></li>
              <li><a class="dropdown-item" href="#!">Surxondaryo</a></li>
              <li><a class="dropdown-item" href="#!">Xorazm</a></li>
            </ul>
        </div>
        </div>
      <div className="col-lg-3">
        <div className="news_body">
          <div className="info">
            <img src={newsFt} alt="news" />
          </div>
          <div className="first">
            <div><img src={dates} alt="dates" /> <span>11 марта 10:15</span> <img src={line} alt="line" />  <img src={eyes} alt="eyes" /> <span>365</span> </div>
            <p>O’zbekiston maktablarida yangi o’quv yilida, yangi o’quv darsliklari...</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="news_body">
          <div className="info">
            <img src={newsFt} alt="news" />
          </div>
          <div className="first">
            <div><img src={dates} alt="dates" /> <span>11 марта 10:15</span> <img src={line} alt="line" />  <img src={eyes} alt="eyes" /> <span>365</span> </div>
            <p>O’zbekiston maktablarida yangi o’quv yilida, yangi o’quv darsliklari...</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="news_body">
          <div className="info">
            <img src={newsFt} alt="news" />
          </div>
          <div className="first">
            <div><img src={dates} alt="dates" /> <span>11 марта 10:15</span> <img src={line} alt="line" />  <img src={eyes} alt="eyes" /> <span>365</span> </div>
            <p>O’zbekiston maktablarida yangi o’quv yilida, yangi o’quv darsliklari...</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="news_body">
          <div className="info">
            <img src={newsFt} alt="news" />
          </div>
          <div className="first">
            <div><img src={dates} alt="dates" /> <span>11 марта 10:15</span> <img src={line} alt="line" />  <img src={eyes} alt="eyes" /> <span>365</span> </div>
            <p>O’zbekiston maktablarida yangi o’quv yilida, yangi o’quv darsliklari...</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="news_body">
          <div className="info">
            <img src={newsFt} alt="news" />
          </div>
          <div className="first">
            <div><img src={dates} alt="dates" /> <span>11 марта 10:15</span> <img src={line} alt="line" />  <img src={eyes} alt="eyes" /> <span>365</span> </div>
            <p>O’zbekiston maktablarida yangi o’quv yilida, yangi o’quv darsliklari...</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="news_body">
          <div className="info">
            <img src={newsFt} alt="news" />
          </div>
          <div className="first">
            <div><img src={dates} alt="dates" /> <span>11 марта 10:15</span> <img src={line} alt="line" />  <img src={eyes} alt="eyes" /> <span>365</span> </div>
            <p>O’zbekiston maktablarida yangi o’quv yilida, yangi o’quv darsliklari...</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="news_body">
          <div className="info">
            <img src={newsFt} alt="news" />
          </div>
          <div className="first">
            <div><img src={dates} alt="dates" /> <span>11 марта 10:15</span> <img src={line} alt="line" />  <img src={eyes} alt="eyes" /> <span>365</span> </div>
            <p>O’zbekiston maktablarida yangi o’quv yilida, yangi o’quv darsliklari...</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="news_body">
          <div className="info">
            <img src={newsFt} alt="news" />
          </div>
          <div className="first">
            <div><img src={dates} alt="dates" /> <span>11 марта 10:15</span> <img src={line} alt="line" />  <img src={eyes} alt="eyes" /> <span>365</span> </div>
            <p>O’zbekiston maktablarida yangi o’quv yilida, yangi o’quv darsliklari...</p>
          </div>
        </div>
      </div>
      <div className="news_top">
          <h3>Barcha yangiliklar</h3>
      </div>
        <div className="col-lg-5">
        <div className="news_body">
          <div className="info">
            <img src={Allf} alt="news" />
          </div>
          <div className="first">
            <div><img src={dates} alt="dates" /> <span>11 марта 10:15</span> <img src={line} alt="line" />  <img src={eyes} alt="eyes" /> <span>365</span> </div>
            <p>Сукук, как новый финансовый инструмент на рынке Узбекистана. Интервью с главой Агентства по развитию рынка капитала...</p>
          </div>
        </div>
      </div>
        <div className="col-lg-7">
          <div className="New_end_top"> 
            <div><img src={allB} alt="top" /></div>
            <div className="new-top1">
               <div className="child"><img src={sumka} alt="dates" /> <span>11 марта 10:15</span> <img src={devor} alt="line" />  <img src={koz} alt="eyes" /> <span>365</span> </div> 
               <span>Сообщения о получении помощи
                  более чем два раза чаще встречаются
                  среди респондентов </span>
               <p>Узбекистан и Кыргызстан подписали 22 документа по различным направлениям в рамках государственного визита президента Садыра Жапарова в Ташкент. 11 марта главы государств приняли совместное заявление, а также состоялся обмен подписанными...</p>
            </div>
          </div>
          <div className="New_end_top"> 
            <div><img src={allT} alt="top" /></div>
            <div className="new-top1">
               <div className="child"><img src={sumka} alt="dates" /> <span>21 марта 10:15</span> <img src={devor} alt="line" />  <img src={koz} alt="eyes" /> <span>365</span> </div> 
               <span>Сообщения о получении помощи
                  более чем два раза чаще встречаются
                  среди респондентов </span>
               <p>Узбекистан и Кыргызстан подписали 22 документа по различным направлениям в рамках государственного визита президента Садыра Жапарова в Ташкент. 11 марта главы государств приняли совместное заявление, а также состоялся обмен подписанными...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Yangiliklar
