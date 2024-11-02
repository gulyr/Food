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
      <div className="row p-8 bg-white flex flex-wrap gap-6">
        <div className="image rounded-lg">
          <img
            src={Img1}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <form
          action=""
          className="p-4"
        >
          <div className="inputBox flex flex-wrap justify-between">
            <input
              type="text"
              placeholder="name"
              className="p-4 w-[49%] text-white decoration-none mx-0 my-4 text-[1.7rem] rounded-lg border-[0.1rem] border-solid border-[rgba(0, 0, 0, 0.1)]"
            />
            <input
              type="email"
              placeholder="email"
              className="p-4 w-[49%] text-white decoration-none mx-0 my-4 text-[1.7rem] rounded-lg border-[0.1rem] border-solid border-[rgba(0, 0, 0, 0.1)]"
            />
          </div>
          <div className="inputBox flex flex-wrap justify-between">
            <input
              type="number"
              placeholder="number"
              className="p-4 w-[49%] text-white decoration-none mx-0 my-4 text-[1.7rem] rounded-lg border-[0.1rem] border-solid border-[rgba(0, 0, 0, 0.1)]"
            />
            <input
              type="text"
              placeholder="food name"
              className="p-4 w-[49%] text-white decoration-none mx-0 my-4 text-[1.7rem] rounded-lg border-[0.1rem] border-solid border-[rgba(0, 0, 0, 0.1)]"
            />
          </div>
          <textarea
            placeholder="address"
            cols="30"
            rows="10"
            className="p-4 text-white decoration-none mx-0 my-4 text-[1.7rem] rounded-lg border-[0.1rem] border-solid border-[rgba(0, 0, 0, 0.1)] w-full resize-none h-60"
          ></textarea>
          <input
            type="submit"
            value="order now"
            className="btn bg-none hover:bg-[#ff3838]"
          />
        </form>
      </div>
    </div>
  )
}

export default Order
