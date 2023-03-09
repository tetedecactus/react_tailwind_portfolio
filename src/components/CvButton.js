import style from "../style/CvButton.scss";
import images from "../module/Images";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

function CvButton() {
  const { theme } = useContext(ThemeContext);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {

      // var distanceToBottom = document.body.offsetHeight - (window.innerHeight + window.scrollY);

      if (window.scrollY <= 700 || window.scrollY >= 2300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`${style.container} ${style[theme]}`}>
      <div className={scrolled ? "scrolled" : "cv-button  fixed z-10 font-bold px-4 py-4 rounded-md"}>
        <a
          href={
            theme === "light"
              ? images.cv_light_PDF
              : theme === "dark"
              ? images.cv_dark_PDF
              : images.cv_csm_PDF
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>DOWNLOAD C.V</button>
        </a>
      </div>
    </div>
  );
}

export default CvButton;
