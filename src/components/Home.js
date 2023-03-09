import About from "./About";
import CvButton from "./CvButton";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";
import "../../src/App.scss";
import "../style/Home.scss";
import { useContext,useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import React from 'react'
import '../style/ToggleButton.scss'
import ProjectTabs from "./Projects/Projects";
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
          <button
            id='But'
            className="But relative border font-bold rounded-md px-4 py-4 mt-6 ml-14"
            onClick={() =>
              setTheme(
                theme === "light" ? "dark" : theme === "dark" ? "CSM" : "light"
              )
            }
          >
            ?
          </button>
          <Footer />
      </section>
    );
}

export default HomePage;
