import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiArrowUpRight } from "react-icons/fi";

// Glow animation
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 1);
  }
  100% {
    box-shadow: 0 0 10px 5px rgba(255, 255, 255, 1);
  }
`;

// Cursor wrapper
const CursorWrapper = styled.div`
  position: fixed;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  pointer-events: none;
  z-index: 100;
  transform: translate(-50%, -50%);
`;

// Base cursor animation: ${glowAnimation} 1s infinite ease-in-out;
const Cursor = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(236, 232, 232, 0.7);
  animation: ${glowAnimation} 1s infinite ease-in-out;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(10px);
`;

// Content for areas 1-5 and popupImage
const CursorContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(236, 232, 232, 0.3);
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  pointer-events: none;
  white-space: nowrap;
  color: #ff6035;
`;

// CustomCursor Component
const CustomCursor = ({ x, y, hoveredArea, isPopupHovered }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <CursorWrapper x={x} y={y}>
      {isPopupHovered ? (
        <>
          <Cursor />
          <CursorContent>
            VIEW <FiArrowUpRight/>
          </CursorContent>
        </>
      ) : hoveredArea && hoveredArea.startsWith('area') && parseInt(hoveredArea[4]) <= 4 ? (
        <>
          <Cursor />
          <CursorContent>
            VIEW <FiArrowUpRight/>
          </CursorContent>
        </>
      ) : (
        <Cursor />
      )}
    </CursorWrapper>
  );
};

export default CustomCursor;
