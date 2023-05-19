import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Category from "./Category";
import heroImage from "../../src/assets/smartzone hero image.jpg";
import Hero from "./Hero";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.error(e));
  }, []);
  console.log(categories);

  return (
    <div className="space-y-5">
      <Hero />
      <Category categories={categories} />
      <About />
    </div>
  );
};

export default Home;
