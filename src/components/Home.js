import About from "./About";
import CvButton from "./CvButton";
import NavBar from "./NavBar";
import ProjectBanner from "./Projects/Projects";
import SocialIcons from "./SocialIcons";
import ToggleButton from "./ToggleButton";

function Home() {
	return (
		<div className="home-page">
			<NavBar />
			<SocialIcons />
			<About />
			<CvButton />
			<ToggleButton />
			{/* <ProjectBanner /> */}
		</div>
	); 
}

export default Home;