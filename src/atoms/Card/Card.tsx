import classes from "./Card.module.scss";

interface IProps {
  spacing?: "sm" | "md" | "lg" | "none";
  Component?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Card: React.FC<IProps> = ({ children, Component = "div", className, spacing = "md" }) => (
  <Component className={[classes.card, classes[spacing], className].join(" ")}>{children}</Component>
);

export default Card;
