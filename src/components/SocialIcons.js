import githubicons from '../assets/img/github.svg'
import mailicons from '../assets/img/mail.svg'
import linkedinicons from '../assets/img/linkedin.svg'
import '../style/SocialIcons.scss'

function SocialIcons() {
	return (
		<div>
			<div className="container">
				<div className='icons-card fixed z-10 px-8'>
					<div className='mb-5'>
						<div class="line"></div>
						<a href='mailto:o.labrecque.lacassse@gmail.com'>
							<img className="icons hover:translate-x-1.5" src={mailicons} alt="mail icon" width={22} height={22}/>
						</a>
					</div>
					<div className='mb-5'>
						<a href='https:/www.github.com/tetedecactus'>
							<img className="icons hover:translate-x-1.5" src={githubicons} alt="github icon" width={22} height={28}/>
						</a>
					</div>
					<div className='mb-5'>
						<a href='https:/www.linkedin.com/in/olivier-labrecque-lacasse/'>
							<img className="icons hover:translate-x-1.5" src={linkedinicons} alt="linkedIn icon" width={22} height={22}/>
						</a>
						<div class="line"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SocialIcons;