
import './App.css'
import Advantages from './components/advantages/Advantages'
import Banner from './components/banner/Banner'
import Category from './components/category/Category'
import Courses from './components/courses/Courses'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import SpecialFeatures from './components/special_features/SpecialFeatures'
import SuccesStory from './components/success_strory/SuccessStory'

function App() {


  return (
    <>
      <Header />
      <section className="relative">
        <Banner />
        <Category />
      </section>
      <section className='relative'>
        <Courses/>
        <Advantages/>
      </section>
      <section>
        <SpecialFeatures/>
      </section>
      <section>
          <SuccesStory/>
      </section>
      {/* <section>
          <Footer/>
      </section> */}
     
    </>
  )
}

export default App
