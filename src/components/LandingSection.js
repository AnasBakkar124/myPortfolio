import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import image from '../images/my-removebg-preview (1).png'

const greeting = "Hello, I am Muhammad Anas Bakkar!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar
        size="2xl"
        name="Muhammad Anas Bakkar"
        // src="https://i.pravatar.cc/150?img=7" // Replace with your image URL
        src={image} // Replace with your image URL
      />
      <Heading fontSize="xl" color="gray.300">{greeting}</Heading>
      <Heading color="white">{bio1}</Heading>
      <Heading color="white">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
