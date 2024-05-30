import React from 'react'
const Calllogo = () => {
  return (
    <div className="image-container">
    <a href="tel:+9967745712">
      <img
        src="public\c.png"
        alt=""
        style={{
          width: "70px",
          position: "fixed",
          bottom: "20px",
          left: "15px",
          zIndex: "100",
        }}
        className="scaling-image"
      />
    </a>
  </div>
  )
}

export default Calllogo
