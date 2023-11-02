import styled from "styled-components";

export const CounterInputContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.colors['base-button']};
  color: ${({theme}) => theme.colors['purple']};
  
  border-radius: 6px;
  margin: 0.5rem;
`;
export const CounterNumber = styled.span`
  color: ${({ theme }) => theme.colors['base-title']};
  padding: 0 0.25rem;
`;
