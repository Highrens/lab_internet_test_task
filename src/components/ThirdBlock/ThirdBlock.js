import "./ThirdBlock.css";
import image from "../../images/2_1.png";

export default function ThirdBlock(props) {
  return (
    <section className="thirdBlock" id="thirdBlock">
      <div className="thirdBlock_container">
        <h3 className="thirdBlock_title">Круто, ты дошел до третьего блока</h3>
        <p className="thirdBlock_text">
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть 
          непредвиденные расходы свыше 15 000 ₽. {"\n"} {"\n"}Доступ к заработанным деньгам
          помогает отказаться от кредитов и экономить деньги на процентах и
          штрафах.
        </p>
      </div>
      <img
        className="thirdBlock_image"
        src={image}
        alt="Изоображение для привлечения внимания"
      />
    </section>
  );
}
