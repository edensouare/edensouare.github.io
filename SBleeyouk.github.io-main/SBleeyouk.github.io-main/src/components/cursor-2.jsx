import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiArrowUpRight } from "react-icons/fi";

// Cursor wrapper
const CursorWrapper = styled.div`
  position: fixed;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  pointer-events: none;
  z-index: 100;
  transform: translate(-50%, -50%);
`;

// Base cursor
const Cursor = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f8f9fa;
  border-radius: 50%;
  pointer-events: none;
  border: #ff6035 solid 3px;
`;

// Content for areas and popupImage
const CursorContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ff6035;
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  pointer-events: none;
  white-space: nowrap;
`;

// CustomCursor Component
const CustomCursorTwo = ({ x, y, hoveredArea, isPopupHovered }) => {
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
    <CursorWrapper x={mousePosition.x} y={mousePosition.y}>
      {isPopupHovered ? (
        <>
          <Cursor />
          <CursorContent>
            VIEW <FiArrowUpRight />
          </CursorContent>
        </>
      ) : hoveredArea && hoveredArea.startsWith('area') && parseInt(hoveredArea[4]) <= 4 ? (
        <>
          <Cursor />
          <CursorContent>{`Area ${hoveredArea[4]}`}</CursorContent>
        </>
      ) : (
        <Cursor />
      )}
    </CursorWrapper>
  );
};

export default CustomCursorTwo;
