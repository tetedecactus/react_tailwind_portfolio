import '../style/About.css'
import olabrecq from '../assets/img/olabrecq.jpg'

function About() {
	return (
		<div className='min-h-full bg-black py-16 about-page'>
			<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
				<div className='md:1/12 lg:1/12'>
					<p className='mt-5 text-center text-[#FFFBDC]'>I am</p>
				</div>
				<div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
					<div className="md:7/12 lg:w-8/12">
						<h2 className="name text-2xl text-[#FFFBDC] font-bold md:text-4xl">Olivier Labrecque <br/>Lacasse</h2>
					</div>
					<div className="md:1/12 lg:w-6/12 justify-center">
						<img className='rounded-md opacity-60' src={olabrecq} alt="me" width="250" height="250"/>
					</div>
				</div>
				<div>
					<p className="mt-6 text-[#FFFBDC] text-center">Programming student & Web developer</p>
				</div>
			</div>
		</div>
	);
}

export default About;