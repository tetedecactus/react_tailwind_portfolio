import '../style/ToggleButton.scss'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

function ToggleButton () {
    const { theme, setTheme } = useContext(ThemeContext);
    // const themeButton = document.getElementById("theme-button");
    // const body = document.body;

    // themeButton.addEventListener("click", function() {
    // // Vérifiez la classe actuelle du corps de la page et modifiez-la en conséquence
    // if (body.classList.contains("dark")) {
    //     body.classList.remove("dark");
    //     body.classList.add("light");
    //     themeButton.textContent = "Thème sombre";
    // } else if (body.classList.contains("light")) {
    //     body.classList.remove("light");
    //     body.classList.add("CSM");
    //     themeButton.textContent = "Thème lumineux";
    // } else {
    //     body.classList.remove("CSM");
    //     body.classList.add("dark");
    //     themeButton.textContent = "Thème ChainSaw Man";
    // }
    // });
    const handleClick = ( theme ) => {
        setTheme(theme);
    }

    return (
        <div class="theme-container shadow-dark">
            <button type="button" onCLick={() => handleClick('light')} class="theme-button light-button" alt="Light Mode">
            </button>
            <button type="button" onCLick={() => handleClick('dark')} class="theme-button dark-button" alt="Dark Mode">
            </button>
            <button type="button" onCLick={() => handleClick('CSM')} class="theme-button CSM-button" alt="ChainSawMan Mode">
            </button>
        </div>
    );
}
    

export default ToggleButton;