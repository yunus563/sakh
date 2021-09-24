import React from 'react'

const Restart = () => {
  return (
    <>
      <div className="row register_top">
        <div className="register">
          <div className="title"><span>Parolni tiklash</span></div>
          <div>
            <form action="/restart2" className="form_register">
              <span>Telefon</span>
              <input type="text"  />
              <button>Faollashtirish kodini oling</button>
            </form>
          </div>
          <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}> </div>
        </div>
      </div>
    </>
  )
}

export default Restart
