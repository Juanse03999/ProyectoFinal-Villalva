import ImgInit from '../../assets/home-page/home-img.jpg'
import lol from '../../assets/home-page/intermedio.png'
import FeaturedProductsSection from '../FeaturedProductsSection/FeaturedProductsSection'

function Home() {
  return (
    <main className='body-home'>

      <div className='container-img'>

        <img src={ImgInit} alt="A" className="init-img" />

        <h1 className='eslogan'>Vístete Real. Siente la Calle.</h1>

      </div>

      <FeaturedProductsSection/ >
      {/* <p className='god'> [[Productos destacados]]</p> */}

      <img src={lol} alt="A" className="interme-img" />

    </main>
      
      
    
  )
}

export default Home