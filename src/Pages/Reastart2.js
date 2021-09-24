import React from 'react'
import {Link} from 'react-router-dom'

const Reastart2 = () => {
  return (
    <>
      <div className="row register_top">
        <div className="register">
          <div className="title"><span>Parolni tiklash</span></div>
          <div>
            <form action="/restart3" className="form_register">
              <span>Telefon</span>
              <input type="text" placeholder="+998 99 999 99 99" />
              <span>Kod</span>
              <input type="password"  />
              <div style={{display:'flex', justifyContent: 'center', alignItems:'center', marginBottom:'14px'}}> <div><Link to="/">Kodni yana yuboring</Link></div> </div>
              <button>Davom etish</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reastart2
