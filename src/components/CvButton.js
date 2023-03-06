import style from "../style/CvButton.scss";
import cv_dark_PDF from "../assets/img/cv_dark.pdf";
import cv_light_PDF from "../assets/img/cv_light.pdf";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";

function CvButton() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${style.container} ${style[theme]}`}>
      <div className="cv-button fixed z-10 font-bold px-4 py-4 rounded-md">
        <a href={(theme === 'light' ? cv_light_PDF : cv_dark_PDF)} target="_blank" rel="noopener noreferrer">
          <button>DOWNLOAD C.V</button>
        </a>
      </div>
    </div>
  );
}

export default CvButton;
