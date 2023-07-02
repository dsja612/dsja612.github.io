import React from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar: React.FC = () => {
  return (
    <BrowserRouter>
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
        <Link to="#aboutus" smooth>
          <Text fontSize="lg" fontWeight="bold" color="brand.50">
            DYLAN SNG
          </Text>
        </Link>
        <Flex>
          <Link to="#academics" smooth>
            <Text mr={4} fontSize="md" color="brand.200">
              Academics
            </Text>
          </Link>
          <Link to="#experience" smooth>
            <Text mr={4} fontSize="md" color="brand.200">
              Experience
            </Text>
          </Link>
          <Link to="#projects" smooth>
            <Text fontSize="md" color="brand.200">
              Projects
            </Text>
          </Link>
          <Icon
            as={FaLinkedin}
            boxSize={6}
            ml={4}
            color="brand.200"
            cursor="pointer"
            onClick={() => window.open('https://sg.linkedin.com/in/dylansja', '_blank')}
          />
          <Icon
            as={FaGithub}
            boxSize={6}
            ml={4}
            color="brand.200"
            cursor="pointer"
            onClick={() => window.open('https://github.com/dsja612', '_blank')}
          />
          <Icon
            as={FaEnvelope}
            boxSize={6}
            ml={4}
            color="brand.200"
            cursor="pointer"
            onClick={() => window.open('mailto:dsja612@gmail.com')}
          />
        </Flex>
      </Flex>
    </BrowserRouter>
  );
};

export default Navbar;
