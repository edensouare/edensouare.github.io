import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {HighlightedTextTwo} from './Typo';
import CustomCursorTwo from './cursor-2';
import { useNavigate } from 'react-router-dom';
import projects from './projectData';
import { RxExternalLink } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive';

const SummaryContainer = styled.div`
  display: flex; /* Enable flexbox */
  flex-direction: column;
  align-items: center; /* Horizontally center content */
  justify-content: center; /* Vertically center content */
  width: 100%;
  background-color: #f8f9fa;
  padding: 4%;
  box-sizing: border-box; /* Include padding in height calculation */
  text-align: center;
  cursor: none auto;
`;

const IntroSection = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    margin-top: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const BigTitle = styled.h1`
  font-family: 'Cygnito Mono', monospace;
  font-weight: 400;
  font-size: 3rem;
  color: #ff6035;
  margin-top: 0;
  width: 50%;
  text-align: left;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0%;
    font-size: 2.5rem;
  }
`;

const IntroBox = styled.div`
    width: 40%;
    margin-left: 10%;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0%;
  }
`;

const Intro = styled.p`
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: #2b2a2a;
  margin-bottom: 1rem; /* Add consistent spacing */
  width: 100%;
  text-align: left;

  span{
    color: #ff6035;
    font-wieght: 700;
    font-style: italic;
  }

  a{
    font-style: italic;
    text-decoration: underline #ff6035 1px solid;
    color: #2b2a2a;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: left;
  }
`;

const Title = styled.h2`
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  margin-top: 4rem;
  font-size: 1rem;
  color: #ff6035;
  margin-bottom: 1rem; /* Add consistent spacing */
  width: 90%;
  text-align: left;
`;

const ApproachList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Ensure content stays centered */
  text-align: center;
  width: 90%; /* Centered width */
  gap: 2rem; /* Space between items */
  margin-bottom: 2rem;
`;

const ApproachItem = styled.div`
  display: flex;
  align-items: flex-start; /* Align content at the top */
  padding: 1.2rem;
  border-top: 1px solid #ff6035;
  width: 100%; /* Take full width of the container */
  box-sizing: border-box; /* Include padding in width */
  text-align: left;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  width: 40%;
  flex: 2;
  text-align: left;
  display: flex;
  flex-direction: column; /* Ensure the content stacks vertically */
  justify-content: flex-start; /* Align content to the top */
  align-items: flex-start; /* Align content to the left */
  height: 100%; /* Ensure it fills the parent's height */
  padding: 0; /* Remove any padding that may push content down */
  margin: 0; /* Remove any margin */
  box-sizing: border-box; /* Ensure padding/margin are included in width/height */
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const ApproachTitle = styled.h3`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 2rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: #ff6035;
`;

const ApproachDescription = styled.p`
  font-size: 1.2rem;
  color: #757474;
`;

