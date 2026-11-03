import './partners.css';
import Hahmuhle from '../../img/Frame 226.png';
import canson from '../../img/Frame 225.png';
import royal from '../../img/Frame 228.png';
import fabriano from '../../img/Frame 227.png';

export default function Partners() {
  return (
    <div className='Parners_container'>
      <div className="partners_imgs">
        <img src={Hahmuhle} alt="" />
        <img src={canson} alt="" />
        <img src={royal} alt="" />
        <img src={fabriano} alt="" />
      </div>
    </div>
  )
}
