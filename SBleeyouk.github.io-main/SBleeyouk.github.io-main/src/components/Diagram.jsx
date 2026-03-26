import React, { useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Summary from './Summary';
import { Title, TextH3, HighlightedText } from './Typo';
import Header from './Header';
import CustomCursor from './cursor';
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const DiagramContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url('./src/background.png');
  background-size: cover;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  cursor: none, auto;
  overflow: hidden;
`;

/*background-color: #ff6035;*/
/*background-color: #ece8e8; background-image: url('./src/bg-5.png');  */

const VennDiagram = styled.div`
  display: flex;
  position: relative;
  height: 70%;
  aspect-ratio: 1;
  margin: auto;
  @media (max-width: 768px) {
    height: 50%;
  }
`;

const Description = styled.div`
  width: 80%;
  height: 10%;
  position: absolute;
  bottom: 8%;
  text-align: center;
  justify-content: top;
  font-size: 2rem;
  font-weight: 500;
  color: #ece8e8;
  font-family: 'PP Neue Montreal', sans-serif;
`;

const Name = styled.span`
`;
const Role = styled.span`
  text-decoration-line: underline;
  text-decoration-style: dotted;
`;

const RoleNot = styled.span`
`;

const Question = styled.span`
  font-style: italic;
`;

/*
const NameContainer = styled.div`
  text-align: center;
  color: white;
  font-family: 'Baskerville', serif;
  font-weight: 600;
  font-size: 2.5rem;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  overflow: visible;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
    color: #215CFA;
  }
`;
*/

const DynamicPart = styled.span`
  font-style: italic;
  color: #ece8e8;
`;

const DashedLine = styled.div`
  position: absolute;
  width: 1px;
  height: 32%; /* Adjust height as needed */
  background: repeating-linear-gradient(
    #ece8e8 0%,
    #ece8e8 50%,
    transparent 50%,
    transparent 100%
  );
  background-size: 2px 10px;
  left: 50%;
  top: 50%; /* Starting point near the intersection */
  transform: translateX(-50%);
  z-index: 2;
`;

const Circle = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  border: 1px dashed #ece8e8;

  box-shadow:  20px 20px 49px rgba(255, 255, 255, 0.1), -20px -20px 49px rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;

  display: flex; /* For centering text */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: Arial, sans-serif;
  font-weight: bold;
  postion:relative;

&.circle1 {
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    & > div {
      position: absolute;
      top: 12%; /* Moves text 10% from the top of the circle */
      text-align: center;
    }
  }

  &.circle2 {
    top: 50%;
    left: 40%;
    transform: translateY(-50%);
    text-align: center;

    & > div {
      position: absolute;
      top: 40%;
      left: 35%; /* Moves text 30% to the left within the circle */
      text-align: center;
      width: 60%;
      @media (max-width: 768px) {
        top: 35%;
        left: 32%;
      }
    }
  }

  &.circle3 {
    top: 50%;
    right: 40%;
    transform: translateY(-50%);
    text-align: center;

    & > div {
      position: absolute;
      top: 40%;
      right: 45%; /* Moves text 30% to the right within the circle */
      text-align: center;
      @media (max-width: 768px) {
        top: 35%;  
        right: 38%;
      }
    }
  }
`;

