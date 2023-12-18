import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarImg from '../images/my_avatar.jpg'

const greeting = "Hello, I am Mohammad Ershad!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
    <Avatar size="2xl"  src={avatarImg} />
    <Heading as="h6" size="sm" noOfLines={1}>{greeting}</Heading>
    <Heading as="h5" style={{ marginTop: '2rem' }}>{bio1}</Heading>
    <Heading as="h6" size="xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
