import React from 'react'
import { useSelector } from 'react-redux'
import Img1 from '../../assets/images/r-1.jpg'
import Img2 from '../../assets/images/r-2.png'
import Img3 from '../../assets/images/r-3.png'
import { FaStar, FaRegStar } from 'react-icons/fa'

const Review = () => {
  const data = useSelector((state) => state.data.review)
  const images = [Img1, Img2, Img3]
  const icons = [FaStar, FaStar, FaStar, FaStar, FaRegStar]
  return (
    <div
      className="review container"
      id="review"
    >
      <h1 className="heading">
        our customers <span>reviews</span>
      </h1>
      <div className="box-container">
        {data.map((item) => {
          const { id, title } = item
          return (
            <div
              key={id}
              className="box"
            >
              <img
                src={images[id - 1]}
                alt=""
              />
              <h3>john deo</h3>
              <div className="stars">
                {icons.map((icon) => {
                  return icon({ className: 'icon' })
                })}
              </div>
              <p>{title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Review
