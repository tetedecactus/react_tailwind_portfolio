import { useState, useEffect } from 'react';
import '../style/About.scss'
import '../style/LightDarkMode.scss'
import olabrecq from '../assets/img/olabrecq.jpg'

function About() {
	const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer" ];
    const [ text, setText ] = useState('');
    const [ delta, setDelta ] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text, delta])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
	}

	return (
		<div id="about" className="min-h-full py-8 px-10 about-page">
			<div className="container m-auto px-6 md:px-12 xl:px-6">
				<div className='md:1/12 lg:1/12 mb:20'>
					<p className='iam mt-5 sm:text-start md:text-center font-bold text-sm'>I am</p>
				</div>
				<div className='about-card'>
					<div className="about-card space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
						<div className="md:7/12 lg:w-8/12">
							<h2 className="name z-10 text-2xl font-bold md:text-4xl md:absolute lg:absolute">Olivier Labrecque <br/>Lacasse</h2>
						</div>
						<div className="md:1/12 lg:w-6/12 justify-center">
							<img className='profil-img rounded-md sticky' src={olabrecq} alt="me" width="250" height="250"/>
						</div>
					</div>
					<div>
						<h2 className="quote mt-20 mx-8 lg:ml-40 sm:text-center flex-end font-bold text-xl">{`Programming Student  & `}<span className="wrap">{text}</span></h2>
						<div className='description xsm:hidden lg:px-24 md:px-12 text-justify'>
							<p>		Hello and welcome! My name is Olivier Labrecque-Lacasse, and I am a front-end web development intern. 
								I am excited to be part of this team and have the opportunity to work on challenging projects that will allow me to develop 
								my skills and gain real-world experience in the field. My background in 42 Quebec has 
								provided me with a strong foundation in HTML, CSS, JavaScript, React, Wordpress and other web development technologies. 
								I am eager to learn from experienced professionals and contribute my knowledge and creativity to the team. 
								I am confident that this internship will not only help me grow as a developer but also make a valuable contribution to the organization. 
								Thank you for the opportunity, and I look forward to working with you.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;