const QuestionList = styled.ul`
  list-style: none;
  text-align: left;
  width: 40%;
  padding-left: 4%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const QuestionItem = styled.li`
  font-size: 1.2rem;
  color: #757474;
  cursor: pointer;
  margin-bottom: 2rem;
  position: relative;
  border: 1px white;
  &:hover {
    color: #ff6035; /* Yellow */
    text-decoration:  underline #ff6035 1px solid;
  }

  &:hover::after {
    content: '';
    position: absolute;
    left: 30%;
    top: 50%;
    z-index: 100;
    transform: translateY(20%);
    width: 80%;
    height: 12rem;
    background-image: url(${(props) => props.popupImage});
    background-size: cover;
    border-radius: 8px;
    border: #ff6035 1px solid;
    background-position: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:active {
    color: #ff6035; /* Yellow */
    text-decoration:  underline #ff6035 1px solid;
  }
`;

export const Footer = styled.div`
    margin-top: 5%;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
`

export const FooterText = styled.p`
    font-size: 1rem;
    opacity: 0.3;
    font-size: 0.8rem;
`

const Summary = () => {
    //const [isHovered, setIsHovered] = useState(false);
    const [hoveredApproachId, setHoveredApproachId] = useState(null);
    const [isPopupHovered, setIsPopupHovered] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    
    const navigate = useNavigate();

    const handleProjectClick = (projectId) => {
      navigate(`/projects/${projectId}`);
    };
    
    useEffect(() => {
        const handleMouseMove = (event) => {
          setCursorPosition({ x: event.clientX, y: event.clientY });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
    
      const handleMouseEnterPopup = () => {
        setIsPopupHovered(true);
      };
    
      const handleMouseLeavePopup = () => {
        setIsPopupHovered(false);
      };
    const [approaches] = useState([
        {
        id: 1,
        title: 'For Speculative Utopia',
        description: "What does the ultimate 'good' future look like? By starting with imagination, I identify gaps between current realities, imaginable futures, and ideal futures to bridge between practical challenges and holistic approach.",
        gif: 'src/approach01.png',
        staticImage: 'src/approach01-bf.png',
        questions: [
            { id: '2'},
            { id: '5' },
        ],
        },
        {
          id: 2,
          title: 'By Centering Marginalized',
          description: 'I center the lived experiences of marginalized groups, recognizing them as both the clearest reflections of systemic gaps and the most creative visionaries for innovation. My approach focuses on translating their imaginations, solutions, and methodologies into scalable, impactful systems.',
          gif: 'src/approach02.png',
          staticImage: 'src/approach02-bf.png',
          questions: [
              { id: '3'},
              { id: '4' },
          ],
          },
          {
            id: 3,
            title: 'Through Scalable System',
            description: 'Uncover and deconstruct the hidden bias behind algorithms. Through participatory design, I transform marginalized communities’ qualitative data—stories, emotions, and experiences—into algorithms and systems. Scaling these systems to meet their needs embodies universally adaptable system.',
            gif: 'src/approach03.png',
            staticImage: 'src/approach03-bf.png',
            questions: [
                { id: '1'},
            ],
            },
    ]);
  

  return (
    <>
    <SummaryContainer
    >
    <IntroSection>
        <BigTitle>Question + Create technology as a force for justice</BigTitle>
        <IntroBox>
            <Intro>
            Saetbyeol Leeyouk is a <span>Critical Technologist</span> working at the intersection of ethics and politics of computation, AI engineering, and Human-Computer Interaction (HCI). As a media artist and HCI researcher, she builds scalable systems to empower marginalized groups <span style={{ fontStyle: 'none', fontWeight: '300', color: '#757474' }}>- individuals with disabilities, survivors of deepfake sexual crimes, and underrepresented identities -</span> and redefine human - machine relationships through critical and inclusive perspectives.
            <br></br><br></br>She is a Graduate student and researcher at the <a href='https://www.media.mit.edu/groups/critical-matter/overview/' target="_blank" rel="noopener noreferrer">MIT Media Lab, Critical Matter Group</a>.
            </Intro>
        </IntroBox>
    </IntroSection>
      <Title>Research Approach</Title>
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
                isMobile 
                  ? approach.gif // Mobile: always show the GIF
                  : hoveredApproachId === approach.id 
                    ? approach.gif // Desktop: show GIF if hovered
                    : approach.staticImage // Otherwise, show static image
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
            <QuestionList>
              {approach.questions.map((question, index) => {
                const project = projects.find((p) => p.id.toString() === question.id);
                return (
                  <QuestionItem
                    onMouseEnter={handleMouseEnterPopup}
                    onMouseLeave={handleMouseLeavePopup}
                    key={index}
                    popupImage={project ? project.thumbnail : null} // Use the project's thumbnail
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <RxExternalLink />{' '}
                    {isPopupHovered && (
                    <CustomCursorTwo 
                    x={cursorPosition.x}
                    y={cursorPosition.y}
                    isPopupHovered={isPopupHovered} 
                    />
                    )}
                    {project ? project.question : 'No question available'}
                  </QuestionItem>
                );
            })}
            </QuestionList>
          </ApproachItem>
        ))}
      </ApproachList>
      <HighlightedTextTwo onClick = {() => navigate(`/projects`)}>
        VIEW MORE PROJECTS <FiArrowUpRight />
      </HighlightedTextTwo>
    <Footer>
      <FooterText>© Copyright 2024 Saetbyeol Leeyouk<br></br>Last updated: December 13, 2024</FooterText>
    </Footer>
    </SummaryContainer>
    </>
  );
};

export default Summary;
