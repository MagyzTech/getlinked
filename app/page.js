import React from "react";
import {
  About,
  Faqs,
  Hero,
  KeyAttributes,
  Partners,
  Privacy,
  Rewards,
  Rules,
  Timeline,
} from "./components/home";

export const metadata = {
  title: "Welcome to GetLinked",
  description: "Igniting a Revolution in HR Innovation",
};

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Rules />
      <KeyAttributes />
      <Faqs />
      <Timeline />
      <Rewards />
      <Partners />
      <Privacy />
    </>
  );
};

export default Home;
