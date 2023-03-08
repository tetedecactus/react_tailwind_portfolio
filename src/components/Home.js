import About from "./About";
import CvButton from "./CvButton";
import NavBar from "./NavBar";
// import ProjectBanner from "./Projects/Projects";
import SocialIcons from "./SocialIcons";
import "../../src/App.scss";
import "../style/Home.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
import ToggleButton from "./ToggleButton";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import React from 'react'

function HomePage() {
  // class Homepage extends React.Component {
    const { theme, setTheme } = useContext(ThemeContext);

    const bouton = document.getElementById('But');


    console.log(bouton);
    if (bouton) {
      console.log(bouton);
      console.log(theme);

        bouton.addEventListener('click', function() {
          if (theme == 'CSM') {
            console.log('inside this 1st shit');
            bouton.innerHTML = 'Light Theme';
          }
          else if (theme == 'dark') {
            console.log('inside this 2st shit');
            console.log(bouton)
            bouton.innerHTML = 'CHAINESAW MAN THEME';
          }
          else {
            console.log('inside this 3st shit');
            bouton.innerHTML = 'Dark Theme';
          }
        });
    }
  
    return (
      <section id="themeButton" className={theme}>
          <NavBar />
          <SocialIcons />
          <About />
          <CvButton />
          {/* <ProjectBanner /> */}
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
            Dark Theme
            {/* <ToggleButton /> */}
          </button>
          <Footer />
      </section>
    );
}

export default HomePage;
