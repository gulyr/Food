import React from 'react'
import Img1 from '../../assets/images/step-1.jpg'
import Img2 from '../../assets/images/step-2.jpg'
import Img3 from '../../assets/images/step-3.jpg'
import Img4 from '../../assets/images/step-4.jpg'
import { useSelector } from 'react-redux'
const Steps = () => {
  const data = useSelector((state) => state.data.steps)
  const images = [Img1, Img2, Img3, Img4]
  return (
    <div className="steps">
      {data.map((item) => {
        const { id, title } = item
        return (
          <div
            key={id}
            className="box"
          >
            <img
              src={images[item.id - 1]}
              alt=""
            />
            <h3>{title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Steps
