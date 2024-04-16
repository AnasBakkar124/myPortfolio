import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Container, SimpleGrid } from '@chakra-ui/react'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  Grid, GridItem
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  let url = "http://localhost:4000/post";
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      await submit(url, values).then(() => {
        onOpen(response)
        setSubmitting(false);
      })

    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      type: Yup.string()
        .oneOf(['hireMe', 'openSource', 'other'], 'Invalid enquiry type')
        .required('Required'),
      comment: Yup.string()
        .max(500, 'Must be 500 characters or less'),
    }),
  });

  useEffect(() => {

    if (response?.type == "success") {
      onOpen(response); // This function should handle the response, e.g., by showing a notification
    }
  }, [response,]);

  return (

    <FullScreenSection
      w="100%"
      isDarkBackground
      backgroundColor="#607D8B"
      py={16}
      spacing={8}
    >


      <SimpleGrid w={{ base: "300px", md: "400px", lg: "800px",  }}>
            <Heading as="h1" id="contactme-section">
              Contact me
            </Heading>
        <Box bg='null' >
          <VStack w="100%"
            
            alignItems="flex-start">
            <Box as="form" onSubmit={formik.handleSubmit} p={6} rounded="md" w="100%">
              <VStack spacing={4}>
                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                  <Select
                    id="type"
                    name="type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.type}
                  >
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Open source consultancy session</option>
                    <option value="other">Other</option>
                  </Select>
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                    height={250}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button
                  isLoading={isLoading}
                  type="submit"
                  color="#233944"
                  width="full"
                >
                  Submit
                </Button>
              </VStack>

            </Box>

          </VStack>
        </Box>
      </SimpleGrid>


    </FullScreenSection>

  );
};

export default LandingSection;
