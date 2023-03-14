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
    // <section className="container flex overflow-x-hidden">
    //   <div className="mb-12">
    //     <div className="justify-start">
    //       <h2 className="project-title text-4xl font-bold justify-start mb-6">{title}</h2>
    //     </div>
    //     <div className="">
    //       <img src={imgUrl} />
    //     </div>
    //     <div className="rounded-md h-auto absolute  mt-12 ml-12 ">
    //       <p className="project-description font-bold text-justify p-6">
    //         {description}
    //       </p>
    //     </div>
    //     <div>
    //       <p className="project-techno fixed">
    //         {language}
    //       </p>
    //     </div>
    //     <div className="flex">
    //       <a href={lien}>
    //         <img
    //           className=" hover:translate-x-1.5 duration-300"
    //           width={28}
    //           src={
    //             theme === "light"
    //               ? images.githubicons_l
    //               : theme === "dark"
    //               ? images.githubicons_d
    //               : images.githubicons_csm
    //           }
    //           alt="github"
    //         />
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <section className="container">
      <h1 className="heading">Project Gallery</h1>
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
      className="swiper_contaioner"
      >
        <SwiperSlide>
          <img src={images.fdf} alt="" />
        </SwiperSlide>
        <SwiperSlide>
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
