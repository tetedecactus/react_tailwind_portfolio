
import olabrecq from '../assets/img/olabrecq.jpg'

function About() {
	return (
		<div className='min-h-full bg-black py-16'>
			<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
			<div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
				<div className='md:12'>
					<p className='mt-5 text-center text-[#FFFBDC]'>I am</p>
				</div>
				<div className="md:5/12 lg:w-5/12 justify-center">
					<img className='rounded-md' src={olabrecq} alt="me" width="250" height="250"/>
				</div>
				<div className="md:7/12 lg:w-6/12">
					<h2 className="text-2xl text-[#FFFBDC] font-bold md:text-4xl">Olivier Labrecque Lacasse</h2>
					<p className="mt-6 text-[#FFFBDC]">Programming student & Web developper</p>
				</div>
			</div>
  </div>
		</div>
	);
}

export default About;