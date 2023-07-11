import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Projects: React.FC = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" id="projects">
      <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="gray.900" color="white">
          <Text fontSize="3xl" fontWeight="bold" mr={4}>
            Work-in-progress
          </Text>
      </Flex>
    </main>
  );
};

export default Projects;
