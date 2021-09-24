import React from 'react'

const Restart3 = () => {
  return (
    <>
       <div className="row register_top">
        <div className="register">
          <div className="title"><span>Parolni tiklash</span></div>
          <div>
            <form action="/" className="form_register">
              <span>Telefon</span>
              <input type="text" placeholder="+998 99 999 99 99" />
              <span>Parolni takrorlang</span>
              <input type="password"  />
              <button>Davom etish</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Restart3
