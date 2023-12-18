import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box 
      color="black" 
      bg="white" 
      maxW="lg" 
      borderRadius="lg" 
      overflow="hidden"
      >
        <Image src={imageSrc} borderRadius="lg" />
        <Box 
          color='black'
          py="16px"
          px="12px"
        >
          <VStack alignItems={'flex-start'} spacing={4}>
            <Heading fontWeight={'semibold'} as="h6" size="sm">{title}</Heading>
            <Text color={'gray.500'}>{description}</Text>
            <HStack justifyContent={'space-between'}>
              <Text fontSize='sm'>See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
          </VStack>
        </Box>
    </Box>
  );
};

export default Card;
