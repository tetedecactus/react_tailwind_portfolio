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

  return (
    <div className={theme}>
      <NavBar />
      <SocialIcons />
      <About />
      <CvButton />
      {/* <ProjectBanner /> */}
      <ContactForm />
      <Footer />
      <button onClick={() => setTheme(theme === "light" ? "dark" : theme === "dark" ? "CSM" : "light")}>
          <ToggleButton />
      </button>
    </div>
  );
}

export default HomePage;
