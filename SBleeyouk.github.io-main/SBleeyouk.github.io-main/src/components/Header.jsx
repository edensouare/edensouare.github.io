import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

const StyledHeader = styled.header`
  position: ${(props) => (props.variant === 'white' ? 'block' : 'sticky')};
  width: 80%; /* Full width of the header */
  z-index: 100; /* Keeps it above other elements */
  padding: 2rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  background-color: ${(props) =>
    props.variant === 'white' ? 'transparent' : props.isScrolled ? 'rgba(248, 249, 250, 0.3)' : 'transparent'};
  color: ${(props) => (props.variant === 'white' ? '#ece8e8' : props.isScrolled ? '#ece8e8' : 'white')};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: ${(props) => (
      props.variant === 'white' ? '#2b2a2a' : props.isScrolled ? '#ece8e8' : 'white')};
    flex: 1;
    text-align: center;
    margin: 0 auto;
    opacity: 0.6; /* Default opacity */
    font-style: normal; /* Default style */
    font-weight: normal; /* Default weight */
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      flex: 1;
      text-decoration: underline 1px dashed;
    }

    &.active {
      opacity: 1; /* Full opacity for active link */
    }
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Header = ({ variant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/saetbyeol') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 100; // Adjust threshold for when the header changes style
        setIsScrolled(scrollPosition > threshold);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setIsScrolled(false);
    }
  }, [location.pathname]);

  return (
    <StyledHeader isScrolled={isScrolled} variant={variant}>
      <Link
        to="/saetbyeol"
        className={location.pathname === '/saetbyeol' ? 'active' : ''}
      >
        SAETBYEOL
      </Link>
      <Link
        to="/projects"
        className={location.pathname === '/projects' ? 'active' : ''}
      >
        PROJECTS
      </Link>
      <Link
        to="/about"
        className={location.pathname === '/about' ? 'active' : ''}
      >
        ABOUT
      </Link>
    </StyledHeader>
  );
};

export default Header;
