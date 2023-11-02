import styled from "styled-components";

export const ButtonDefault = styled.button`
  padding: 0.5rem;
  gap: 0.25rem;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 8px;
  
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  
  transition: all 0.2s ease-in-out;
`

export const ButtonPurpleDarkIcon = styled(ButtonDefault)`
  background-color: ${props => props.theme.colors['purple-dark']};
  color: ${props => props.theme.colors['base-card']};
  gap: 0.5rem;
  
  &:hover {
    background-color: ${props => props.theme.colors['purple']};
  }
  
  &:focus {
    background-color: ${props => props.theme.colors['purple']};
    box-shadow: none;
  }
`
