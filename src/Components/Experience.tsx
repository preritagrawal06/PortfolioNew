import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Reveal from '../utils/Reveal';

const workDetails = [
    {
        orgName: "Kfin Technologies",
        orgRole: "Software Engineer",
        duration: "Dec, 2024 - Present",
        orgLogo: "/kfin-logo.png"
    },
    {
        orgName: "PaprClip",
        orgRole: "Full Stack Developer",
        duration: "Mar, 2024 - Jun, 2024",
        orgLogo: "/bs-logo.svg"
    },
    {
        orgName: "CareJar",
        orgRole: "Full Stack Developer",
        duration: "Oct, 2023 - Jan, 2024",
        orgLogo: "/carejar-logo.png"
    },
    {
        orgName: "Simba Speaks",
        orgRole: "Full Stack Developer",
        duration: "Sep, 2023 - Oct, 2023",
        orgLogo: "/simba_speaks_logo.png"
    },
    {
        orgName: "LinuxWorld",
        orgRole: "Software Developer Intern",
        duration: "Jun, 2023 - Jul, 2023",
        orgLogo: "/LW_Logo.png"
    },
]

export default function Experience() {
    return (
        <Box id="experience" paddingTop="4rem" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2rem">
            <Reveal>
                <Typography variant="h5" fontWeight={600}>My Experience</Typography>
            </Reveal>
            <Timeline position="alternate" sx={{ width: "100%" }}>
                {
                    workDetails.map((detail, index) => {
                        return (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0', fontSize:{xs:"8px", md:"1rem"} }}
                                    align="right"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {detail.duration}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary" variant="outlined" sx={{display:{xs:"none", md:"flex"}}}>
                                        <img src={detail.orgLogo} alt="bottom-street logo" width={40} height={40} style={{ borderRadius: "50%" }} />
                                    </TimelineDot>
                                    <TimelineDot color="primary" variant="outlined" sx={{display:{xs:"flex", md:"none"}}}>
                                        <img src={detail.orgLogo} alt="bottom-street logo" width={24} height={24} style={{ borderRadius: "50%" }} />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography fontWeight="600" sx={{fontSize:{xs:"12px", md:"1.5rem"}}} component="span">
                                        {detail.orgName}
                                    </Typography>
                                    <Typography sx={{fontSize:{xs:"8px", md:"1rem"}}}>{detail.orgRole}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })
                }
            </Timeline>
        </Box>
    );
}
