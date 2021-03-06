import { useEffect, useState } from "react";
import TrendingCardsModel from "../models/TrendingCardModel";
import { getThingsToDo } from "../services/NSPServices";
import HomeSearchParkForm from "./HomePageComponents/HomeSearchParkForm";
import TrendingCard from "./HomePageComponents/TrendingCard";
import "./HomeRoute.css";
import OpeningSection from "./OpeningSection";

const HomeRoute = () => {
  const [trending, setTrending] = useState<TrendingCardsModel[]>([]);
  const [count, setCount] = useState<number>(0);

  const retrieveThingsToDo = (): void => {
    getThingsToDo().then((response) => setTrending(response.data));
    console.log("Run2");
  };

  console.log(trending);

  useEffect(() => {
    retrieveThingsToDo();
    console.log("run");
  }, []);

  // console.log(count);

  const swipeLeft = (): void => {
    if (count <= 0) {
      setCount(trending.length - 1);
      return;
    }
    setCount((prev) => prev - 1);
  };

  const swipeRight = (): void => {
    if (count >= trending.length - 1) {
      setCount(0);
      return;
    }
    setCount((prev) => prev + 1);
  };

  return (
    <section className="HomeRoute">
      <OpeningSection />
      <h2>Trending Parks</h2>
      <div className="trending-parks-container">
        <button onClick={() => swipeLeft()} className="left-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="slide-content">
          {trending.map((item) => (
            <TrendingCard displayContent={item} onSlide={count} />
          ))}
        </ul>
        <button onClick={() => swipeRight()} className="right-btn">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <h2>Search National Parks</h2>
      <HomeSearchParkForm />
    </section>
  );
};

export default HomeRoute;
