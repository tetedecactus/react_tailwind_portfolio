import images from "../module/Images";
import style from "../style/SocialIcons.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

function SocialIcons() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className={`${style.container} ${style[theme]}`}>
        <div className="icons-card fixed z-10 px-4">
          <div className="mb-5">
            <div className="line"></div>
            <a href="mailto:o.labrecque.lacassse@gmail.com">
              <img
                className="icons hover:translate-x-1.5"
                src={
                  theme === "light"
                    ? images.mailicons_l
                    : theme === "dark"
                    ? images.mailicons_d
                    : images.mailicons_csm
                }
                alt="mail icon"
                width={24}
                height={22}
              />
            </a>
          </div>
          <div className="mb-5">
            <a href="https:/www.github.com/tetedecactus">
              <img
                className="icons hover:translate-x-1.5"
                src={
                  theme === "light"
                    ? images.githubicons_l
                    : theme === "dark"
                    ? images.githubicons_d
                    : images.githubicons_csm
                }
                alt="github icon"
                width={24}
                height={28}
              />
            </a>
          </div>
          <div className="mb-5">
            <a href="https:/www.linkedin.com/in/olivier-labrecque-lacasse/">
              <img
                className="icons hover:translate-x-1.5"
                src={
                  theme === "light"
                    ? images.linkedinicons_l
                    : theme === "dark"
                    ? images.linkedinicons_d
                    : images.linkedinicons_csm
                }
                alt="linkedIn icon"
                width={22}
                height={26}
              />
            </a>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialIcons;
