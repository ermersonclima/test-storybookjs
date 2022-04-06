import styled from "styled-components";

interface ChipsProps {
  color?: string;
}

export const Chip01 = styled.span<ChipsProps>`
  transition: 400ms;
  display: inline-block;
  color: ${(props) => props.color || "#000"};
  font-size: 1em;
  margin: 1em;
  padding: 0.5em;
  border: 1px solid ${(props) => props.color || "#000"};
  border-radius: 50px;
  &:hover {
    transition: 400ms;
    cursor: pointer;
    box-shadow: 10px 5px 5px black;
  }
`;
