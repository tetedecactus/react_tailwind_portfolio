import About from "./About";
import CvButton from "./CvButton";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";
import "../../src/App.scss";
import "../style/Home.scss";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import React from "react";
import "../style/ToggleButton.scss";
import ProjectTabs from "./Projects/Projects";
import ToggleButton from "./ToggleButton";
function HomePage() {
  // class Homepage extends React.Component {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section id="themeButton" className={theme}>
      <NavBar />
      <SocialIcons />
      <About />
      <CvButton />
      <ProjectTabs />
      <ContactForm />
      <ToggleButton />
      <Footer />
    </section>
  );
}

export default HomePage;
