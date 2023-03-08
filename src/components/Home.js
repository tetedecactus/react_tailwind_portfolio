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

function HomePage() {

  const { theme, setTheme } = useContext(ThemeContext);

  // const themeButton = document.getElementById("themeButton");
  // const body = document.bsection.themeButton;

  

  // themeButton.addEventListener("click", function() {
  //   // Vérifiez la classe actuelle du corps de la page et modifiez-la en conséquence
  //   if (body.classList.contains("dark")) {
  //     body.classList.remove("dark");
  //     body.classList.add("light");
  //     themeButton.textContent = "Thème sombre";
  //   } else if (body.classList.contains("light")) {
  //     body.classList.remove("light");
  //     body.classList.add("CSM");
  //     themeButton.textContent = "Thème lumineux";
  //   } else {
  //     body.classList.remove("CSM");
  //     body.classList.add("dark");
  //     themeButton.textContent = "Thème coloré";
  //   }
  // });

  return (
    <section id="themeButton" className={theme}>
      <NavBar />
      <SocialIcons />
      <About />
      <CvButton />
      {/* <ProjectBanner /> */}
      <ContactForm />
      <button id="theme-button" onClick={() => setTheme(theme === "light" ? "dark" : theme === "dark" ? "CSM" : "light")}>
          <ToggleButton/>
          {/* switch theme */}
      </button>
      <Footer />
    </section>
  );
}

export default HomePage;
