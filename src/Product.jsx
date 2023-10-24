import React from 'react'

export default function Product(props) {
  return (
    <div className="col-lg-4  col-md-6 ">
    <div className=" position-relative room-card pb-5 my-3">
      <div className="zoom-hover">
        <img src="/assets/img/room-1.jpg" className=" w-100" alt />
      </div>
      <p className="room-price translate-middle position-absolute start-50 top-60 w-75 px-4 ">
        Start from <span className>$55.0</span>/night
      </p>
      <div className="px-4">
        <div className="rating mt-5 mb-4">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
        </div>
        <a href="#" className>
          <h4>{props.title}</h4>
          <h4>{props.price}</h4>
          <h4>{props.desc}</h4>

        </a>
        <p className="py-4 details">
          Mattis cras magna morb punar aenean aliquet in. Risus a arcu
          eget.
        </p>
        <a className="Book-button" href="/rooms-details.html">BOOK NOW<span style={{top: 100, left: 0}} /></a>
      </div>
    </div>
  </div>  )
}
