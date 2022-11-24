import '../style/Project.css'
import fdf from '../assets/img/fdf.PNG'
import transcendence from '../assets/img/transcendence.PNG'
import eastclaw from '../assets/img/eastclaw.PNG'

function Project() {
	return(
		<div className="min-h-full bg-black project-card">
			<div className="container m-auto px-6 md:px-12 xl:px-6">
				<div className="title">
					<h2 className="text-[#FFFBDC]">PROJECT</h2>
				</div>
				<div className='w-full flex items-center'>
					<div>
						<img className="object-left" src={fdf} width="450" height="450" alt="fdf"/>
					</div>
					<div>
						<img className="object-center" src={eastclaw} width="450" height="450" alt="eastclaw"/>
					</div>
					<div>
						<img className="object-right" src={transcendence} width="450" height="450" alt="transcendence"/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;