const VideoBackground = styled.video`
  position: fixed; /* Ensures the video stays fixed and covers the viewport */
  width: 96%; /* Adjust width as needed */
  height: 68%; /* Adjust height as needed */
  top: 10%;
  left: 2%;
  object-fit: cover; /* Ensures the video scales properly */
  border-radius: 30rem;
  z-index: 0; /* Moves it behind other elements */
  clip-path: ${(props) =>
    props.show ? 'circle(0% at 50% 50%)' : 'circle(0% at 50% 50%)'};
  animation: ${(props) =>
    props.show ? 'expand-circle 1s ease-out forwards, fade-in 1s ease-out forwards' : 'none'};
  opacity: ${(props) => (props.show ? 1 : 0)};

  @keyframes expand-circle {
    from {
      clip-path: circle(0% at 50% 50%);
    }
    to {
      clip-path: circle(150% at 50% 50%);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


const InteractionArea = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: transparency; /* Invisible but hoverable */
    pointer-events: all; /* Ensures interaction is detected */
    z-index: 2;

    &.area1 {
        top:23%; /* Adjust based on Region 1 */
        left: 25%; /* Adjust based on Region 1 */
        width: 20%; /* Adjust based on Region 1 */
        height: 20%; /* Adjust based on Region 1 */
    }

    &.area2 {
        top: 23%; /* Adjust based on Region 2 */
        left: 55%; /* Adjust based on Region 2 */
        width: 20%; /* Adjust based on Region 2 */
        height: 20%; /* Adjust based on Region 2 */
    }

    &.area3 {
        top: 33%; /* Adjust based on Region 3 */
        left: 42.5%; /* Adjust based on Region 3 */
        width: 15%; /* Adjust based on Region 3 */
        height: 17%; /* Adjust based on Region 3 */
    }

    &.area4 {
        top: 50%; /* Adjust based on Region 4 */
        left: 42.5%; /* Adjust based on Region 4 */
        width: 15%; /* Adjust based on Region 4 */
        height: 17%; /* Adjust based on Region 4 */
    }

    &:hover {
        cursor: none;}
    }
`;

const Area = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    background: transparency; /* Invisible but hoverable */
    pointer-events: all; /* Ensures interaction is detected */
    z-index: 2;

    &.area5 {
        top: 0%; /* Matches Circle 1 */
        left: 50%;
        transform: translateX(-50%);
        width: 40%; /* Adjust based on Region 4 */
        height: 25%; /* Adjust based on Region 4 */
    }

    &.area6 {
        top: 58%; /* Matches Circle 2 */
        left: 62%;
        transform: translateY(-50%);
        width: 23%; /* Adjust based on Region 4 */
        height: 30%; /* Adjust based on Region 4 */
    }

    &.area7 {
        top: 58%; /* Matches Circle 3 */
        right: 62%;
        transform: translateY(-50%);
        width: 23%; /* Adjust based on Region 4 */
        height: 30%; /* Adjust based on Region 4 */
        cursor: url('/path-to-hover-social.png'), auto; /* Change cursor to image */
    }

    &:hover {
        cursor: none, auto; }
    }
