import { ArrowRightCircle } from "react-bootstrap-icons"
import '../style/Project.scss'
import fdf from '../assets/img/fdf.PNG'
import transcendence from '../assets/img/transcendence.PNG'
import eastclaw from '../assets/img/eastclaw.PNG'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function ProjectTabs() {
	return (
		<section className="project-tabs-page w-full">
			<Tabs className='justify-center'>
				<TabList className='flex items-center justify-center'>
					<Tab className='text-[#6B7891]'>Personnal Projects</Tab>
					<Tab className='text-[#6B7891]'>Free Lance Projects</Tab>
					<Tab className='text-[#6B7891]'>Projects 42</Tab>
				</TabList>
				<TabPanel className='items-center justify-center'>
					<h2 className="text-[#fff]">Any content 1</h2>
					<img src={fdf} />
				</TabPanel>
				<TabPanel>
					<h2 className="text-[#fff]">Any content 2</h2>
					<img src={eastclaw} />
				</TabPanel>
				<TabPanel>
					<h2 className="text-[#fff]">Any content 2</h2>
					<img src={transcendence} />
				</TabPanel>
			</Tabs>
		</section>
	);
}