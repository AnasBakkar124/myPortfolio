// #b4fdc0

import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const CertificatSection = () => {
    const projects = [
        {
            title: "Advance React by META",
            description:'',
                // "https://www.coursera.org/account/accomplishments/verify/TEMEC4A67G5V",
            getImageSrc: () => require("../images/advanceReactbyMeta.png"),
            link: 'https://www.coursera.org/account/accomplishments/verify/TEMEC4A67G5V'
        },
        {
            title: "Introduction to Front-End Development",
            description:'',
            getImageSrc: () => require("../images/front-end-development.png"),
            link: 'https://www.coursera.org/account/accomplishments/certificate/MP96NB2W5L8Q'
                // "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
     
        },
        {
            title: "Programming with JavaScript",
            description:'',
                // "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
                getImageSrc: () => require("../images/programming-with-javascript.png"),
                link: 'https://www.coursera.org/account/accomplishments/certificate/4GXD52VWQL8L'
        },
        {
            title: "Introduction to JavaScript Arrays ",
            description:'',
                // "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
                getImageSrc: () => require("../images/programming-with-javascript.png"),
                link: 'https://www.coursera.org/account/accomplishments/certificate/4GXD52VWQL8L'
        },
        // {
        //     title: "Introduction to JavaScript Arrays",
        //     description:'',
        //         // "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
        //     getImageSrc: () => require("../images/photo4.jpg"),
        // },
    ];

    return (


        <FullScreenSection
            backgroundColor="#B7BF99"
            isDarkBackground
            p={8}
            alignItems="flex-start"
            spacing={8}
            // justifyContent="center"
            // alignItems="center"
        >
            <Heading  alignItems="flex-start" as="h1" id="projects-section">
                Certificates
            </Heading>
            <Box
                display="grid"
                // gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridTemplateColumns={{ base: "repeat(1,minmax(0,1fr))", md: "repeat(3,minmax(0,1fr))" }}
                gridGap={8}
                className="project-listing"
            >
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                        link={project?.link}
                    />
                ))}
            </Box>
        </FullScreenSection>
    );
}

export default CertificatSection