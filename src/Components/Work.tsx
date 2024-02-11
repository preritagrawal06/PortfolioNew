import { Box, Typography, Stack, Breadcrumbs } from "@mui/material";
import Reveal from "../utils/Reveal";

const Work = () => {
    return ( 
        <Box id="work" paddingTop="4rem" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2rem">
            <Reveal>
                <Typography variant="h5" fontWeight={600}>My Works</Typography>
            </Reveal>
            <Stack justifyContent="center" sx={{flexDirection:{xs:"column", sm:"row"}, alignItems:{xs:"center", sm:"stretch"}}}>
                <Box display="flex" flexDirection="column" gap="1rem" padding="1rem" border="1px solid #d3d3d3" sx={{transition:"border 0.2s", width:{xs:"90%", sm:"30%", md:"20%"}, ":hover":{border:"1px solid black"}}}>
                    <Reveal>
                        <Typography variant="h5" fontWeight={500}>Drawboard</Typography>
                    </Reveal>
                    <Reveal>
                        <Breadcrumbs separator="|">
                            <Typography variant="body2">React</Typography>
                            <Typography variant="body2">NodeJS</Typography>
                            <Typography variant="body2">Socket.io</Typography>
                        </Breadcrumbs>
                    </Reveal>
                    <img src="/drawboard.png" alt="" width="100%"/>
                    <Reveal>
                        <Typography variant="body2" color="black" fontWeight={500}>A real time whiteboard app with feature to connect with your friends and draw together.</Typography>
                    </Reveal>
                </Box>
                <Box display="flex" flexDirection="column" gap="1rem" padding="1rem" border="1px solid #d3d3d3" sx={{transition:"border 0.2s", width:{xs:"90%", sm:"30%", md:"20%"}, ":hover":{border:"1px solid black"}}}>
                    <Reveal>
                        <Typography variant="h5" fontWeight={500}>Samavesh X Vasssaunt</Typography>
                    </Reveal>
                    <Reveal>
                        <Breadcrumbs separator="|">
                            <Typography variant="body2">React</Typography>
                            <Typography variant="body2">NodeJS</Typography>
                            <Typography variant="body2">Material UI</Typography>
                        </Breadcrumbs>
                    </Reveal>
                    <img src="/fest.png" alt="" width="100%"/>
                    <Reveal>
                        <Typography variant="body2" color="black" fontWeight={500}>Official website for the technical & cultural fest of VSSUT enabling users to register and participate in the events.</Typography>
                    </Reveal>
                </Box>
                <Box display="flex" flexDirection="column" gap="1rem" padding="1rem" border="1px solid #d3d3d3" sx={{transition:"border 0.2s", width:{xs:"90%", sm:"30%", md:"20%"}, ":hover":{border:"1px solid black"}}}>
                    <Reveal>
                        <Typography variant="h5" fontWeight={500}>Illumina</Typography>
                    </Reveal>
                    <Reveal>
                        <Breadcrumbs separator="|">
                            <Typography variant="body2">React</Typography>
                            <Typography variant="body2">Material UI</Typography>
                            <Typography variant="body2">Socket.io</Typography>
                        </Breadcrumbs>
                    </Reveal>
                    <img src="/sportsfest.png" alt="" width="100%"/>
                    <Reveal>
                        <Typography variant="body2" color="black" fontWeight={500}>Official website for the sports society of VSSUT. Includes feature like live score updates of matches held at the sports fest.</Typography>
                    </Reveal>
                </Box>
            </Stack>
        </Box>
    );
}
 
export default Work;