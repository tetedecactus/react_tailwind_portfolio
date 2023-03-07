import { useEffect} from "react";
import style from "../style/Footer.scss"


function Footer() {
    return (
        <div className="footer-container container mt-10 mb-6">
            <div className="flex flex-row flex-wrap  items-center justify-center">
                <div className="footer-info lg:w-1/2 justify-center items-center text-center">
                    <h3 className="py-2">
                        <span>Olivier Labrecque Lacasse</span>
                    </h3>
                    <p className="py-2">
                        <span>Quebec, Quebec</span>
                    </p>
                    <p className="py-2">
                        <span>o.labrecque.lacasse@gmail.com</span>
                    </p>
                </div>
                <div className="lg:w-1/2 justify-center items-center text-center pt-8 px-10">
                    <h3 className="footer-about">
                        <span>About Me</span>
                    </h3>
                    <p className="footer-text text-justify pt-4">
                        Je suis sur le point de terminer ma formation en architecture de
                        l’information numérique offerte par 42 Québec et je suis du fait
                        même à la recherche d’un stage qui me permettrait de perfectionner
                        mon apprentissage. Mes différents mandats m’ont amené à prendre en
                        charge des projets d’envergure ce qui m’ont permis de développer
                        mes compétences web, mon autonomie et perfectionner mon travail
                        d’équipe à travers des notions d’organisation et de leadership.
                    </p>
                </div>
                <div className="w-1/1 pt-8">
                    <p id="copyright">Copyright 2022. My Brain</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;