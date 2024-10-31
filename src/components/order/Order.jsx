import React from 'react'
import Img1 from '../../assets/images/o-1.jpg'
const Order = () => {
  return (
    <div
      className="order container"
      id="order"
    >
      <h1 className="heading">
        <span>order</span> now
      </h1>
      <div className="row">
        <div className="image">
          <img
            src={Img1}
            alt=""
          />
        </div>
        <form action="">
          <div className="inputBox">
            <input
              type="text"
              placeholder="name"
            />
            <input
              type="email"
              placeholder="email"
            />
          </div>
          <div className="inputBox">
            <input
              type="number"
              placeholder="number"
            />
            <input
              type="text"
              placeholder="food name"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="address"
            cols="30"
            rows="10"
          ></textarea>
          <input
            type="submit"
            value="order now"
            className="btn"
          />
        </form>
      </div>
    </div>
  )
}

export default Order
