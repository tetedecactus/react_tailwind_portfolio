import githubicons from '../assets/img/github.svg'
import mailicons from '../assets/img/mail.svg'
import linkedinicons from '../assets/img/linkedin.svg'
import '../style/SocialIcons.css'

function SocialIcons() {
	return (
		<div>
			<div className="container">
				<div className='icons-card fixed block  px-8'>
					<div className='mb-5'>
						<div class="vl"></div>
						<a href='mailto:o.labrecque.lacassse@gmail.com'>
							<img className="opacity-40 hover:opacity-100" src={mailicons} alt="mail icon" width={22} height={22}/>
						</a>
					</div>
					<div className='mb-5'>
						<a href='https:/www.github.com/tetedecactus'>
							<img className="opacity-40 hover:opacity-100" src={githubicons} alt="github icon" width={22} height={28}/>
						</a>
					</div>
					<div className='mb-5'>
						<a href='https:/www.linkedin.com/in/olivier-labrecque-lacasse/'>
							<img className="opacity-40 hover:opacity-100" src={linkedinicons} alt="linkedIn icon" width={22} height={22}/>
						</a>
						<div class="vl"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialIcons;