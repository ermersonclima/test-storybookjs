import styled from "styled-components";

interface BoxesProps {
  color?: string;
  width?: string;
  height?: string;
  curve?: boolean;
  align: "center" | "right" | "left";
}

export const Box01 = styled.div<BoxesProps>`
  transition: 400ms;
  display: block;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em;
  border: 1px solid ${(props) => props.color || "#000"};
  border-radius: ${(props) => (props.curve ? "10px" : "0px")};
  width: ${(props) => props.width || "400px"};
  height: ${(props) => props.height || "400px"};
  text-align: ${(props) => {
    switch (props.align) {
      case "center":
        return "center";
      case "right":
        return "right";
      case "left":
        return "left";
    }
  }};
  ${(props) => (props.align === "center" ? "margin: auto" : null)}
`;

export const Box02 = styled.input<Partial<BoxesProps>>`
  margin-right: 8px;
  margin-left: 8px;
`;
