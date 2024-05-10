import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import Reveal from "../utils/Reveal";
import { useContext } from "react";
import { switchThemeContext } from "../context/themeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {

    const {toggleTheme, isDark} = useContext(switchThemeContext)

    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Stack padding="1rem" flexDirection="row" alignItems="center" justifyContent="space-between" borderBottom="1px solid #34343466" 
                sx={{
                    width:{
                        xs:"100%",
                        sm:"60%"
                    }
                }}
            >
                <Reveal>
                    <Typography variant="body2" fontWeight={500}>~/home/Prerit</Typography>
                </Reveal>
                <Box display="flex" gap="1rem">
                    <Reveal>
                        <a href="#work">
                            <Button variant="contained">
                            See my work
                            </Button>
                        </a>
                    </Reveal>
                    <Reveal>
                        <a href="https://prerit.sanity.studio/" target="_blank">
                            <Button variant="outlined">
                                Admin
                            </Button>
                        </a>
                    </Reveal>
                    <Reveal>
                        <IconButton aria-label="theme-switcher" onClick={toggleTheme} sx={{border: 0, ":hover":{bgcolor: "transparent"}}}>
                          {!isDark ? <DarkModeIcon fontSize="small"/> : <LightModeIcon fontSize="small" sx={{color:"white"}}/>}
                        </IconButton>
                    </Reveal>
                </Box>
            </Stack>
        </Box>
     );
}

export default Navbar;