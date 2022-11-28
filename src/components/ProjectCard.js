import githubicon from '../assets/img/github.svg'

function ProjectCard({title, imgUrl, description, language, lien}) {
	return (
		<diV className="flex justify-center">
			<div className='mb-72'>
				<div>
					<h2 className='text-[#6b7891] text-4xl'>{title}</h2>
				</div>
				<div className='flex'>
					<div>
						<img className='opacity-30 hover:opacity-100 bg-[#101010]' src={imgUrl} width={950} alt="project icons"/>
					</div>
					<div className="w-96 rounded-md bg-[#101010] h-auto lg:absolute left-1/2 mt-12 ml-12 ">
						<p className='text-[#071d88] text-justify'>{description}</p>
					</div>
				</div>
				<div>
					<p className='text-[#FFFBDC]'>{language}</p>
				</div>
				<div className='justify-start flex'>
					<a href={lien}><img className="opacity-40 hover:opacity-100 hover:translate-x-1.5" width={28} src={githubicon} alt="github"/></a>
				</div>
			</div>
		</diV>
	);
}

export default ProjectCard