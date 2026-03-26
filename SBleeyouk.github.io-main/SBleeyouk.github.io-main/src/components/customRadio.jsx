import React from 'react';
import styled from 'styled-components';

// Radio button wrapper
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'PP Neue Montreal', sans-serif;
  font-size: 1.2rem;
  color: ${(props) => (props.checked ? '#2b2a2a' : '#757474')};
  transition: color 0.3s ease;

  &:hover {
    color: #2b2a2a;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Hidden radio input
const HiddenRadio = styled.input`
  display: none;
`;

// Custom radio indicator
const CustomRadio = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #2b2a2a;
  border-radius: 50%;
  margin-right: 0.5rem;
  position: relative;
  transition: border-color 0.3s ease;

  /* When radio is checked */
  ${HiddenRadio}:checked + & {
    border-color: #ff6035; /* Border color for checked state */
    background-color: #ff6035;
  }
  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;

const CustomRadioButton = ({ label, value, checked, onChange }) => (
  <StyledLabel checked={checked}>
    <HiddenRadio
      type="radio"
      checked={checked}
      onChange={onChange}
      value={value}
    />
    <CustomRadio />
    {label}
  </StyledLabel>
);

export default CustomRadioButton;
