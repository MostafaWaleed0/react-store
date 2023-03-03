import React from "react";
import Container from "../components/Container";
import Hero from "../components/templates/Home/Hero/Hero";
import SectionIdeas from "../components/templates/Home/SectionIdeas/SectionIdeas";
import CardAdvantage from "../components/templates/Home/CardAdvantage/CardAdvantage";
import Product from "../components/templates/Home/Product/Product";
import Opinions from "../components/templates/Home/opinions/Opinions";
import Contact from "../components/templates/Home/contact/Contact";

export default function Home() {
  return (
    <Container>
      <Hero />
      <CardAdvantage />
      <SectionIdeas />
      <Product />
      <Opinions />
      <Contact />
    </Container>
  );
}
