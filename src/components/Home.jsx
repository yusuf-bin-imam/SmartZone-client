import React, { useEffect, useState } from "react";
import About from "./About";
import Category from "./Category";
import Hero from "./Hero";
import Faq from "./Faq";
import Contact from "./Contact";
import Review from "./Review";
import UserFeedbacks from "./UserFeedbacks";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://smartzone-server.onrender.com/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.error(e));
  }, []);
  console.log(categories);

  return (
    <div className="space-y-5">
      <Hero />
      <Category categories={categories} />
      <Faq />
      <About />
      <Review />
      <UserFeedbacks />
      <Contact />
    </div>
  );
};

export default Home;
