import About from "./About";
import NavBar from "./NavBar";
import ProjectBanner from "./Projects/Projects";
import SocialIcons from "./SocialIcons";

function Home() {
	return (
		<div className="home-page">
			<NavBar />
			<SocialIcons />
			<About />
			<ProjectBanner />
		</div>
	); 
}

export default Home;