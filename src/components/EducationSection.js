import React from "react";
  import FullScreenSection from "./FullScreenSection";
  import { Box, Heading } from "@chakra-ui/react";
  import Card from "./Card";
  
  const projects = [
    {
      title: "Matriculation",
      description:
        "Enhance the ADM Denim website by optimizing for responsiveness, SEO, and performance. Ensure accessibility and support for multiple languages. Consider state management with Context API, and prioritize testing and error handling. Document the codebase for easier maintenance.",
      getImageSrc: () => require("../images/Screenshot 2024-03-16 062627.png"),
      link: "https://admdenim.com/"
    },
    {
      title: "Intermediate Degree",
      description:
        "The Fascom Limited website has undergone a significant enhancement, transitioning to React.js and integrating Restful APIs. This upgrade not only improves code maintainability and scalability but also enables dynamic content delivery. Users will enjoy a smoother and more interactive experience.",
      getImageSrc: () => require("../images/Screenshot 2024-03-16 063209.png"),
      link: "https://main.doacup6g541af.amplifyapp.com/"
    },
    {
      title: "Bachelor's of Science (CS)",
      description:
        "Developed a Next.js Fiber Management System: Prioritizing Code Reusability, Optimization, and Comprehensive Testing. Includes RESTful API Integration, Login and Admin Panels, and CRUD Functionality.",
      getImageSrc: () => require("../images/photo3.jpg"),
    },

  ];
  
  const EducationSection = () => {
    return (
  
      <FullScreenSection
        backgroundColor="#56735A"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
      >
        <Heading as="h1" id="projects-section">
          Education
        </Heading>
        <Box
          display="grid"
          // gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridTemplateColumns={{base: "repeat(1,minmax(0,1fr))", md: "repeat(3,minmax(0,1fr))"}}
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
  };
  
  export default EducationSection;
  
