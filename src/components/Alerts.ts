import styled from "styled-components";

export const AlertYellow = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['yellow-light']};
  color: ${({ theme }) => theme.colors['yellow-dark']};
  font-family: 'Roboto', sans-serif;
  border: 2px solid ${({ theme }) => theme.colors['yellow-dark']};
  margin: 0 auto;
`
