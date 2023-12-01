import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: anasbakkar.official@outlook.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/anasBakkar124/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/muhammad-anas-bakkar-898560236/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@fa22bscs0133",
  },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <Link key={index} href={social.url} isExternal>
                  <FontAwesomeIcon icon={social.icon} />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
          <HStack spacing={8}>
              <Link href="#projects-section" onClick={handleClick("projects")}>
                Projects
              </Link>
              <Link href="#contact-section" onClick={handleClick("contact")}>
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