`;

const SimpleText = styled.h1`
  font-family: 'PP Neue Montreal', sans-serif;                                          
  font-weight: 400;
  font-size: 1.5rem;
  color: #ece8e8;
  opacity: 0.7;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Diagram = () => {
    const [isInsideCircle, setIsInsideCircle] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverSection, setHoverSection] = useState(null);
    const [hoveringName, setHoveringName] = useState(false);

    const navigate = useNavigate();

    const handleProjectClick = (projectId) => {
      navigate(`/projects/${projectId}`);
    };

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const summaryRef = useState(null);


    const areaContent = {
      area1: {
        default: 'AI and Civic Memory, <Testimony Continues>',
        role: '',
        question: '',
      },
      area2: {
        default: 'XR as Reflection of Hidden Reality, <The dOXr>',
        role: '',
        question: '',
      },
      area3: {
        default: 'Debiased AI Fairytale Author, <Franklin>',
        role: '',
        question: '',
      },
      area4: {
        default: 'Emotion Training System for ASD, <Rainbow>',
        role: '',
        question: '',
      },
      area5: {
        default: '',
        role: 'Critical Technologist',
        question:
          "How can we empower objectified others to exist authentically and speak on their terms?",
      },
      area6: {
        default: '',
        role: 'HCI Researcher',
        question: 'How can we design interactions that empower marginalized groups through technology?',
      },
      area7: {
        default: '',
        role: 'AI Engineer',
        question: "How does AI's bias toward the 'average' exclude diverse identities?",
      }
    };
    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleEnterCircle = () => {
      setIsInsideCircle(true);
    };
  
    const handleLeaveCircle = () => {
      setIsInsideCircle(false);
    };

    const handleHover = (section) => {
        setHoverSection(section);
    };

    const handleNameHover = () => {
      setHoveringName(true);
    };

    const handleNameLeave = () => {
      setHoveringName(false);
    };

    const handleScrollToSummary = () => {
      if (summaryRef.current) {
        summaryRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
  return (
    <>
    <DiagramContainer 
      onMouseMove={handleMouseMove}
      style={{ cursor: isInsideCircle ? 'none' : 'default' }}
    >
    <Header></Header>
    <SimpleText>Explore Intersecting Areas</SimpleText>
        {!isMobile ? (
            <VennDiagram
              onMouseEnter={handleEnterCircle}
              onMouseLeave={handleLeaveCircle}
            >
                {isInsideCircle && <CustomCursor x={cursorPosition.x} y={cursorPosition.y} hoveredArea={hoverSection} isPopupHovered={false}/>}
                <Circle className="circle1">
                <div>
                    <TextH3>TOWARD</TextH3>
                    <Title>Social Justice</Title>
                </div>
                </Circle>
                <Circle className="circle2">
                <div>
                    <TextH3>BY</TextH3>
                    <Title>Scalable Interaction</Title>
                </div>
                </Circle>
                <Circle className="circle3">
                <div>
                    <TextH3>OF</TextH3>
                    <Title>AI + DATA</Title>
                </div>
                </Circle>
            {/* Interaction Areas */}
            <InteractionArea
            className="area1"
            onMouseEnter={() => handleHover('area1')}
            onMouseLeave={() => handleHover(null)}
            onClick={() => navigate(`/projects/4`)}
            />
            <InteractionArea
            className="area2"
            onMouseEnter={() => handleHover('area2')}
            onMouseLeave={() => handleHover(null)}
            onClick={() => navigate(`/projects/7`)}
            />
            <InteractionArea
            className="area3"
            onMouseEnter={() => handleHover('area3')}
            onMouseLeave={() => handleHover(null)}
            onClick={() => navigate(`/projects/2`)}
            />
            <InteractionArea
            className="area4"
            onMouseEnter={() => handleHover('area4')}
            onMouseLeave={() => handleHover(null)}
            onClick={() => navigate(`/projects/1`)}
            />
            <Area
            className="area5"
            onMouseEnter={() => handleHover('area5')}
            onMouseLeave={() => handleHover(null)}
            />
            <Area
            className="area6"
            onMouseEnter={() => handleHover('area6')}
            onMouseLeave={() => handleHover(null)}
            />
            <Area
            className="area7"
            onMouseEnter={() => handleHover('area7')}
            onMouseLeave={() => handleHover(null)}
            />
            <VideoBackground
                src={
                    hoverSection === 'area1'
                        ? 'https://storage.googleapis.com/saetbyeol-images/circle1.mp4'
                    : hoverSection === 'area2'
                        ? 'https://storage.googleapis.com/saetbyeol-images/circle2.mp4'
                    : hoverSection === 'area3'
                        ? 'https://storage.googleapis.com/saetbyeol-images/circle3.mp4'
                    : hoverSection === 'area4'
                        ? 'https://storage.googleapis.com/saetbyeol-images/circle4.mp4'
                        : ''
                }
                x={cursorPosition.x}
                y={cursorPosition.y}
                autoPlay
                loop
                muted
                show={!!hoverSection}
            />
            </VennDiagram>
        ) : (
          <VennDiagram>
            <Circle className="circle1">
            <div>
                <TextH3>TOWARD</TextH3>
                <Title>Social Justice</Title>
            </div>
            </Circle>
            <Circle className="circle2">
            <div>
                <TextH3>BY</TextH3>
                <Title>Scalable Interaction</Title>
            </div>
            </Circle>
            <Circle className="circle3">
            <div>
                <TextH3>OF</TextH3>
                <Title>AI + DATA</Title>
            </div>
            </Circle>
            </VennDiagram>
        )}
        <DashedLine/> 
        <Description>
          <RoleNot>{hoverSection ? areaContent[hoverSection].default : 'Saetbyeol Leeyouk'}</RoleNot>{' '}
          <Question>
            {hoverSection
              ? areaContent[hoverSection].question
              : ' '}<br></br>
          </Question>
          <HighlightedText onClick={handleScrollToSummary}>
          LEARN MORE <FaArrowDown />
        </HighlightedText>
      </Description>
    </DiagramContainer>
      <div id="summary-section" ref={summaryRef}>
      <Summary />
    </div>
    </>
  );
};

export default Diagram;
