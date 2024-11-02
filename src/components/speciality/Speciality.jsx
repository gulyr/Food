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
import SpecialityCards from './SpecialityCards'

const Speciality = () => {
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
    <div
      className="speciality container"
      id="speciality"
    >
      <h1 className="heading">
        our <span>speciality</span>
      </h1>
      <SpecialityCards />
    </div>
  )
}

export default Speciality
