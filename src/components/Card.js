import React from "react";
import { Heading, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack border="1px" borderColor="gray.300" borderRadius="md" overflow="hidden" boxShadow="sm" spacing={0}>
      <VStack align="start" p={4} spacing={3} flex={1} bg="white">
        <Image src={imageSrc} alt={title} objectFit="cover"  />
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text  color="gray.600">
          {description}
        </Text>
        <Button rightIcon={<FontAwesomeIcon icon={faArrowRight} />} color="black" size="1x">
          See More
        </Button>
      </VStack>
    </HStack>
  );
};

export default Card;
