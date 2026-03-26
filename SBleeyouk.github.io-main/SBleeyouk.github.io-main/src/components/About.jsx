import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20, // Slight slide up
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Duration of fade-in
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20, // Slide out
    transition: {
      duration: 0.6, // Duration of fade-out
      ease: "easeIn",
    },
  },
};

const AboutContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  box-sizing: border-box;
  text-align: center;
  cursor: none auto;
  font-family: 'PP Neue Montreal', sans-serif;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`

const AboutInfo = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AboutInfoProfile = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4rem 0rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem 0rem;
  }
`

const Profile = styled.img`
  width: 30%;
  height: auto;
  border-radius: 8px; /* Makes the image corners rounded */
  object-fit: cover; /* Ensures the image maintains aspect ratio */
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const IntroBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    padding-left: 4rem;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Intro = styled.p`
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #2b2a2a;
  width: 100%;
  text-align: left;
  span{
    color: #ff6035;
  }
  a{
    text-decoration: underline #2b2a2a 1px solid;
    font-style: italic;
    color: #2b2a2a;
  }
  @media (max-width: 768px) {
    text-align: left;
    font-size: 1rem;
  }
`;

const URLbox = styled.div`
  display: flex;
  flex-direction: space-between;
  gap: 1rem;
`

const URL = styled.a`
  font-size: 2rem;
  color: #757474;
  transition: color 0.3s;

  &:hover {
    color: #ff6035;
    text-decoration: underline;
  .project-count {
      visibility: visible; /* Show on hover */
      opacity: 1; /* Smooth fade-in effect */
  }
  cursor: pointer;
`

const CVFrame = styled.iframe`
  width: 80%;
  height: 800px;
  margin-top: 1rem;
  border: #ff6035 1px solid ;
`;

const Title = styled.h2`
  font-family: 'PP Neue Montreal', sans-serif;
  font-family: 'Cygnito Mono', monospace;
  font-weight: 400;
  font-size: 1.5rem;
  color: #ff6035;
  margin-bottom: 2rem; /* Add consistent spacing */
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ApproachList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Ensure content stays centered */
  text-align: center;
  width: 100%; /* Centered width */
  gap: 2rem; /* Space between items */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ApproachItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content at the top */
  padding: 1rem;
  border-left: 1px solid #ff6035;
  width: 100%; /* Take full width of the container */
  box-sizing: border-box; /* Include padding in width */
  text-align: left;
  gap: 1rem;
`;

const ApproachNum = styled.div`
    width: 5%;
    font-family: 'PP Neue Montreal', sans-serif;  
    font-weight: 400;
    font-size: 1rem;
    color: #ff6035;
    text-align: left;
`

const GifContainer = styled.div`
  margin-right: 4%;
  width: 150px; /* Fixed width */
  height: 150px; /* Matches width to make it a square */
  position: relative;
  overflow: hidden; /* Ensures content fits within the square */
`;

const Image = styled.img`
  width: 100%; /* Makes the image responsive */
  height: 100%; /* Ensures it fits the container */
  object-fit: cover; /* Ensures proper scaling of the image */
  transition: opacity 0.3s ease-in-out; /* Smooth transition for hover effect */
`;

const ApproachDetails = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column; /* Ensure the content stacks vertically */
  justify-content: flex-start; /* Align content to the top */
  align-items: flex-start; /* Align content to the left */
  height: 100%; /* Ensure it fills the parent's height */
  padding: 0; /* Remove any padding that may push content down */
  margin: 0; /* Remove any margin */
  box-sizing: border-box; /* Ensure padding/margin are included in width/height */
`;

const ApproachTitle = styled.h3`
    display: flex;
    height: 4rem;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: #ff6035;
`;

const ApproachDescription = styled.p`
  font-size: 1.2rem;
  color: #757474;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CollaboItem = styled.div`
  display: flex;
  width: 100%; /* Take full width of the container */
  box-sizing: border-box; /* Include padding in width */
  text-align: center;
  gap: 1rem 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const CollaboTitle = styled.div`
  background-color: rgba(217, 217, 217, 0.3);
  border-radius: 24px;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0.4rem 1rem;
  color: #2b2a2a;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Footer = styled.div`
    margin-top: 5%;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    margin-bottom: 2%;
`

export const FooterText = styled.p`
    font-size: 1rem;
    opacity: 0.3;
    font-size: 0.8rem;
`

const DetailItem = styled.div`
  display: inline-block;
  text-align: center;
  wdith: 100%;

  img, video {
    border-radius: 8px;
  }
`;

function Projects() {
  const [hoveredApproachId, setHoveredApproachId] = useState(null);
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const [approaches] = useState([
            {
            id: 1,
            title: 'For Speculative Utopia',
            description: "What does the ultimate 'good' future look like? By starting with imagination, I identify gaps between current realities, imaginable futures, and ideal futures. This approach bridges practical needs with holistic thinking. On this gap, I design and build tech societies that prioritize equity and sustainability over profit and exclusion.",
            gif: 'src/approach01.png',
            staticImage: 'src/approach01.png',
            questions: [
                { id: '3'},
                { id: '2' },
            ],
            },
            {
              id: 2,
              title: 'By Centering Marginalized',
              description: 'I center the lived experiences of marginalized groups, recognizing them as both the clearest reflections of systemic gaps and the most creative visionaries for innovation. I translate their imaginations, solutions, and methodologies into scalable, impactful systems.',
              gif: 'src/approach02.png',
              staticImage: 'src/approach02.png',
              questions: [
                  { id: '3'},
                  { id: '4' },
              ],
              },
              {
                id: 3,
                title: 'Through Scalable System',
                description: 'In the rapidly changing landscape of technology, I uncover and deconstruct the hidden bias behind algorithms driving it. Through participatory design, I transform marginalized communities’ qualitative data—stories, emotions, and experiences—into algorithms and systems. Scaling these systems to meet their needs embodies universally adaptable design.',
                gif: 'src/approach03.png',
                staticImage: 'src/approach03.png',
                questions: [
                    { id: '5'},
                    { id: '6' },
                ],
                },
        ]);
  return (
    <>
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
    <AboutContainer>
      <Header variant="white" />
      <AboutInfo>
            <AboutInfoProfile>
              <Profile src="src/saetbyeol-profile-bw-3_4.png" alt="Profile Image" />
              <IntroBox>
                <Intro>
                <span>Saetbyeol Leeyouk</span> is a Critical Technologist working at the intersection of ethics and politics of computation, AI engineering, and Human-Computer Interaction (HCI).
                She is a Graduate student and researcher at the <a href='https://www.media.mit.edu/groups/critical-matter/overview/' target="_blank" rel="noopener noreferrer">MIT Media Lab, Critical Matter Group</a>.
                <br></br><br></br>She works across media art and engineering, using creative inquiry and technical design to explore the social risks of emerging technologies. 
                Grounded in critical theory and participatory design, her research centers marginalized communities and builds inclusive, scalable systems for Human-AI interaction. 
                She has collaborated with <span style={{ fontStyle: 'italic', color: '#2b2a2a' }}> autistic children, survivors of deepfake sexual violence, and underrepresented groups in current LLM systems </span>—translating their experiences into interactive systems and algorithmic tools.
                <br></br><br></br>Prior to joining the Media Lab, she earned a bachelor’s degree in <a href='https://creative.sogang.ac.kr/' target="_blank" rel="noopener noreferrer">Art & Technology</a> and AI from Sogang University. 
                She was an undergraduate researcher at the <a href='https://www.kixlab.org/' target="_blank" rel="noopener noreferrer">KAIST Interaction Lab</a>  and the <a href='https://cstlab.org/' target="_blank" rel="noopener noreferrer">KAIST Collaborative Social Technologies Lab</a>, and participated in the Smilegate AI Membership Program.
                </Intro>
                <URLbox>
                  <URL href='mailto:sbleeyuk@mit.edu' target="_blank" rel="noopener noreferrer"><MdEmail /></URL>
                  <URL href='https://github.com/SBleeyouk' target="_blank" rel="noopener noreferrer"><FaGithub /></URL>
                  <URL href='https://www.linkedin.com/in/sbleeyouk' target="_blank" rel="noopener noreferrer"><FaLinkedin/></URL>
                </URLbox>
              </IntroBox>
          </AboutInfoProfile>
        <Title>Research Approach</Title>
        <DetailItem>
          <img src='/src/approach-overview.png' width="60%" />
        </DetailItem>
        <ApproachList
        isPopupHovered={false}
        style={{ cursor: isPopupHovered ? 'none' : 'default' }}
        >
          {approaches.map((approach) => (
            <ApproachItem 
              key={approach.id}
              //onMouseEnter={() => setIsHovered(true)} // Show the GIF on hover
              //onMouseLeave={() => setIsHovered(false)} // Revert to static image
              onMouseEnter={() => setHoveredApproachId(approach.id)} // Set the hovered id
              onMouseLeave={() => setHoveredApproachId(null)} // Reset when mouse leaves
            >
              <GifContainer>
              <Image
                  src={
                      hoveredApproachId === approach.id
                    ? approach.gif // Show GIF if hovered
                    : approach.staticImage // Show static image otherwise
                  }
                  alt="GIF Box"
              />
              </GifContainer>
              <ApproachNum>00{approach.id}</ApproachNum>
              <ApproachDetails>
                <div>
                  <ApproachTitle>{approach.title}</ApproachTitle>
                  <ApproachDescription>{approach.description}</ApproachDescription>
                </div>
              </ApproachDetails>
            </ApproachItem>
          ))}
        </ApproachList>
        <br></br>
        <br></br>
        <Title>Collaborated With</Title>
        <CollaboItem>
          <CollaboTitle>LG Electronics</CollaboTitle>
          <CollaboTitle>Smilegate Futurelab</CollaboTitle>
          <CollaboTitle>KIXLAB</CollaboTitle>
          <CollaboTitle>Gallery Hyundai</CollaboTitle>
          <CollaboTitle>National Research Foundation Korea</CollaboTitle>
          <CollaboTitle>WRTN Technologies Inc.</CollaboTitle>
          <CollaboTitle>E.LOZEN</CollaboTitle>
          <CollaboTitle>CARE(Comfort Women Action for Redress and Education)
          </CollaboTitle>
          <CollaboTitle>Seoul Artists’ Platform_New&Young</CollaboTitle>
        </CollaboItem>
      </AboutInfo>
      <CVFrame
          src="https://drive.google.com/file/d/1xuNEbOCEkSHgSDbTS9POFDWDgQTFKORP/preview" allow="autoplay">
        </CVFrame>
    <Footer>
      <FooterText>© Copyright 2024 Saetbyeol Leeyouk<br></br>Last updated: December 13, 2024</FooterText>
    </Footer>
    </AboutContainer>
    </motion.div>
    
    </>
  );
}

export default Projects;