import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider ({ children }) {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')));

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme]);

    function handleToogleTheme() {
        setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
    }

    return(
        <ThemeContext.Provider value={{theme, handleToogleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
};