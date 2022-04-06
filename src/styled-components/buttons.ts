import styled from "styled-components";

interface ButtonsProps {
  type: "button";
  value: string;
  color?: "attention" | "warning" | "success";
}

export const Button01 = styled.input<ButtonsProps>`
  background-color: ${(props) => {
    switch (props.color) {
      case "attention":
        return "#ff0";
      case "warning":
        return "#f00";
      case "success":
        return "#0f0";
      default:
        return "#fff";
    }
  }};
  border: solid black 1px;
  border-radius: 4px;
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.height || "20px"};
  &:hover {
    cursor: pointer;
    border: solid #444 1px;
    color: #444;
  }
`;
