import React, { useState } from 'react';
import styled from 'styled-components';
import PrjInfo from './prjInfo';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import projects from './projectData';
import CustomRadioButton from './customRadio';
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


const ProjectContainer = styled.div`
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

const ProjectScreen = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Filters = styled.div`
  padding: 0rem 5rem;
  display: flex;
  margin: 1.2rem;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0rem 2rem;
  }
`;

const FilterButton = styled.button`
  font-family: 'Cygnito Mono', monospace;
  font-weight: 600;
  line-height: 0.5rem;
  color: ${(props) => (props.active ? '#ff6035' : 'rgba(255, 96, 53, 0.3)')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'normal')};
  outline: transparent;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;
  font-size: 1.5rem;
  transition: color 0.3s, font-style 0.3s, font-weight 0.3s;

  &:hover, :active {
    text-decoration: underline;
    .project-count {
      visibility: visible; /* Show on hover */
      opacity: 1; /* Smooth fade-in effect */
  }
  }
  .project-count {
    font-family: 'PP Neue Montreal', sans-serif;
    font-size: 0.8rem; /* Smaller font size for count */
    font-weight: 400;
    color: rgba(255, 96, 53, 0.5); /* Muted color for count */
    position: absolute;
    margin-left: 0.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FilterGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  color: #ff6035;

  button, label {
    cursor: pointer;
  }
`;

const FilterRadio = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;  
  color: #ff6035;
  flex-direction: row;
  gap: 1rem;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
  align-items: center;
`;

const ListItem = styled.div`
  width: 60%;
  display: flex;
  gap: 2rem;
  align-items: left;
  padding: 1.5rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 80%;
  }

  img {
    width: 20%;
    height: 16%;
    border-radius: 8px;
  }

  .content {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .year {
    font-size: 0.85rem;
    color: #757474;
    margin-bottom: 0.2rem;
  }

  .question {
    font-size: 1.5rem;
    font-weight: 400;
    font-style: italic;
    color: #2b2a2a;
    &: hover {
      color: #ff6035;
    }
  }

  .description {
    font-size: 1rem;
    color: #757474;
  }
`;

const DescriptionList = styled.div`
  font-family: 'PP Neue Montreal', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #757474;
  line-height: 1.5rem; /* Adjust line spacing */
`;

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

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const [filterContext, setFilterContext] = useState('ALL');
  const [filterApproach, setFilterApproach] = useState('approach');

  const filteredProjects = projects.filter((project) => {
    return filterContext === 'ALL' || project.tag.includes(filterContext);
  });

  return (
    <>
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
    <ProjectContainer>
    <Header variant="white" />
    <ProjectScreen>
      <Filters>
        <FilterGroup>
          {['ALL', 'AI', 'Social Justice', 'Learning', 'Interface', 'Media Art', 'Research', 'Individual'].map((context) => {
          const projectCount =
            context === 'ALL'
              ? projects.length
              : projects.filter((project) => project.tag.includes(context)).length;
          return (
            <FilterButton
              key={context}
              active={filterContext === context}
              onClick={() => setFilterContext(context)}
            >
            {context}
            <span className="project-count">{projectCount}</span>
            </FilterButton>
          );
          })}
        </FilterGroup>
        <FilterRadio>
          <CustomRadioButton
          label="By Question"
          value="question"
          checked={filterApproach === 'question'}
          onChange={() => setFilterApproach('question')}
          />
        <CustomRadioButton
          label="By Approach"
          value="approach"
          checked={filterApproach === 'approach'}
          onChange={() => setFilterApproach('approach')}
          />
      </FilterRadio>
      </Filters>
      {filterApproach === 'question' ? (
        <ProjectList>
          {filteredProjects.map((project) => (
            <ListItem key={project.id} onClick={() => handleProjectClick(project.id)}>
            <div className="content">
            <span className="year">{project.year}</span>
            <span className="question">{project.question}</span>
            {project.funded && project.funded.length > 0 && (
            <DescriptionList>
              {project.funded.map((fund, index) => (
                <span key={index}>
                  {fund}
                  <br />
                </span>
              ))}
            </DescriptionList>
          )}
            </div>
            <img src={project.thumbnail} alt={project.title} />
            </ListItem>
          ))}
        </ProjectList>

      ):(
        <ProjectGrid>
        {filteredProjects.map((project) => (
          <PrjInfo
          key={project.id}
          thumbnail={filterApproach === 'question' ? project.thumbnailQeustion : project.thumbnail}
          title={project.title}
          description={project.shortDescription}
          year={project.year}
          pdfLink={project.pdfLink}
          gitLink={project.gitLink}
          onClick={() => handleProjectClick(project.id)} // Pass onClick handler here
        />
        ))}
      </ProjectGrid>
      )}
    </ProjectScreen>
    <Footer>
      <FooterText>© Copyright 2024 Saetbyeol Leeyouk<br></br>Last updated: December 13, 2024</FooterText>
    </Footer>
    </ProjectContainer>
    </motion.div>
    </>
  );
};

export default Projects;
