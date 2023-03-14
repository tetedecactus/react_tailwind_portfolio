import images from "../../../module/Images";
import React, { useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeContext } from "../../../context/ThemeContext.js";
import "../../../style/42Projects/ProjectCard.scss"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper'


function ProjectCard({ title, imgUrl, description, language, lien }) {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="container">
      <h1 className="heading">42 Projects</h1>
      <Swiper
      effect={'coverflow'}
      grabCursor={ true }
      centeredSlides={ true }
      loop={ true }
      slidesPerView={ 'auto' }
      coverflowEffect={
        {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 2.5,
        }
      }
      pagination={{el:'.swiper-pagination',clickable:true}}
      navigation={{
        nextEl:'swiper-button-next',
        prevEl:'swiper-button-prev',
        clickable:true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
      >
        <SwiperSlide>
          <img className="flex items-center" src={images.fdf} alt="" />
		  {/* <div className="rounded-md h-auto absolute  mt-12 ml-12 ">
    	       <p className="project-description font-bold text-justify p-6">
			   	"La représentation en relief d'un terrain est une pratique clef de la cartographie moderne.\n
      			 Par exemple, en cette ère d'exploration spatiale, avoir une reproduction en trois\n
				dimensions de la surface de Mars est un prérequis indispensable à la conquête de cette\n
				planète.\n
				Autre exemple, comparer des représentations en trois dimensions d'une zone où l'activité tectonique est importante permet de mieux comprendre ces phénomènes et leur\n +
				évolution, donc d'être mieux préparé.\n"
    	       </p>
				<a href="https://github.com/tetedecactus/fdf">
					<img
					className=" hover:translate-x-1.5 duration-300"
					width={28}
					src={
						theme === "light"
						? images.githubicons_l
						: theme === "dark"
						? images.githubicons_d
						: images.githubicons_csm
					}
					alt="github"
					/>
				</a>
    	     </div> */}
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
          <img src={images.transcendence_gif} alt="" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">

          </div>
          <div className="swiper-button-next slider-arrow">
            
          </div>
          <div className="swiper-pagination">

          </div>
        </div>
      </Swiper>

    </section>
  );
}

export default ProjectCard;
