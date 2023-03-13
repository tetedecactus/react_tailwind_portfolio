import '../style/ToggleButton.scss'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

function ToggleButton () {
    const { theme, setTheme } = useContext(ThemeContext);
    

    return (
        <div className="theme-container shadow-dark">
            <button id="1" type="button" onClick={() => setTheme('light')} className="theme-button light-button" alt="Light Mode">
            </button>
            <button id="2" type="button" onClick={() => setTheme('dark')} className="theme-button dark-button" alt="Dark Mode">
            </button>
            <button id="3" type="button" onClick={() => setTheme('CSM')} className="theme-button CSM-button" alt="ChainSawMan Mode">
            </button>
        </div>
    );
}
    

export default ToggleButton;