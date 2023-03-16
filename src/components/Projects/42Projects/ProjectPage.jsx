import { useState, useContext } from "react";
import images from "../../../module/Images";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../../style/ProjectPage.scss"
import { ThemeContext } from "../../../context/ThemeContext.js";

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
function ProjectPage() {
  const { theme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);

  return (
    <div className="container ml-12">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="img-container relative">
            <img className="project-img flex items-center" src={images.fdf} alt="" />
            <div className="overlay absolute top-0 left-0 right-0 overflow-hidden w-full h-0 transition-all duration-700">
              <h1 className="heading font-extrabold">42 Projects</h1>
              <h2 className="title-project"><span>Title: </span>FDF Fil-De-Fer</h2>
              <p className="project-description">
              Ce project consiste à créer un site web 
              pour participer à une compétition du célèbre
              jeu Pong !
              Grâce à votre site web, les utilisateurs pourront 
              jouer à Pong entre eux. Vous fournirez
              une interface utilisateur, un chat et des parties
               en ligne multijoueurs en temps réel !"
              </p>
              <a href="https://github.com/tetedecactus/fdf" className="project-link">
              <img
              className=" hover:translate-x-1.5 duration-300"
              width={38}
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
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container relative">
            <img className="project-img flex items-center" src={images.cub3d} alt="" />
            <div className="overlay absolute top-0 left-0 right-0 overflow-hidden w-full h-0 transition-all duration-700">
              <h1 className="heading font-extrabold">42 Projects</h1>
              <h2 className="title-project"><span>Title: </span>Cube 3D</h2>
              <p className="project-description">
              Ce project consiste à créer un site web 
              pour participer à une compétition du célèbre
              jeu Pong !
              Grâce à votre site web, les utilisateurs pourront 
              jouer à Pong entre eux. Vous fournirez
              une interface utilisateur, un chat et des parties
               en ligne multijoueurs en temps réel !"
              </p>
              <a href="https://github.com/tetedecactus/cub3d" className="project-link">
              <img
              className=" hover:translate-x-1.5 duration-300"
              width={38}
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
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
        <div className="img-container relative">
            <img className="project-img flex items-center" src={images.transcendence_gif} alt="" />
            <div className="overlay absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 transition-all duration-700">
              <h1 className="heading font-extrabold">42 Projects</h1>
              <h2 className="title-project"><span>Title: </span>Transcendence</h2>
              <p className="project-description">
              Ce project consiste à créer un site web 
              pour participer à une compétition du célèbre
              jeu Pong !
              Grâce à votre site web, les utilisateurs pourront 
              jouer à Pong entre eux. Vous fournirez
              une interface utilisateur, un chat et des parties
               en ligne multijoueurs en temps réel !"
              </p>
              <a href="https://github.com/tetedecactus/" className="project-link">
              <img
              className=" hover:translate-x-1.5 duration-300"
              width={38}
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
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
        <div className="img-container relative">
            <img className="project-img flex items-center" src={images.eastC} alt="" />
            <div className="overlay absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 transition-all duration-700">
              <h1 className="heading font-extrabold">Free Lancing Project</h1>
              <h2 className="title-project"><span>Title: </span>East Claw Contruction Inc</h2>
              <p className="project-description">
              Ce project consiste à créer un site web 
              pour participer à une compétition du célèbre
              jeu Pong !
              Grâce à votre site web, les utilisateurs pourront 
              jouer à Pong entre eux. Vous fournirez
              une interface utilisateur, un chat et des parties
               en ligne multijoueurs en temps réel !"
              </p>
              <a href="http://eastclawconstruction.ca/" className="project-link">
              <img
              className=" hover:translate-x-1.5 duration-300"
              width={38}
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
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
        <div className="img-container relative">
            <img className="project-img flex items-center" src={images.op_theme} alt="" />
            <div className="overlay absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 transition-all duration-700">
              <h1 className="heading font-extrabold">Personnal Project</h1>
              <h2 className="title-project"><span>Title: </span>VS code One Piece Theme</h2>
              <p className="project-description">
              Ce project consiste à créer un site web 
              pour participer à une compétition du célèbre
              jeu Pong !
              Grâce à votre site web, les utilisateurs pourront 
              jouer à Pong entre eux. Vous fournirez
              une interface utilisateur, un chat et des parties
               en ligne multijoueurs en temps réel !"
              </p>
              <a href="https://github.com/tetedecactus/VScode-theme" className="project-link">
              <img
              className=" hover:translate-x-1.5 duration-300"
              width={38}
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
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center">
        <div className="img-container relative">
            <img className="project-img flex items-center" src={images.rb_portfolio} alt="" />
            <div className="overlay absolute bottom-0 left-0 right-0 overflow-hidden w-full h-0 transition-all duration-700">
              <h1 className="heading font-extrabold">Personnal Project</h1>
              <h2 className="title-project"><span>Title: </span>React/Bootstrap Portfolio</h2>
              <p className="project-description">
              Ce project consiste à créer un site web 
              pour participer à une compétition du célèbre
              jeu Pong !
              Grâce à votre site web, les utilisateurs pourront 
              jouer à Pong entre eux. Vous fournirez
              une interface utilisateur, un chat et des parties
               en ligne multijoueurs en temps réel !"
              </p>
              <a href="https://github.com/tetedecactus/react_bootstrap_portfolio" className="project-link">
              <img
              className=" hover:translate-x-1.5 duration-300"
              width={38}
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
            </div>
          </div>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProjectPage;


// https://github.com/Kampouse/mini-shell-racoon

// https://github.com/JOMST42/Transcendence