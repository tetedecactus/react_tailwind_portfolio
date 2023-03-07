import React, { createContext, useState} from "react";


export const ThemeContext = createContext({ theme: 'dark', undefined });

export const ThemeProvider = function({ children }) {
    const [theme, setTheme] = useState('dark');

    return React.createElement(
        ThemeContext.Provider,
        { value: { theme, setTheme } },
        children
    );
}