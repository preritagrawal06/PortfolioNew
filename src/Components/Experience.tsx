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
        orgName: "PaprClip",
        orgRole: "Full Stack Developer",
        duration: "Mar, 2024 - Present",
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
                                    sx={{ m: 'auto 0' }}
                                    align="right"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {detail.duration}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot color="primary" variant="outlined">
                                        <img src={detail.orgLogo} alt="bottom-street logo" width={32} height={32} style={{ borderRadius: "50%" }} />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        {detail.orgName}
                                    </Typography>
                                    <Typography>{detail.orgRole}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })
                }
            </Timeline>
        </Box>
    );
}
