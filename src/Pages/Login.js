import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/pages.css'

const Login = () => {
  return (
    <>
     <div className="row register_top">
        <div className="register">
          <div className="title"><span>Kirish</span></div>
          <div>
            <form action="/" className="form_register">
              <span>Telefon</span>
              <input type="text"/>
              <span>Parol</span>
              <input type="password"/>
              <div style={{display:'flex', justifyContent: 'flex-end', alignItems:'center'}}><span><Link to="/restart">Parolni eslay olmayman</Link></span>  </div>
              <button>Kirish</button>
              <Link to="/register"><button>Ro’yhatdan o’tish</button> </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
