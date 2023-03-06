import style from "../style/CvButton.scss";
import images from "../module/Images"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";

function CvButton() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${style.container} ${style[theme]}`}>
      <div className="cv-button fixed z-10 font-bold px-4 py-4 rounded-md">
        <a href={(theme === 'light' ? images.cv_light_PDF : theme === 'dark' ? images.cv_dark_PDF : images.cv_csm_PDF)} target="_blank" rel="noopener noreferrer">
          <button>DOWNLOAD C.V</button>
        </a>
      </div>
    </div>
  );
}

export default CvButton;
