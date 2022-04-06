import { ReactElement, useState, useEffect } from "react";
import { Chip01 } from "../styled-components/chips";

interface TransformCaseChipProps {
  color?: string;
  label?: string;
}

const TransformCaseChip = (props: TransformCaseChipProps): ReactElement => {
  const [text, setText] = useState<string | undefined>(props?.label);

  useEffect(() => {
    setText(props.label);
  }, [props.label]);

  const toLowerCase = (): void => {
    setText(text?.toLowerCase());
  };
  const toUpperCase = (): void => {
    setText(text?.toUpperCase());
  };

  return (
    <Chip01
      color={props?.color}
      onClick={toLowerCase}
      onDoubleClick={toUpperCase}
    >
      {text}
    </Chip01>
  );
};

export default TransformCaseChip;
