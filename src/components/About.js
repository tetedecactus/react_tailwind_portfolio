import { useState, useEffect } from 'react';
import '../style/About.css'
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
		<div className='min-h-full py-16 about-page'>
			<div className="container m-auto px-6 md:px-12 xl:px-6">
				<div className='md:1/12 lg:1/12 mb:20'>
					<p className='mt-5 sm:text-start md:text-center text-[#FFFBDC] text-xs'>I am</p>
				</div>
				<div className='about-card'>
					<div className="about-card space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
						<div className="md:7/12 lg:w-8/12">
							<h2 className="name z-10 text-2xl text-[#FFFBDC] font-bold md:text-4xl md:absolute lg:absolute">Olivier Labrecque <br/>Lacasse</h2>
						</div>
						<div className="md:1/12 lg:w-6/12 justify-center">
							<img className='profil-img rounded-md opacity-60 sticky' src={olabrecq} alt="me" width="250" height="250"/>
						</div>
					</div>
					<div>
						<h2 className="mt-20 mx-8 lg:ml-40 text-[#FFFBDC] sm:text-center flex-end font-bold text-xl">{`Programming Student  & `}<span className="wrap">{text}</span></h2>
						<div className='description hidden text-[#FFFBDC] text-center'>
							<p>		Always having several projects on the go, I often wear several hats 
									such as founder of my own digital company, developer, client coordinator, 
									project manager, etc. My numerous projects in my career path as well as
									my professional experiences have given me the ability to multi-task, 
									manage different projects within defined deadlines while prioritizing. 
									I also participated in the creation and hosting of several websites, 
									the development of several algorithms as well as graphic projects such as a simplistic 
									version of Wolfenstien 3D which taught me the basics of ray tracing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;