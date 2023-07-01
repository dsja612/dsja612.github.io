import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const AboutMe: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="gray.900" color="white">
      <Box mb={8}>
        <Image src={process.env.PUBLIC_URL + '/profile.jpg'} alt="Profile Image" boxSize="200px" borderRadius="full" />
      </Box>
      <Text fontSize="3xl" fontWeight="bold" mr={4}>
        Hello, I'm Dylan!
      </Text>
      <Text fontSize="xl" marginLeft="40px" align="center" marginRight="40px">
        I am a Year 3 Computer Science student at the National University of Singapore. I am passionate about software development and I am always looking for opportunities to learn and grow.
        My focus area of study is on databases, and I have experience in software engineering, AI and machine learning, and data analytics.
      </Text>
    </Flex>
  );
};

export default AboutMe;
