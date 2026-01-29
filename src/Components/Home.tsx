import { Stack, Typography, Avatar, Button, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Reveal from "../utils/Reveal";
import { useContext, useEffect, useRef, useState } from "react";
import { switchThemeContext } from "../context/themeContext";
import { motion } from "framer-motion";
import { useMousePosition } from "../utils/useMousePosition";

const Hero = () => {
  const { isDark } = useContext(switchThemeContext);
  const { x, y } = useMousePosition();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [maskPos, setMaskPos] = useState({ x: 0, y: 0 });
    const maskSize = 80;

  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // console.log(rect);
    setMaskPos({
      x: x - rect.left,
      y: y - rect.top,
    });
  }, [x, y]);

  return (
    <Stack marginY="2rem" gap="2rem">
      <Stack alignItems="center" position="relative" mt="10rem">
        <Typography
          variant="h1"
          position="absolute"
          width="100%"
          textAlign="center"
          top="50%"
          left="50%"
          fontFamily="'Dancing Script', cursive"
          fontWeight={400}
          padding="1rem"
          sx={{
            backgroundImage: "linear-gradient(316deg, #f42b03 0%, #ffbe0b 74%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "blur(15px)",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            fontSize: {
              xs: "96px",
              md: "128px",
            },
          }}
        >
          Prerit Agrawal
        </Typography>
        <Avatar
          alt="Prerit Agrawal"
          src="/profile.png"
          sx={{ height: "200px", width: "200px" }}
        />
        <motion.div
          ref={containerRef}
          animate={{
            WebkitMaskPosition: `${maskPos.x - maskSize / 2}px ${maskPos.y - maskSize / 2}px`,
            transition: { type: "tween", ease: "backOut" },
          }}
          style={{
            position: "absolute",
            WebkitMaskImage: "url('/mask.svg')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "0%",
            WebkitMaskSize: `${maskSize}px`,
          }}
        >
          <Avatar
            alt="Prerit Agrawal"
            src="/batman-profile.png"
            sx={{ height: "200px", width: "200px" }}
          />
        </motion.div>
      </Stack>
      <Stack alignItems="center" gap="1rem" padding="0 1rem">
        <Reveal>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Namastey, I am Prerit Agrawal
          </Typography>
        </Reveal>
        <Reveal>
          <Typography variant="body1" textAlign="center">
            A CS undergrad from VSSUT & full-stack developer
          </Typography>
        </Reveal>
        <Reveal>
          <Typography variant="body1" textAlign="center">
            Currently working @ Kfin Technologies
          </Typography>
        </Reveal>
        <Reveal>
          <Stack flexDirection="row" gap="0.5rem">
            <LocationOnIcon sx={{ color: isDark ? "#C4C7C7" : "#343434" }} />
            <Typography variant="body1">Bhubaneswar, Odisha</Typography>
          </Stack>
        </Reveal>
      </Stack>
      <Stack justifyContent="center" flexDirection="row" gap="0.5rem">
        <a
          href="https://drive.google.com/file/d/1LE4i_kLy31OQAozQ9xhMZph3iwAMG8Jp/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained" sx={{ height: "100%" }}>
            Resume
          </Button>
        </a>
        <a
          href="https://github.com/preritagrawal06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="github-icon">
            <GitHubIcon />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/prerit-agrawal-3a1013231/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton aria-label="linkedin-icon">
            <img src="./linkedin.svg" alt="linkedin-icon" width="24px" />
          </IconButton>
        </a>
        <a href="mailto:agrawalprerit780@gmail.com">
          <IconButton aria-label="email-icon">
            <EmailIcon />
          </IconButton>
        </a>
      </Stack>
    </Stack>
  );
};

export default Hero;
