import BanImg from '../../img/Layer 2 copy.png';
import './banner.css';

export default function Banner() {
  return (
    <div className="banner_container">
        <div className="descriptions_banner">
            <h1>Простые вещи. <br/> Из бумаги</h1>
            <p>Бума́га (предположительно от итал. bombagia,<br/> 
            первоисточником же считается иранский) <br/>
             — волокнистый материал с минеральными <br/>
              добавками. </p>
        </div>
        <div className="banner_img">
            <img src={BanImg} alt="" />
        </div>
        <button className="btn_banner">Каталог</button>
    </div>
  )
}
