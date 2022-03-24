import classes from "./Chip.module.scss";

interface IProps {
  color?: "primary" | "secondary" | "default" | "danger";
}

const Chip: React.FC<IProps> = ({ color = "default", children }) => (
  <div className={[classes[color], classes.chip].join(" ")}>{children}</div>
);

export default Chip;
