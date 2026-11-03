import './footer.css';
import ImgFooter from '../../img/Book v4.png';
import FooterIcon from '../../img/Frame 85.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="descriptions_footer">
        <h1>Simple скетчбук</h1>
        <p>80 листов, твердая обложка, бумага <br/>
        Fabriano 200 г/м2. Подойдет и для <br/>
        графики и для акварели. Для самых <br/>
        смелых творческих замыслов!</p>
        <button className="btn_footer">Купить</button>
      </div>
      <div className="img_footer">
        <img src={ImgFooter} alt="" />
      </div>
      <div className="black_footer">
        <img src={FooterIcon} alt="" />
        <div className="social_icons">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </div>
      <p className="copyright">Simple  2021</p>
    </footer>
  )
}