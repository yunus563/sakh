import React from 'react'
import '../styles/pages.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className="row register_top">
        <div className="register">
          <div className="title"><span>Ro’yhatdan o’tish</span></div>
          <div>
            <form action="/password" className="form_register">
              <span>Telefon</span>
              <input type="text"  />
              <button>Faollashtirish kodini oling</button>
            </form>
          </div>
          <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}><span>Hisobingiz bormi?</span> <Link to="/login">Kirish</Link> </div>
        </div>
      </div>
    </>
  )
}

export default Register
