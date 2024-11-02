import React from 'react'
import Img1 from '../../assets/images/img-1.webp'
import Img2 from '../../assets/images/img-2.jpg'
import Img3 from '../../assets/images/img-3.jpg'
import Img4 from '../../assets/images/img-4.jpg'
import Img5 from '../../assets/images/img-5.jpg'
import Img6 from '../../assets/images/img-6.jpg'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Popular = () => {
  const data = useSelector((state) => state.data.popular)
  const images = [Img1, Img2, Img3, Img4, Img5, Img6]
  const icons = [FaStar, FaStar, FaStar, FaStar, FaRegStar]
  return (
    <div
      className="popular container"
      id="popular"
    >
      <h1 className="heading">
        most <span>popular</span> food
      </h1>
      <div className="box-container">
        {data.map((item) => {
          const { id, price, title } = item
          return (
            <div
              key={id}
              className="box"
            >
              <span className="price">
                ${price[0]} - ${price[1]}
              </span>
              <img
                src={images[id - 1]}
                alt=""
              />
              <h3>{title}</h3>
              <div className="stars">
                {icons.map((icon) => {
                  return icon({ className: 'icon' })
                })}
              </div>
              <a
                href="#"
                className="btn"
              >
                order now
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Popular
