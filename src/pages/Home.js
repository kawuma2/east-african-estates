import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedLands from "../components/FeaturedLands";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Aboutsection from "../components/Aboutsection";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Settle In East Africa" subtitle="Buy a property in east africa">
          <Link to="/lands" className="btn-primary">
            EXPLORE
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedLands />
      <FeaturedBlogs />
      <Aboutsection />
    </>
  );
}

Hero.defaultProps = {
  hero: "defaultHero",
};
