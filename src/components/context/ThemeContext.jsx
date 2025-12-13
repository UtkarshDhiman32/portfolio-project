// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Context create kiya
const ThemeContext = createContext();

// 2. Provider banaya jo puri app ko wrap karega
export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    // Body color change logic yahi daal diya
    useEffect(() => {
        if (isDarkMode) {
            document.body.style.backgroundColor = '#1a0b2e';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#1a0b2e';
        }
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 3. Custom Hook taaki components me aasani se use kar sakein
export const useTheme = () => useContext(ThemeContext);