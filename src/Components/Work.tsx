import { Box, Typography, Stack, Breadcrumbs } from "@mui/material";
import Reveal from "../utils/Reveal";
import { useEffect, useState } from "react";
import { Client, urlFor } from "../utils/sanity";

type Content = {
    text: string
}

type Item = {
    title: string,
    tags: string[],
    site: string,
    imageRef: string,
    content: Content[]
}

const Work = () => {

    const [work, setWork] = useState([])

    useEffect(() => {
        const getContent = async () => {
            try {
                const content = await Client.fetch(`*[_type == "project"] {
                    title,
                    tags,
                    site,
                    'imageRef': coverImage.asset._ref,
                    'content': body[].children[]{text}
                  }
                  `)
                // console.log(content);
                setWork(content)
            } catch (error) {
                console.log(error);

            }
        }
        getContent()
    }, [])

    return (
        <Box id="work" paddingTop="4rem" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2rem">
            <Reveal>
                <Typography variant="h5" fontWeight={600}>My Works</Typography>
            </Reveal>
            <Stack justifyContent="center" sx={{ flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "center", sm: "stretch" } }}>
                {
                    work && work.length &&
                    work.map((item: Item, index: Number) => {
                        return (
                            <Box key={index.toString()} display="flex" flexDirection="column" justifyContent="space-between" gap="1rem" padding="1rem" border="1px solid #d3d3d3" sx={{ transition: "border 0.2s", width: { xs: "90%", sm: "30%", md: "20%" }, ":hover": { border: "1px solid black" } }}>
                                <Reveal>
                                    <Typography variant="h5" fontWeight={500}>{item.title}</Typography>
                                </Reveal>
                                <Reveal>
                                    <Breadcrumbs separator="|">
                                        {
                                            item.tags.map((tag: string) => {
                                                return (
                                                    <Typography key={tag} variant="body2">{tag}</Typography>
                                                )
                                            })
                                        }
                                    </Breadcrumbs>
                                </Reveal>
                                <img src={urlFor(item.imageRef).url()} alt={item.title} width="100%" />
                                <Reveal>
                                    <Typography variant="body2" color="black" fontWeight={500}>{item.content[0].text}</Typography>
                                </Reveal>
                            </Box>
                        )
                    })
                }
            </Stack>
        </Box>
    );
}

export default Work;