import "./App.css";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import HowItWork from "../HowItWork/HowItWork";
import ThirdBlock from "../ThirdBlock/ThirdBlock";
import Footer from "../Footer/Footer";
import Reviews from "../Reviews/Reviews";

import { reviews } from "../../constants/constants";
import { useState, useEffect } from "react";

function App() {
  const [allRevs, setallRevs] = useState(reviews);
  const [reviewsList, setReviewsList] = useState(reviews);
  const [reviewsToshow, setReviewsToshow] = useState(3);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    ReviewSize();
  }, [reviewsToshow]);

  function handleResize() {
    if (window.innerWidth > 1000) {
      setReviewsToshow(3);
    } else if (window.innerWidth > 650) {
      setReviewsToshow(2);
    } else {
      setReviewsToshow(1);
    }
  }

  function ReviewSize() {
    var arr = allRevs.slice(0, reviewsToshow);
    setReviewsList(arr);
  }

  function Reorganize() {
    var array = reviewsList.slice(0);
    console.log(array);
    var element = array.shift();

    array.push(element);

    setReviewsList(array);
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Landing />
        <HowItWork />
        <ThirdBlock />
        <Reviews Reorganize={Reorganize} reviewsList={reviewsList} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
