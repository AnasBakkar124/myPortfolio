// #b4fdc0

import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const CertificatSection = () => {
    const projects = [
        {
            title: "Advance React by META",
            description:
                "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
            getImageSrc: () => require("../images/photo1.jpg"),
        },
        {
            title: "Introduction to Front-End Development",
            description:
                "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
            getImageSrc: () => require("../images/photo2.jpg"),
        },
        {
            title: "Programming with Javacript ",
            description:
                "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
            getImageSrc: () => require("../images/photo3.jpg"),
        },
        {
            title: "Introduction to JavaScript Arrays",
            description:
                "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
            getImageSrc: () => require("../images/photo4.jpg"),
        },
    ];

    return (


        <FullScreenSection
            backgroundColor="#ffa500"
            isDarkBackground
            p={8}
            alignItems="flex-start"
            spacing={8}
        >
            <Heading as="h1" id="projects-section">
                Certificates
            </Heading>
            <Box
                display="grid"
                // gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridTemplateColumns={{ base: "repeat(1,minmax(0,1fr))", md: "repeat(2,minmax(0,1fr))" }}
                gridGap={8}
                className="project-listing"
            >
                {projects.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        imageSrc={project.getImageSrc()}
                    />
                ))}
            </Box>
        </FullScreenSection>
    );
}

export default CertificatSection