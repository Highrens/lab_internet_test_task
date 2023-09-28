import "./HowItWork.css";
import { cards } from "../../constants/constants";

export default function HowItWork(props) {
  return (
    <section className="HowItWork" id="how-it-work">
      <h2 className="HowItWork_title">Как это работает</h2>
      <div className="HowItWork_cards_container">
        {cards.map((card, i) => (
          <div className="HowItWork_card" key={i}>
            <img
              className="HowItWork_card_image"
              src={card.img}
              alt="иконка времени"
            />
            <div className="HowItWork_card_text-container">
              <h6 className="HowItWork_card_title">{card.title}</h6>
              <p className="HowItWork_card_text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
