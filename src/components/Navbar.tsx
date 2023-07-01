import React from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Navbar: React.FC = () => {
  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="brand.700"
      align="center"
      justify="space-between"
      p={4}
      zIndex={999}
    >
      <Text fontSize="lg" fontWeight="bold" color="brand.50" as="a" href="https://github.com/dsja612">
        DYLAN SNG
      </Text>
      <Flex>
        <Text mr={4} fontSize="md" color="brand.200">
          About Me
        </Text>
        <Text mr={4} fontSize="md" color="brand.200">
          Experience
        </Text>
        <Text fontSize="md" color="brand.200">
          Projects
        </Text>
        <Icon as={FaLinkedin} boxSize={6} ml={4} color="brand.200" cursor="pointer" onClick={() => window.open("https://sg.linkedin.com/in/dylansja", "_blank")} />
        <Icon as={FaGithub} boxSize={6} ml={4} color="brand.200" cursor="pointer" onClick={() => window.open("https://github.com/dsja612", "_blank")} />
        <Icon as={FaEnvelope} boxSize={6} ml={4} color="brand.200" cursor="pointer" onClick={() => window.open("mailto:dsja612@gmail.com")} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
