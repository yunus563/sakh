import React from 'react'
import {Link} from 'react-router-dom'
const ConfirmPassword = () => {
  return (
    <>
      <div className="row register_top">
        <div className="register">
          <div className="title"><span>Ro’yhatdan o’tish</span></div>
          <div>
            <form action="/" className="form_register">
              <span>Parol</span>
              <input type="password"/>
              <span>Parolni takrorlang</span>
              <input type="password"/>
              <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}><span>Kodni qayta yuborish</span>  </div>
              <button>Ro'yxatdan o'tish</button>
            </form>
          </div>
          <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}><span>Hisobingiz bormi?</span> <Link to="/login">Kirish</Link> </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmPassword
