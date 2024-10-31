import React from 'react'
import Img1 from '../../assets/images/img-1.webp'
import Img2 from '../../assets/images/img-2.jpg'
import Img3 from '../../assets/images/img-3.jpg'
import Img4 from '../../assets/images/img-4.jpg'
import Img5 from '../../assets/images/img-5.jpg'
import Img6 from '../../assets/images/img-6.jpg'

const Popular = () => {
  return (
    <div
      className="popular container"
      id="popular"
    >
      <h1 className="heading">
        most <span>popular</span> food
      </h1>
      <div className="box-container">
        <div className="box">
          <span className="price">$5 - $20</span>
          <img
            src={Img1}
            alt=""
          />
          <h3>tasty burger</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <a
            href="#"
            className="btn"
          >
            order now
          </a>
        </div>
        <div className="box">
          <span className="price">$5 - $20</span>
          <img
            src={Img2}
            alt=""
          />
          <h3>tasty cakes</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <a
            href="#"
            className="btn"
          >
            order now
          </a>
        </div>
        <div className="box">
          <span className="price">$5 - $20</span>
          <img
            src={Img3}
            alt=""
          />
          <h3>tasty sweets</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <a
            href="#"
            className="btn"
          >
            order now
          </a>
        </div>
        <div className="box">
          <span className="price">$5 - $20</span>
          <img
            src={Img4}
            alt=""
          />
          <h3>tasty cupcakes</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <a
            href="#"
            className="btn"
          >
            order now
          </a>
        </div>
        <div className="box">
          <span className="price">$5 - $20</span>
          <img
            src={Img5}
            alt=""
          />
          <h3>cold drinks</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <a
            href="#"
            className="btn"
          >
            order now
          </a>
        </div>
        <div className="box">
          <span className="price">$5 - $20</span>
          <img
            src={Img6}
            alt=""
          />
          <h3>cold ice-cream</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <a
            href="#"
            className="btn"
          >
            order now
          </a>
        </div>
      </div>
    </div>
  )
}

export default Popular
