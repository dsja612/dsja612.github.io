import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { Text } from '@chakra-ui/react';

const workExperience = [
  {
    className: "vertical-timeline-element--work",
    date: "May 2023 - July 2023",
    title: "CSIT (Centre for Strategic Infocomm Technologies)",
    subtitle: "Data Engineer Intern",
    description: "Developed a multi-core benchmarking tool in Python for Intel's Hyperscan library to compare and isolate regex matching performance on PCAP files.",
    contentStyle: { background: 'rgb(51, 78, 104)', color: 'brand.700' },
    contentArrowStyle: { borderRight: '7px solid  rgb(51, 78, 104)' },
    iconStyle: { background: 'rgb(51, 78, 104)', color: 'brand.700' },
    icon: FaBriefcase,
  },
  {
    className: "vertical-timeline-element--work",
    date: "August 2019 - August 2021",
    title: "SAF (Singapore Armed Forces), Full-Time National Service",
    subtitle: "Administrative Support Assistant (Data Clerk)",
    description: "Constructed data pipelines using Excel, VBA, and Access to generate datasets and dashboards for operational needs.",
    contentStyle: { background: 'rgb(51, 78, 104)', color: 'brand.700' },
    contentArrowStyle: { borderRight: '7px solid  rgb(51, 78, 104)' },
    iconStyle: { background: 'rgb(51, 78, 104)', color: 'brand.700' },
    icon: FaBriefcase,
  },
  {
    className: "vertical-timeline-element--work",
    date: "May 2019 - July 2019",
    title: "Temasek Polytechnic",
    subtitle: "Temporary AI Software Engineer",
    description: "Designed, created and integrated a live-updating dashboard with an existing facial recognition application using PowerBI, C#, and the Microsoft Face API.",
    contentStyle: { background: 'rgb(51, 78, 104)', color: 'brand.700' },
    contentArrowStyle: { borderRight: '7px solid  rgb(51, 78, 104)' },
    iconStyle: { background: 'rgb(51, 78, 104)', color: 'brand.700' },
    icon: FaBriefcase,
  },
  {
    className: "vertical-timeline-element--work",
    date: "July 2018 - January 2019",
    title: "PSA Corporation Ltd",
    subtitle: "Data Engineer Intern",
    description: "Created and documented dynamic ETL processes in Informatica PowerCenter to clean, validate and archive data, hence improving data quality for analytics and reporting.",
    contentStyle: { background: 'rgb(51, 78, 104)', color: 'brand.700' },
    contentArrowStyle: { borderRight: '7px solid  rgb(51, 78, 104)' },
    iconStyle: { background: 'rgb(51, 78, 104)', color: 'brand.700' },
    icon: FaBriefcase,
  },
  // Add more work experience objects here if needed
];

const ExperienceTimeline = () => {
  return (
    <VerticalTimeline>
      {workExperience.map((experience, index) => (
        <VerticalTimelineElement
          key={ index } // Ensure each element has a unique key
          className={ experience.className }
          contentStyle={ experience.contentStyle }
          contentArrowStyle={ experience.contentArrowStyle }
          date={ experience.date }
          iconStyle={ experience.iconStyle }
          icon={ <experience.icon /> }
        >
          <h3 className="vertical-timeline-element-title" style={{ fontSize: '20px', fontWeight: 'bold' }}>{ experience.title }</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: '16px' }}>{ experience.subtitle }</h4>
          <p>{experience.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
