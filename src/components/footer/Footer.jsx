import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const data = useSelector((state) => state.data.social)
  return (
    <footer className="bg-black items-center py-8 px-[9%] flex flex-col justify-between items-center gap-6">
      <div className="share flex flex-wrap justify-center gap-6">
        {data.map((item) => {
          const { id, name, url } = item
          return (
            <a
              key={id}
              href={url}
              className="btn"
            >
              {name}
            </a>
          )
        })}
      </div>
      <h1 className="credit text-white font-normal text-[2rem]">
        created by <span className="text-[#ff3838]">gul rasulzada</span>
      </h1>
    </footer>
  )
}

export default Footer
