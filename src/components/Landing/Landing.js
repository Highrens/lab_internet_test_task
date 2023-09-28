import "./Landing.css";
import Image from "../../images/Lunch_atop_a_Skyscraper 1.png";

export default function Landing(props) {
  return (
    <section className="landing">
      <div className="landing_overlay"></div>
      <img src={Image} alt="Логотип сайта" className="landing_backround"></img>
      <div className="landing_title-container">
        <h1 className="landing_title">
          Говорят, никогда не поздно сменить профессию
        </h1>
        <h2 className="landing_subtitle">
          Сделай круто тестовое задание и у тебя получится
        </h2>
        <button className="landing_button">Проще простого!</button>
      </div>
    </section>
  );
}
