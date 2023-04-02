import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const ModeSwitch = () => {
  return (
    <div>
      <Switch {...label} />
    </div>
  );
};

export default ModeSwitch;
