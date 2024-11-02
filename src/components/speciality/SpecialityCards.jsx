import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { FaPizzaSlice } from 'react-icons/fa'
import { FaIceCream } from 'react-icons/fa'
import { FaCakeCandles } from 'react-icons/fa6'
import { FaMartiniGlassCitrus } from 'react-icons/fa6'
import { FaMugHot } from 'react-icons/fa'
import Img1 from '../../assets/images/1.png'
import Img2 from '../../assets/images/2.jpg'
import Img3 from '../../assets/images/3.jpg'
import Img4 from '../../assets/images/4.jpg'
import Img5 from '../../assets/images/5.jpg'
import Img6 from '../../assets/images/6.jpg'
import { useSelector } from 'react-redux'

const SpecialityCards = () => {
  const data = useSelector((state) => state.data.speciality)
  const images = [Img1, Img2, Img3, Img4, Img5, Img6]
  const icons = [
    FaHamburger,
    FaPizzaSlice,
    FaIceCream,
    FaCakeCandles,
    FaMartiniGlassCitrus,
    FaMugHot,
  ]
  return (
    <div className="box-container">
      {data.map((item) => {
        const { id, title, content } = item
        return (
          <div className="box">
            <img
              className="image"
              src={images[id - 1]}
              alt=""
            />
            <div className="content">
              {icons[id - 1]({ className: 'icon' })}
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SpecialityCards
