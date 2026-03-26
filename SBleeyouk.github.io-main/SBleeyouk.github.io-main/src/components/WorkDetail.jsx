import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams , useNavigate } from 'react-router-dom';
import Header from './Header';
import CustomCursorTwo from './cursor-2';
import projects, { getProjectById } from './projectData';
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f8f9fa;
  box-sizing: border-box;
  text-align: center;
  font-family: 'PP Neue Montreal', sans-serif;
`;

const PrjScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  text-align: center;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  border-radius: 8px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0 auto;
  }
`;

const Thumbnail = styled.img`
  width: 100%; /* Ensures the image fills the wrapper */
  object-fit: cover; /* Ensures the image doesn't distort */
`;

const Intro = styled.div`
  width: 80%;
  text-align: center;
  padding: ${(props) => (props.isScrolled ? '1rem 0' : '2rem 0')};
  transition: all 0.3s ease-in-out;
`;

const PrjTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  h1 {
    max-width: 85%;
    font-family: 'PP Neue Montreal', sans-serif;
    font-weight: 500;
    font-size: 3rem;
    color: #2b2a2a;
    margin: 0;
    transition: font-size 0.3s ease-in-out;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  .year {
    font-size: 1rem;
    color: #757474;
    margin-top: 2rem;
    transition: font-size 0.3s ease-in-out;
    @media (max-width: 768px) {
      margin-top: 0.5rem;
      font-size: 0.5em;
    }
  }
  @media (max-width: 768px) {
    gap: 0.1rem;
  }
`;

const Question = styled.div`
  height: 24%;
  font-weight: 400;
  font-size: 2rem;
  color: #ff6035;
  margin-top: 1rem;
  transition: font-size 0.3s ease-in-out;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TagItem = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Tag = styled.div`
  display: inline-flex; /* Ensures text and icon are inline */
  align-items: center; /* Aligns items vertically */
  justify-content: center; /* Centers content horizontally */
  font-family: 'Cygnito Mono', monospace;
  background-color: rgba(217, 217, 217, 0.3);
  border-radius: 4px;
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #757474;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
  }
`;

const PDFLink = styled.a`
  display: inline-flex; /* Ensures text and icon are inline */
  align-items: center; /* Aligns items vertically */
  justify-content: center; /* Centers content horizontally */
  font-family: 'Cygnito Mono', monospace;
  text-align: center;
  width: 7rem;
  padding: 0.5rem 0.5rem;
  background: transparent;
  color: #757474;
  font-size: 1rem;
  border: #757474 1px solid;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    color: #f8f9fa;
    background: #757474;
  }
  svg {
    margin-right: 0.3rem; /* Add spacing between text and icon */
  }
  @media (max-width: 768px) {
    width: 5rem;
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
  }
`;

const GitLink = styled.a`
  display: inline-flex; /* Ensures text and icon are inline */
  align-items: center; /* Aligns items vertically */
  justify-content: center; /* Centers content horizontally */
  font-family: 'Cygnito Mono', monospace;
  text-align: center;
  width: 7rem;
  padding: 0.5rem 0.5rem;
  background: transparent;
  color: #757474;
  font-size: 1rem;
  border: #757474 1px solid;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    color: #f8f9fa;
    background: #757474;
  }
  svg {
    margin-right: 0.3rem; /* Add spacing between text and icon */
  }
  @media (max-width: 768px) {
    width: 5rem;
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
  }
`;

const ProjectInfo = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* 아이템을 왼쪽으로 정렬 */
  margin: 4rem 0rem;
  gap: 2rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PrjIntroInfo = styled.div`
  width: 45%;
  text-align: left; /* 내부 텍스트 왼쪽 정렬 */
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;


const BasicTitle = styled.h3`
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #757474;
  opacity: 0.7;
  text-align: left;
  padding-left: 0.5rem;
  border-left: #757474 4px solid;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BasicDescripList = styled.ul`
  list-style: none; /* Remove default list styling */
  padding: 0;
  margin: 0;
`;

const BasicDescrip = styled.li`
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: color: #2b2a2a;
  text-align: left;
  position: relative;
  padding-left: 1.2rem; /* Add space for the custom dot */
  margin-bottom: 0.3rem; /* Add space between list items */
  &::before {
    content: '•'; /* Custom dot */
    position: absolute;
    left: 0;
    color: #000; /* Adjust the dot color */
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DetailSection = styled.div`
  width: 80%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  text-align: justify;
  white-space: pre-line;
  gap: 1rem;
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #2b2a2a;
  span {
    font-weight: bold; 
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    font-size: 1rem;
  }
`;

const ApproachItem = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #2b2a2a;

  span {
    font-weight: 600; /* Bold 스타일 적용 */
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


const DetailItem = styled.div`
  display: inline-block;
  text-align: center;
  wdith: 100%;

  img, video {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  video {
    height: 600px;
    controls: true;
  }
`;

const NextPrjScreen = styled.div`
  width: 80%;
  border-top: #757474 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-top: 8rem;
  padding: 2rem;
  gap: 2rem; /* Space between text and thumbnail */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NextQ = styled.div`
  width: 40%; /* Text takes 40% of the width */
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: left; /* Align text to the left */
  text-align: left;
  padding-left: 10%;
  h1 {
    font-family: 'PP Neue Montreal', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: #ff6035;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  h2 {
    font-family: 'PP Neue Montreal', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: #757474;
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    padding-left: 0;
    width: 80%;
    text-align: center;
  }
`;

const NextPrj = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(5px);
  padding-right: 10%;
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

const ThumbnailWrapper2 = styled.div`
  position: relative;
  width: 100%; /* Fill the allocated width */
  height: 50%; /* Display only the top 50% of the height */
  overflow: hidden; /* Ensure the overflow is hidden for cropping */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0; /* Adjust margin as needed */
`;

const Thumbnail2 = styled.img`
  width: 100%; /* Fill the wrapper width */
  height: 50%;
  object-fit: cover; /* Crop to maintain aspect ratio */
  object-position: top; /* Focus on the top of the image */
  border-radius: 8px;
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 600px; /* Default height for desktop */

  @media (max-width: 768px) {
    height: 200px; /* Adjust height for mobile */
  }
`;

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isPopupHovered, setIsPopupHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const project = getProjectById(Number(projectId));
  const currentIndex = projects.findIndex((project) => project.id === Number(projectId));

  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex] || null;
    //const projectId = projects.find((p) => p.id.toString() === projectId);
  const handleProjectClick = (nextProjectIndex) => {
    setIsPopupHovered(false);
    navigate(`/projects/${nextProjectIndex}`);
  };
  
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <ProjectContainer>
      <Header variant="white" />
      <PrjScreen>
        <Intro>
          <PrjTitle>
            <h1>{project.title}</h1>
            <span className="year">/ {project.year}</span>
          </PrjTitle>
          <Question>{project.question}</Question>
          <TagItem>
            {project.tag?.map((t, index) => (
              <Tag key={index}>{t}</Tag>
            ))}
            {project.pdfLink && (
              <PDFLink href={project.pdfLink} target="_blank" rel="noopener noreferrer">
                <FiArrowUpRight/>View PDF
              </PDFLink>
            )}
            {project.gitLink && (
              <GitLink href={project.gitLink} target="_blank" rel="noopener noreferrer">
              <FaGithub/>View Git
              </GitLink>
            )}
          </TagItem>
        </Intro>
        <ThumbnailWrapper>
          <Thumbnail src={project.thumbnail} alt={project.title} />
        </ThumbnailWrapper>
        <ProjectInfo>
        {project.roles && project.roles.length > 0 && (
          <PrjIntroInfo>
            <BasicTitle>MY ROLE</BasicTitle>
            <BasicDescripList>
              {project.roles.map((role, index) => (
                <BasicDescrip key={index}>{role}</BasicDescrip>
              ))}
            </BasicDescripList>
          </PrjIntroInfo>
        )}
                {project.credits && project.credits.length > 0 && (
          <PrjIntroInfo>
            <BasicTitle>CREDITS</BasicTitle>
            <BasicDescripList>
              {project.credits.map((credit, index) => (
                <BasicDescrip key={index}>{credit}</BasicDescrip>
              ))}
            </BasicDescripList>
          </PrjIntroInfo>
        )}

        {project.awards && project.awards.length > 0 && (
          <PrjIntroInfo>
            <BasicTitle>AWARDS</BasicTitle>
            <BasicDescripList>
              {project.awards.map((award, index) => (
                <BasicDescrip key={index}>{award}</BasicDescrip>
              ))}
            </BasicDescripList>
          </PrjIntroInfo>
        )}

        {project.funded && project.funded.length > 0 && (
          <PrjIntroInfo>
            <BasicTitle>FUNDED</BasicTitle>
            <BasicDescripList>
              {project.funded.map((fund, index) => (
                <BasicDescrip key={index}>{fund}</BasicDescrip>
              ))}
            </BasicDescripList>
          </PrjIntroInfo>
        )}

      </ProjectInfo>

        <DetailSection>
        <BasicTitle>MOTIVATION</BasicTitle>
          {project.motivation.map((item, index) => (
              <ApproachItem key={index}>
                <span>{item.label}</span> {item.description}
              </ApproachItem>
            ))}
            {project.motivationSrc.map((src, index) => {
              console.log('SRC VALUE:', src); // Debugging line to see the exact value of 'src'
              
              return (
                <DetailItem key={index}>
                  {/* Check for YouTube Links */}
                  {src.includes('youtube.com') || src.includes('youtu.be') || src.includes('vimeo.com') ? (
                    <ResponsiveIframe
                      src={src} // Convert to embed if needed
                      title={`YouTube Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : src.endsWith('.mp4') ? (
                    // Render local video files
                    <video src={src} controls width="100%" />
                  ) : (
                    // Render image files for all other cases
                    <img src={src} alt={`Detail ${index + 1}`} width="100%" />
                  )}
                </DetailItem>
              );
            })}
            <BasicTitle>APPROACH</BasicTitle>
            {project.approach.map((item, index) => (
              <ApproachItem key={index}>
                <span>{item.label}</span> {item.description}
              </ApproachItem>
            ))}
            {project.approachSrc.map((src, index) => {
              console.log('SRC VALUE:', src); // Debugging line to see the exact value of 'src'
              
              return (
                <DetailItem key={index}>
                  {/* Check for YouTube Links */}
                  {src.includes('youtube.com') || src.includes('youtu.be') || src.includes('vimeo.com') ? (
                    <ResponsiveIframe
                      src={src} // Convert to embed if needed
                      title={`YouTube Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : src.endsWith('.mp4') ? (
                    // Render local video files
                    <video src={src} controls width="100%" />
                  ) : (
                    // Render image files for all other cases
                    <img src={src} alt={`Detail ${index + 1}`} width="100%" />
                  )}
                </DetailItem>
              );
            })}
        </DetailSection>
      </PrjScreen>
      <NextPrjScreen
        onClick={() => handleProjectClick(nextProject.id)}
        onMouseEnter={() => setIsPopupHovered(true)}
        onMouseLeave={() => setIsPopupHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {isPopupHovered && 
            <CustomCursorTwo 
            x={cursorPosition.x}
            y={cursorPosition.y}
            isPopupHovered={isPopupHovered} 
        />}
        <NextQ>
            <h2>NEXT PROJECT</h2>
            <h1>{nextProject.question}</h1>
        </NextQ>
        <NextPrj>
            <ThumbnailWrapper2>
            <Thumbnail2 src={nextProject.thumbnail} alt={nextProject.title} />
            </ThumbnailWrapper2>
        </NextPrj>
        </NextPrjScreen>

    </ProjectContainer>
  );
};

export default ProjectDetail;
