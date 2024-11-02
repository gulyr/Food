import React from 'react'
import './index.css'
import './assets/css/style.css'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Speciality from './components/speciality/Speciality'
import Popular from './components/popular/Popular'
import Steps from './components/steps/Steps'
import Gallery from './components/gallery/Gallery'
import Review from './components/review/Review'
import Order from './components/order/Order'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Speciality />
      <Popular />
      <Steps />
      <Gallery />
      <Review />
      <Order />
      <Footer />
    </div>
  )
}

export default App
