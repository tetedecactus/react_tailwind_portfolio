import { ArrowRightCircle } from "react-bootstrap-icons"
import '../style/Project.css'
import fdf from '../assets/img/fdf.png'
import transcendence from '../assets/img/transcendence.PNG'
import eastclaw from '../assets/img/eastclaw.PNG'

function ProjectBanner() {
	return(
		<div className="min-h-full bg-black project-card">
			<div className="container m-auto px-6 md:px-12 xl:px-6 justify-center z-20">
				<div className="title">
					<h2 className="text-[#FFFBDC]">PROJECT</h2>
				</div>
				<div className='w-full flex items-center opacity-60'>
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
						<button className="" onClick={() => console.log('connect')}>See more<ArrowRightCircle size={25} /></button>
					</div>
				</div>
				{/* <div className='moving-title'>
					<div className='title-mover'>
						<h2 className="title text-[#FFFBDC]">PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT</h2>
					</div>
				</div>
				<div className="moving-banner">
					<div className="mover">
					
					</div>
				</div>
				<div className='moving-title'>
					<div className='title-mover'>
						<h2 className="title text-[#FFFBDC]">PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT</h2>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default ProjectBanner;