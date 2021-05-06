import styled from 'styled-components';

export const FlexCol = styled.div`
  dispaly: flex;
  flex-direction: column;
`;
export const Text = styled.h3``;
export const Button = styled.button`
  margin: 5px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
