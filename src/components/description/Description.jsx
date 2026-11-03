import './description.css';
import DescriptionCard from './ui/DescriptionCard';
import Frame1 from '../../img/Frame 208.png';
import Frame2 from '../../img/Frame 209.png';
import Frame3 from '../../img/Frame 211.png';
import Frame4 from '../../img/Frame 210.png';

export default function Description() {
  return (
    <section className="Description_container">
      <div className="description_list">
        <DescriptionCard
          img={Frame1}
          title="Упаковка"
          circulation="Тираж: от 50 штук"
          text="Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ."
        />
        <DescriptionCard
          img={Frame2}
          title="Пакеты"
          circulation="Тираж: от 200 штук"
          text="С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн."
        />
        <DescriptionCard
          img={Frame3}
          title="Кейсы"
          circulation="Тираж: от 30 штук"
          text="Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага."
        />
        <DescriptionCard
          img={Frame4}
          title="Другие изделия"
          circulation="Тираж: от 100 штук"
          text="Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки."
        />
      </div>
    </section>
  )
}