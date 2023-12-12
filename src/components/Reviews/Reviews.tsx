import { useState, useRef } from "react";
import { sectionOneReviews } from "./reviewData";
import "./Reviews.css";

const Reviews = () => {
  // State
  const itemsRefOne = useRef<HTMLDivElement>(null);
  const itemsRefTwo = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  // Functions
  const handleMouseDownOne = (e: any) => {
    if (itemsRefOne.current) {
      setIsMouseDown(true);
      setStartX(e.pageX - itemsRefOne.current.offsetLeft);
      setScrollLeft(itemsRefOne.current.scrollLeft);
    }
  };

  const handleMouseLeaveOne = (e: any) => {
    setIsMouseDown(false);
  };

  const handleMouseUpOne = (e: any) => {
    setIsMouseDown(false);
  };

  const handleMouseMoveOne = (e: any) => {
    if (!isMouseDown) return;
    else if (itemsRefOne.current) {
      e.preventDefault();
      const x = e.pageX - itemsRefOne.current.offsetLeft;
      const walk = (x - startX) * 1;
      itemsRefOne.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseDownTwo = (e: any) => {
    if (itemsRefTwo.current) {
      setIsMouseDown(true);
      setStartX(e.pageX - itemsRefTwo.current.offsetLeft);
      setScrollLeft(itemsRefTwo.current.scrollLeft);
    }
  };

  const handleMouseLeaveTwo = (e: any) => {
    setIsMouseDown(false);
  };

  const handleMouseUpTwo = (e: any) => {
    setIsMouseDown(false);
  };

  const handleMouseMoveTwo = (e: any) => {
    if (!isMouseDown) return;
    else if (itemsRefTwo.current) {
      e.preventDefault();
      const x = e.pageX - itemsRefTwo.current.offsetLeft;
      const walk = (x - startX) * 1;
      itemsRefTwo.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="reviews-container">
      <img
        src="https://i.ibb.co/Vg39ydW/ph-review.webp"
        alt="ph-review"
        className="reviews-tab-image"
      />
      <h1>See what our users say</h1>
      <div className="productivity-description">
        Loved by thousands, all around the World
      </div>

      <div style={{ marginBottom: "900px" }}>
        <div
          className="section-one-scroller"
          ref={itemsRefOne}
          onMouseDown={handleMouseDownOne}
          onMouseLeave={handleMouseLeaveOne}
          onMouseUp={handleMouseUpOne}
          onMouseMove={handleMouseMoveOne}
        >
          <div className="inner-scroller">
            {sectionOneReviews.map((review) => (
              <div className="review">
                <div className="review-text">{review.review}</div>
                <div className="review-info">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={review.image}
                      alt="reviewer avatar"
                      className="reviewer-icon"
                    />
                    <p>
                      {review.name}, {review.job}
                    </p>
                  </div>
                  <div className="product-hunt">View on Product Hunt</div>
                </div>
              </div>
            ))}
          </div>

          <div className="inner-scroller">
            {sectionOneReviews.map((review) => (
              <div className="review">
                <div className="review-text">{review.review}</div>
                <div className="review-info">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={review.image}
                      alt="reviewer avatar"
                      className="reviewer-icon"
                    />
                    <p>
                      {review.name}, {review.job}
                    </p>
                  </div>
                  <div className="product-hunt">View on Product Hunt</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="section-two-scroller"
          ref={itemsRefTwo}
          onMouseDown={handleMouseDownTwo}
          onMouseLeave={handleMouseLeaveTwo}
          onMouseUp={handleMouseUpTwo}
          onMouseMove={handleMouseMoveTwo}
        >
          <div className="inner-scroller-right">
            {sectionOneReviews.map((review) => (
              <div className="review">
                <div className="review-text">{review.review}</div>
                <div className="review-info">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={review.image}
                      alt="reviewer avatar"
                      className="reviewer-icon"
                    />
                    <p>
                      {review.name}, {review.job}
                    </p>
                  </div>
                  <div className="product-hunt">View on Product Hunt</div>
                </div>
              </div>
            ))}
          </div>

          <div className="inner-scroller-right">
            {sectionOneReviews.map((review) => (
              <div className="review">
                <div className="review-text">{review.review}</div>
                <div className="review-info">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={review.image}
                      alt="reviewer avatar"
                      className="reviewer-icon"
                    />
                    <p>
                      {review.name}, {review.job}
                    </p>
                  </div>
                  <div className="product-hunt">View on Product Hunt</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
