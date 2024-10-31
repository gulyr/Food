import React from 'react'
import Img1 from '../../assets/images/r-1.jpg'
import Img2 from '../../assets/images/r-2.png'
import Img3 from '../../assets/images/r-3.png'
const Review = () => {
  return (
    <div
      className="review container"
      id="review"
    >
      <h1 class="heading">
        our customers <span>reviews</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img
            src={Img1}
            alt=""
          />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellat
            id quis labore at, expedita aspernatur voluptatem aliquam tempora
            quam?
          </p>
        </div>
        <div className="box">
          <img
            src={Img2}
            alt=""
          />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellat
            id quis labore at, expedita aspernatur voluptatem aliquam tempora
            quam?
          </p>
        </div>
        <div className="box">
          <img
            src={Img3}
            alt=""
          />
          <h3>john deo</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellat
            id quis labore at, expedita aspernatur voluptatem aliquam tempora
            quam?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Review
