import React from 'react'
import {Link} from 'react-router-dom'



const Password = () => {
  return (
    <>
       <div className="row register_top">
        <div className="register">
          <div className="title"><span>Ro’yhatdan o’tish</span></div>
          <div>
            <form action="/confirmpassword" className="form_register">
              <span>Telefon</span>
              <input type="text" placeholder="+998 99 999 99 99" />
              <span>Kod</span>
              <input type="password"/>
              <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}><span>Kodni qayta yuborish</span>  </div>
              <button>Davom etish</button>
            </form>
          </div>
          <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}><span>Hisobingiz bormi?</span> <Link to="/login">Kirish</Link> </div>
        </div>
      </div>
    </>
  )
}

export default Password
