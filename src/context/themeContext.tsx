import { ThemeProvider } from "@emotion/react";
import { typographyOptions, componentsOverride } from "../Theme/theme";
import { createTheme } from "@mui/material";
import lightPalette from "../Theme/palette.light";
import darkPalette from "../Theme/palette.dark";
import { createContext, useState } from "react";

interface IProps {
    children ?: React.ReactNode
}

interface IContextProps {
    isDark: boolean;
    toggleTheme: VoidFunction
}

const switchThemeContext = createContext({} as IContextProps)

const CustomTheme: React.FC<IProps> = ({children}) => {
    const [isDark, setIsDark] = useState(false)
    const toggleTheme = ()=>{
        setIsDark(!isDark)
    }
    const theme: any = createTheme({
        typography: typographyOptions,
        components: componentsOverride,
        palette: isDark ? darkPalette : lightPalette
    })
    return (
        <switchThemeContext.Provider value={{isDark, toggleTheme}}>
            <ThemeProvider theme={theme}>
                {/* @ts-ignore */}
                {children}
            </ThemeProvider>
        </switchThemeContext.Provider>
    );
}
 
export {CustomTheme, switchThemeContext};