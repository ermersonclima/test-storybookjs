import { ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button01 } from "../styled-components/buttons";
import { Box01, Box02 } from "../styled-components/boxes";

interface SearchBarProps {
  value: string;
  action: (key: any) => void;
  change: (key: any) => any;
}

const SearchBar = (props: SearchBarProps): ReactElement => {
  const { name } = useSelector((state: any) => state.pokemon_name);
  const dispatch = useDispatch();
  const handle = (e: any) => dispatch(props.change(e.target.value))
  return (
    <Box01 align="left" width="75%" height="20px">
      <Box02 type="text" onChange={handle} value={name} />
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
