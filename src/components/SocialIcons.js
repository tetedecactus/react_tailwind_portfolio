import githubicons_d from "../assets/img/github_dark.svg";
import mailicons_d from "../assets/img/mail_dark.svg";
import linkedinicons_d from "../assets/img/linkedin_dark.svg";
import githubicons_l from "../assets/img/github_light.svg";
import mailicons_l from "../assets/img/mail_light.svg";
import linkedinicons_l from "../assets/img/linkedin_light.svg";
import style from "../style/SocialIcons.scss";
import {  useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";

function SocialIcons() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <div className={`${style.container} ${style[theme]}`}>
        <div className="icons-card fixed z-10 px-8">
          <div className="mb-5">
            <div className="line"></div>
            <a href="mailto:o.labrecque.lacassse@gmail.com">
              <img
                className="icons hover:translate-x-1.5"
                src={(theme === 'light' ? mailicons_l : mailicons_d)}
                alt="mail icon"
                width={22}
                height={22}
              />
            </a>
          </div>
          <div className="mb-5">
            <a href="https:/www.github.com/tetedecactus">
              <img
                className="icons hover:translate-x-1.5"
                src={(theme === 'light' ? githubicons_l : githubicons_d)}
                alt="github icon"
                width={22}
                height={28}
              />
            </a>
          </div>
          <div className="mb-5">
            <a href="https:/www.linkedin.com/in/olivier-labrecque-lacasse/">
              <img
                className="icons hover:translate-x-1.5"
                src={(theme === 'light' ? linkedinicons_l : linkedinicons_d)}
                alt="linkedIn icon"
                width={22}
                height={22}
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
