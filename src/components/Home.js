import About from "./About";
import CvButton from "./CvButton";
import NavBar from "./NavBar";
import ProjectBanner from "./Projects/Projects";
import SocialIcons from "./SocialIcons";

function Home() {
	return (
		<div className="home-page">
			<NavBar />
			<SocialIcons />
			<About />
			<CvButton />
			{/* <ProjectBanner /> */}
		</div>
	); 
}

export default Home;