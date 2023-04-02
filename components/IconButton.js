import { Button } from "@mui/material";

const IconButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default IconButton;
