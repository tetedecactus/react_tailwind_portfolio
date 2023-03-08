import About from "./About";
import CvButton from "./CvButton";
import NavBar from "./NavBar";
// import ProjectBanner from "./Projects/Projects";
import SocialIcons from "./SocialIcons";
import "../../src/App.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import ToggleButton from "./ToggleButton";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import React from 'react'

function HomePage() {
  // class Homepage extends React.Component {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
      <section id="themeButton" className={theme}>
          <NavBar />
          <SocialIcons />
          <About />
          <CvButton />
          {/* <ProjectBanner /> */}
          <ContactForm />
          <button
            id="theme-button"
            onClick={() =>
              setTheme(
                theme === "light" ? "dark" : theme === "dark" ? "CSM" : "light"
              )
            }
          >
            <ToggleButton />
          </button>
          <Footer />
      </section>
    );
}

export default HomePage;
