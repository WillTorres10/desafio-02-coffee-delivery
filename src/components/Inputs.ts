import styled from "styled-components";

interface TextInputProps {
  width?: string;
}

export const TextInput = styled.input<TextInputProps>`
  width: ${(props) => props.width || '100%'};
  
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  background: ${({ theme }) => theme.colors['base-input']};

  margin-bottom: 1rem;
  gap: 0.75rem;
  padding: 0.75rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`;

export const InputBoxWithOptional = styled.div`
  width: 100%;
  
  input {
    position: relative;
    z-index: 2;
  }
  
  div {
    position: relative;
    z-index: 5;
    float: right;
    margin-top: -2.9rem;
    margin-right: 1rem;

    color: ${({ theme }) => theme.colors['base-label']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: 130%; /* 15.6px */
  }
`
