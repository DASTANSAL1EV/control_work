import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Description from './components/description/Description';
import Partners from './components/partners/Partners';
import Footer from './components/footer/Footer';
import './App.css';
import SecondBanner from './components/secondbanner/SecondBanner';

export default function App() {
  return (
    <div>
      <div className="top_container">
        <Header/>
        <Banner/>
      </div>
      <div className="sections">
        <SecondBanner/>
        <Description/>
        <Partners/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}
