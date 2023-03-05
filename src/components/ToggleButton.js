import '../style/LightDarkMode.scss'
import React, { useState } from 'react';

function ToggleButton () {

    const [mode, setMode] = useState('light'); // default mode is light

    const handleToggle = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    };

    return (
        <div className="container">
        <div className="toggle-button" onClick={handleToggle}>
            {mode === 'light' ? 'Dark mode' : 'Light mode'}
        </div>
        ...
        </div>
    );
}
    

export default ToggleButton;
