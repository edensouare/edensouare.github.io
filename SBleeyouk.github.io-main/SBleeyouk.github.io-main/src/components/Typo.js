import styled from 'styled-components';


export const Title = styled.h1`
  font-family: 'Cygnito Mono', monospace;
  font-style: normal;
  font-size: ${(props) => props.size || '1.5rem'};
  color: ${(props) => props.color || '#ece8e8'};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TextH3 = styled.h3`
  font-family: 'PP Neue Montreal', sans-serif;                                          
  font-weight: 400;
  line-height: 0.5rem;
  font-size: ${(props) => props.size || '0.8rem'};
  color: ${(props) => props.color || '#ece8e8'};
`;

export const HighlightedText = styled.span`
  display: inline-flex; /* Ensures text and icon are inline */
  align-items: center; /* Aligns items vertically */
  justify-content: center; /* Centers content horizontally */
  text-align: center;
  font-family: 'PP Neue Montreal', sans-serif;                                          
  font-weight: 400;
  background-color: transparent;
  border-radius: 32px;
  border: #ece8e8 1px solid;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #ece8e8;
  text-decoration: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.7;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
    color: #ece8e8;
  }

  svg {
    margin-left: 0.5rem; /* Add spacing between text and icon */
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const HighlightedTextTwo= styled.span`
  display: inline-flex; /* Ensures text and icon are inline */
  align-items: center; /* Aligns items vertically */
  justify-content: center; /* Centers content horizontally */
  text-align: center;
  font-family: 'PP Neue Montreal', sans-serif;                                          
  font-weight: 400;
  background-color: transparent;
  border-radius: 32px;
  border: #2b2a2a 1px solid;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #2b2a2a;
  text-decoration: none;
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
    color: #2b2a2a;
  }

  svg {
    margin-left: 0.5rem; /* Add spacing between text and icon */
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;