import React from 'react';
import { Heading, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const Academics: React.FC = () => {
  return (
    <main id="academics">
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="gray.900" color="white">
      <Text fontSize="3xl" fontWeight="bold" mr={4}> Academics </Text>
      <Tabs isFitted variant='soft-rounded'>
        <TabList>
          <Tab>National University of Singapore</Tab>
          <Tab>Temasek Polytechnic</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading fontSize="2xl"> Bachelor of Computing (Computer Science) </Heading>
            <Text> Aug 2021 – Dec 2024 (Expected) </Text>
            <br/>
            <UnorderedList>
              <ListItem>Pursuing a focus area in Database Systems and Software Engineering</ListItem>
              <ListItem>Relevant coursework: Database Systems Implementation, Database Systems, Operating Systems, Software Engineering.</ListItem>
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <Heading fontSize="2xl"> Diploma with Merit in Business Intelligence and Analytics </Heading>
            <Text> Apr 2016 - Apr 2019 </Text>
            <br/>
            <UnorderedList>
              <ListItem>Awarded the bronze medal for achieving the 3rd highest GPA in the cohort.</ListItem>
              <ListItem>Achieved the Director's list award for all semesters.</ListItem>
            </UnorderedList>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    </main>
  );
};

export default Academics;
