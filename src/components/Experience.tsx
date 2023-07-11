import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Navbar from './Navbar';
import ExperienceTimeline from './ExperienceTimeline';

const Experience: React.FC = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" id="experience">
    <Navbar />
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="gray.900" color="white">
        <Text fontSize="3xl" fontWeight="bold" mr={4}> Working Experience </Text>
        <ExperienceTimeline /> 
    </Flex>
    </main>
  );
};

export default Experience;
