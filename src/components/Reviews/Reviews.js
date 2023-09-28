import "./Reviews.css";
import arrow from "../../images/arrowIcon.svg";

export default function Reviews(props) {
  return (
    <section className="reviews" id="Reviews">
      <h2 className="reviews_title">Отзывы</h2>
      <div className="reviews-block">
        <button className="review__button" onClick={props.onclick}>
          <img src={arrow} className="review__button-image" alt="prev review" />
        </button>
        <div className="reviews_container">
          {props.reviewsList.map((review, i) => (
            <div className="review" key={i}>
              <div className="review__head">
                <img
                  className="review__author-image"
                  src={review.img}
                  alt={review.name}
                />
                <div className="review__author-info">
                  <h6 className="review__author-name">{review.name}</h6>
                  <p className="review__author-city">{review.sity}</p>
                </div>
              </div>
              <p className="review__text">{review.text}</p>
            </div>
          ))}
        </div>
        <button className="review__button" onClick={props.Reorganize}>
          <img src={arrow} className="review__button-image" alt="prev review" />
        </button>
      </div>
      <div className="dots">
        <div className="dot dot_active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}
