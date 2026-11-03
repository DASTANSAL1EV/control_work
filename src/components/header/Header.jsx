import './header.css';
import Icon from '../../img/Frame 85.svg';
import iconS from '../../img/Frame 217.svg';

export default function Header() {
  return (
    <div className='header_container'>
        <div className="icon">
            <img src={Icon} alt="" />
        </div>
        <div className="uls">
            <ul>
                <li>Продукция</li>
                <li>Материалы</li>
                <li>О нас</li>
                <li>Контакты</li>
            </ul>
            <div className="icons">
                <img src={iconS} alt="" />
            </div>
        </div>
    </div>
  )
}
