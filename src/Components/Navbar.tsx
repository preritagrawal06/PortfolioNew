import { Box, Stack, Typography, Button } from "@mui/material";
import Reveal from "../utils/Reveal";

const Navbar = () => {
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
                <Reveal>
                    <a href="#work">
                        <Button variant="contained">
                        See my work
                        </Button>
                    </a>
                </Reveal>
            </Stack>
        </Box>
     );
}

export default Navbar;