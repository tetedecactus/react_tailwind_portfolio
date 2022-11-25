import githubicon from '../assets/img/github.svg'

function ProjectCard({title, imgUrl, description, language, lien}) {
	return (
		<diV className="flex justify-center">
			<div className='mb-72'>
				<div>
					<h2 className='text-[#FFFBDC] text-4xl'>{title}</h2>
				</div>
				<div className='flex'>

					<div>
						<img className='opacity-30 hover:opacity-100 bg-[#101010]' src={imgUrl} width={950}/>
					</div>
					<div className="w-96 rounded-md bg-[#101010] h-auto lg:absolute left-1/2 mt-12 ml-12 ">
						<p className='text-[#FFFBDC] text-justify'>{description}</p>
					</div>
				</div>
				<div>
					<p className='text-[#FFFBDC]'>{language}</p>
				</div>
				<div className='justify-start flex'>
					<a href={lien}><img className="opacity-40 hover:opacity-100 hover:translate-x-1.5" width={28} src={githubicon}/></a>
				</div>
			</div>
		</diV>
	);
}

export default ProjectCard;