import About from "./About";
import CvButton from "./CvButton";
import NavBar from "./NavBar";
// import ProjectBanner from "./Projects/Projects";
import SocialIcons from "./SocialIcons";
// import ToggleButton from "./ToggleButton";
import "../../src/App.scss";
import {  useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";
import ToggleButton from "./ToggleButton";

function Home() {

	const { theme, setTheme } = useContext(ThemeContext);
	
	return (
		<div className={theme}>
			<NavBar />
			<SocialIcons />
			<About />
			<CvButton />
			{/* <ProjectBanner /> */}
			<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				<ToggleButton />
			</button>
		</div>
	); 
}

export default Home;