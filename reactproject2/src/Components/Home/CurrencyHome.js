import React, { useState, useEffect, render } from "react";
import * as ReactBootStrap from "react-bootstrap";
import ControlledCarousel from "react-bootstrap";
import "./CurrencyHome.css";

const CurrencyHome = () => {
  return (
    <div className="car-div">
      <ReactBootStrap.Carousel>
        <ReactBootStrap.Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/sEkui3q.png"
            alt="First slide"
          />
          <ReactBootStrap.Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/sEkui3q.png"
            alt="Third slide"
          />

          <ReactBootStrap.Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/sEkui3q.png"
            alt="Third slide"
          />

          <ReactBootStrap.Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
      </ReactBootStrap.Carousel>
    </div>
  );
};

export default CurrencyHome;
