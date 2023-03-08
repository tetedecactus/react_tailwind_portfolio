import { useEffect } from "react";
import style from "../style/Footer.scss";

function Footer() {
  return (
    <section className="footer-container flex container min-w-full h-full">
      <div className="flex flex-row flex-wrap text-center items-center justify-center relative  mb-4">
        <div className="footer-info lg:w-1/2 justify-center items-center text-center">
          <h3 className="pb-4 font-bold">
            <span>Olivier Labrecque Lacasse</span>
          </h3>
          <p className="py-4 font-bold">
            <span>Quebec, Quebec</span>
          </p>
          <p className="pt-4 font-bold">
            <span>o.labrecque.lacasse@gmail.com</span>
          </p>
        </div>
        <div className="lg:w-1/2  justify-center items-center text-center pt-8 px-10">
          <h3 className="footer-about font-bold pb-4">
            <span>About Me</span>
          </h3>
          <p className="footer-text text-justify font-light  pt-4">
            Je suis sur le point de terminer ma formation en architecture de
            l’information numérique offerte par 42 Québec et je suis du fait
            même à la recherche d’un stage qui me permettrait de perfectionner
            mon apprentissage. Mes différents mandats m’ont amené à prendre en
            charge des projets d’envergure ce qui m’ont permis de développer mes
            compétences web, mon autonomie et perfectionner mon travail d’équipe
            à travers des notions d’organisation et de leadership.
          </p>
        </div>
        <div className="w-1/1 flex pt-8 font-light">
          <p id="copyright">Copyright 2023. My Brain</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
