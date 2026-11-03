export default function DescriptionCard({ img, title, circulation, text }) {
  return (
    <div className="description_card">
      <img className="description_card_img" src={img} alt={title} />
      <h3 className="description_card_title">{title}</h3>
      <span className="description_card_circulation">{circulation}</span>
      <p className="description_card_text">{text}</p>
      <a className="description_card_link" href="#">
        Подробнее
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          <path d="M1 7h17M12 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </a>
    </div>
  )
}