import '../App.css'
import React, { useState, useContext } from 'react'
import Whatsapp from './Whatsapp'
import Calllogo from './Calllogo'
import ScrollToTopButton from './ScrollToTopButton'
import Usercontext from '../context/usecontext';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit"


function Products() {

  const { products, formshow, imgshow } = useContext(Usercontext);
  return (

    <div className=" backgraundcolor ">
      <div className="overflow-hidden " >
      <div class="area1">
        <ul   class="circles1">
          <li ></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
        <img className='img-fluid mainphoto w-100 ' src="public\image\pexels-photo-1029243.jpeg" alt="" />
      </div>
      <div className='container-fluid pt-5'>
        <h2 className='text-center pt-5'  style={{ color: '#d90700' }}   >All Products</h2>
        <div className='row col-sm-12 gap-4 d-flex align-items-center justify-content-center px-2 mb-4'>
          <div>

          </div >
          <div className=' row col-sm-11    d-flex align-items-center justify-content-center px-2 mb-4' s>
            {products.map(product =>
            <>
              {/* <div id="" className="col-sm-3    " key={photo.src}>
                <div className='h-50  border mt-2 bg-white shadow rounded-2'>
                <div style={{ height: "300px" }} className='m-2' id="card1">
                  
                  <img style={{ height: "200px" }}
                    className="img-fluid  w-100  "
                    src={photo.src} onClick={() => { imgshow(photo.src) }}
                    alt=""
                  />
>>>>>>> f19733d7b53b1e6fd6d86379b2f255189c5caeac
                  <p
                    style={{ color: '#d90700' }}
                    className="d-flex  align-items-center justify-content-center fw-bold fs-6 "
                  >
                    {photo.name}
                  </p>
                  <img style={{ height: "200px" }}
                    className="img-fluid  w-100  "
                    src={photo.src} onClick={() => { imgshow(photo.src ) }}
                    alt=""
                  /></div>
                  <button className='p-1 text-light mt-3 w-100 rounded-0' onClick={() => { formshow(photo.name) }} >Enquiry Now</button>
                </div>
              </div>
              </div> */}

<div id="" className="col-sm-3  px-2 my-2 " key={product.itemName}>
<MDBCard className="card-container shadow">
  <div className="img-container">
    <MDBCardImage
      src={product.imageUrl}
      position="top"
      alt="Image"
      style={{height : "200px"}}
      className="card-img"
      onClick={() => { imgshow(product.imageUrl) }}
    />
  </div>
  <MDBCardBody className='p-0 px-3 pt-2 ' style={{height : '80px'}}>
    <MDBCardTitle className="card-title fw-bold" style={{color:'#d90700'}}>
      {product.itemName}
    </MDBCardTitle>
    <p>{product.desc}</p>
    <div className='w-100 d-flex justify-content-between align-items-center'>
      <p className=''>{product.price}</p>
    <p className='p-1 text-light  text-black ' onClick={() => { formshow(product.itemName) }} > inquriy now </p>
    </div>
  </MDBCardBody>
</MDBCard>
</div>
</>
            )}
          </div>
        </div>
      </div>
      <Whatsapp />
      <Calllogo />
      <ScrollToTopButton />
    </div>
  )
}
export default Products;
