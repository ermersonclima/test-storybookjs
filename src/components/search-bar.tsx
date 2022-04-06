import { ReactElement } from "react";
import { Button01 } from "../styled-components/buttons";
import { Box01, Box02 } from "../styled-components/boxes";

interface SearchBarProps {
  value: string;
  action: (key: any) => void;
}

const SearchBar = (props: SearchBarProps): ReactElement => {
  return (
    <Box01 align="left" width="75%" height="20px">
      <Box02 type="text" />
      <Button01
        type="button"
        color="success"
        value={props.value}
        onClick={props.action}
      />
    </Box01>
  );
};

export default SearchBar;
