import React from 'react'
import Img1 from '../../assets/images/g-1.jpg'
import Img2 from '../../assets/images/g-2.webp'
import Img3 from '../../assets/images/g-3.webp'
import Img4 from '../../assets/images/g-4.jpg'
import Img5 from '../../assets/images/g-5.webp'
import Img6 from '../../assets/images/g-6.jpg'
import Img7 from '../../assets/images/g-7.jpg'
import Img8 from '../../assets/images/g-8.jpg'
import Img9 from '../../assets/images/g-9.jpg'
import { useSelector } from 'react-redux'

const Gallery = () => {
  const data = useSelector((state) => state.data.gallery)
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9]
  return (
    <div
      className="gallery container"
      id="gallery"
    >
      <h1 className="heading">
        our food <span>gallery</span>
      </h1>
      <div className="box-container">
        {data.map((item) => {
          const { id, title, content } = item
          return (
            <div
              key={id}
              className="box"
            >
              <img
                src={images[id - 1]}
                alt=""
              />
              <div className="content">
                <h3>{title}</h3>
                <p>{content}</p>
                <a
                  href="#"
                  className="btn"
                >
                  order now
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
