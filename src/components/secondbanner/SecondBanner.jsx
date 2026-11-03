import './secondBanner.css'
import Frame216 from '../../img/Frame 216.png';
import FolderV8 from '../../img/Folder v8 Open 1.png';

export default function SecondBanner() {
  return (
    <div className='secondBanner_container'>
        <div className="secBanImg">
            <img src={Frame216} alt="" />
        </div>
        <div className="SecBanImg">
            <img src={FolderV8} alt="" />
        </div>
        <div className="desc_secBan">
            <h1>Максимальная белизна</h1>
            <p>Для повышения белизны, гладкости <br/> и мягкости в состав бумажной массы <br/>
             вводят белые минеральные вещества: <br/>
             мел, тальк, каолин и др. Эта операция <br/>
             называется наполнением. <br/> <br/>
             Отлив бумажного листа осуществляют <br/>
             на бумагоделательной машине, <br/>
             важнейшей частью которой является <br/>
             непрерывно движущаяся (как <br/>
             транспортер) металлическая или <br/>
             капроновая сетка.</p>
        </div>
    </div>
  )
}
