import { useEffect, useState } from "react";
import ThingsToDo from "../models/ThingsToDo";
import { getThingsToDo } from "../services/NSPServices";
import "./HomePage.css";

const HomePage = () => {
  const [thingsToDo, setThingsToDo] = useState<ThingsToDo[]>([]);

  // const retrieveThingsToDo = (): void => {
  //   getThingsToDo().then((response) => setThingsToDo(response.data));
  //   console.log(thingsToDo);
  // };

  // useEffect(() => {
  //   retrieveThingsToDo();
  // }, []);

  return <section className="HomePage"></section>;
};

export default HomePage;
