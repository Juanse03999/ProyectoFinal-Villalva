import React from 'react'
import ImgInit from '../../assets/home-page/home-img.jpg'

function Home() {
  return (
    <main className='body-home'>

      <div className='container-img'>

        <img src={ImgInit} alt="A" className="init-img" />

        <h1 className='eslogan'>Vístete Real. Siente la Calle.</h1>

      </div>

      <p className='god'> [[Productos destacados]]</p>


    </main>
      
      
    
  )
}

export default Home