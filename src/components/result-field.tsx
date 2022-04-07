import { ReactElement } from "react";
import { Box01 } from "../styled-components/boxes";

interface ResultFieldProps {
  children?: ReactElement | null;
}

const ResultField = (props: ResultFieldProps): ReactElement => {
  return (
    <Box01 width="50%" height="50%" align="left" curve>
      {props.children}
    </Box01>
  );
};

export default ResultField;
