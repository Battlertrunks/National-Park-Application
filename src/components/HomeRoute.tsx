import { useEffect, useState } from "react";
import TrendingCardsModel from "../models/TrendingCardModel";
import { getThingsToDo } from "../services/NSPServices";
import HomeSearchParkForm from "./HomePageComponents/HomeSearchParkForm";
import TrendingCard from "./HomePageComponents/TrendingCard";
import "./HomeRoute.css";

const HomeRoute = () => {
  const [trending, setTrending] = useState<TrendingCardsModel[]>([]);
  const [count, setCount] = useState<number>(0);
  console.log(count);

  const retrieveThingsToDo = (): void => {
    getThingsToDo().then((response) => setTrending(response.data));
  };

  useEffect(() => {
    retrieveThingsToDo();
  }, []);

  return (
    <section className="HomeRoute">
      <div className="opening-container">
        <ul>
          <li>
            <h2>Nature</h2>
          </li>
          <li>
            <span className="divider" />
          </li>
          <li>
            <h2>Explore</h2>
          </li>
        </ul>
        <h3>Simply Just Outdoors</h3>
      </div>
      <h2>Trending National Parks</h2>
      <div className="trending-parks-container">
        <button onClick={() => setCount((prev) => prev + 1)}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="slide-content">
          {trending.map((item) => (
            <TrendingCard displayContent={item} onSlide={count} />
          ))}
        </ul>
        <button onClick={() => setCount((prev) => prev - 1)}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <h2>Search National Parks</h2>
      <h3>Find your next adventure now</h3>
      <HomeSearchParkForm />
    </section>
  );
};

export default HomeRoute;
