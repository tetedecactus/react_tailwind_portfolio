import { ArrowRightCircle } from "react-bootstrap-icons"
import '../style/Project.scss'
import fdf from '../assets/img/fdf.PNG'
import transcendence from '../assets/img/transcendence.PNG'
import eastclaw from '../assets/img/eastclaw.PNG'

function ProjectBanner() {
	return(
		<div className="min-h-full bg-black project-card">
			<div className="container m-auto px-6 md:px-12 xl:px-6 justify-center z-20">
				<div className="title">
					<h2 className="text-[#FFFBDC]">PROJECT</h2>
				</div>
				<div className='w-full flex items-center '>
					<div>
						<img className="object-left" src={fdf} width="750" alt="fdf"/>
					</div>
					<div>
						<img className="object-center" src={eastclaw} width="750"alt="eastclaw"/>
					</div>
					<div>
						<img className="object-right" src={transcendence} width="750" alt="transcendence"/>
					</div>
					<div>
						<a href="/projects"><button className="text-[#071d88] hover:text-[#c3cdff] border-2 border-[#071d88] hover:border-[#c3cdff]" onClick={() => console.log('connect')}>See more<ArrowRightCircle size={25} /></button></a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectBanner;