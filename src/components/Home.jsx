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
import Fullpage, { FullPageSections, FullpageSection} from "@ap.cx/react-fullpage";

function HomePage() {
  // class Homepage extends React.Component {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
		<section id="themeButton" className={theme}>
		<Fullpage>
			<FullPageSections>
			<FullpageSection style={{height: '100vh'}}>
				<NavBar />
				<About />
				<SocialIcons />
			</FullpageSection>
			<FullpageSection>
				<CvButton />
				<ProjectTabs />
			</FullpageSection>
			<FullpageSection>
				<ContactForm />
				<ToggleButton />
				<Footer />
			</FullpageSection>
			</FullPageSections>
		</Fullpage>
		</section>
  );
}

export default HomePage;
