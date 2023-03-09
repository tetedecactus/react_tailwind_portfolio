import { ArrowRightCircle } from "react-bootstrap-icons";
import "../../style/Project.scss";
import fdf from "../../assets/img/fdf.PNG";
import transcendence from "../../assets/img/transcendence.PNG";
import eastclaw from "../../assets/img/eastclaw.PNG";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectPage from "./42Projects/ProjectPage";
import images from "../../module/Images"
export default function ProjectTabs() {
  return (
    // <section id="projects" className="project-tabs-page bg-white w-full mt-12">
    // 	<Tabs className='justify-center'>
    // 		<TabList className='flex items-center justify-center'>
    // 			<Tab className='text-[#6B7891] px-3 py-2'>Projects 42</Tab>
    // 			<Tab className='text-[#6B7891] px-3 py-2'>Personnal Projects</Tab>
    // 			<Tab className='text-[#6B7891] px-3 py-2'>Free Lance Projects</Tab>
    // 		</TabList>
    // 		<TabPanel className='items-center justify-center'>
    // 			<h2 className="text-[#fff] text-center">Projects 42</h2>
    // 			{/* mettre logode 42 et expliquer ce que c'est */}
    // 			<ProjectPage />
    // 		</TabPanel>
    // 		<TabPanel>
    // 			<h2 className="text-[#fff] text-center">Personnal Projects</h2>
    // 			{/* Expliquer mon interet full stack et entrepreneur  */}
    // 		</TabPanel>
    // 		<TabPanel>
    // 			<h2 className="text-[#fff] text-center">Free Lance Projects</h2>
    // 			<img src={eastclaw} />
    // 			{/* Montrer mes projet */}
    // 		</TabPanel>
    // 	</Tabs>
    // </section>
    <section id="projects" className="project-tabs-page h-full overflow-x-hidden mt-12">
      <div className="container py-8 lg:py-16 px-16 mx-auto max-w-screen-lg relative h-full">
        <h2 className="projects-title my-20 text-6xl font-extrabold text-center">
          My Projects
        </h2>
        <p className="project-intro  text-center">
          Currently, I am working on developing a mobile app using React Native
          and integrating it with Firebase. Additionally, I am studying
          algorithms and data structures to improve my problem-solving skills.{" "}
        </p>
      <Tabs className="justify-center">
        <TabList className="flex items-center justify-center">
          <Tab className="text-[#6B7891] px-3 py-2">Projects 42</Tab>
          <Tab className="text-[#6B7891] px-3 py-2">Personnal Projects</Tab>
          <Tab className="text-[#6B7891] px-3 py-2">Free Lance Projects</Tab>
        </TabList>
        <TabPanel className="items-center justify-center">
			<img src={images.fdf} width={400} height={300}></img>
			<img src={images.transcendence} width={400} height={300}></img>
			<img src={images.transcendence_gif} width={400} height={300}></img>
		</TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
      </div>
    </section>
  );
}
