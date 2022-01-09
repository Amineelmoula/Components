import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import "./Carousel.css"

const Carousell = () =>{
    return(
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      alt="laptop bag"
    />
    <Carousel.Caption>
      <h3>Foldsack No. 1 Backpack</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Mens Casual Premium Slim Fit T-Shirts</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Mens Cotton Jacket</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
};

export default Carousell;