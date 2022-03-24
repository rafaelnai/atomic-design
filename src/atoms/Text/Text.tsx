import classes from "./Text.module.scss";

interface IProps {
  Component?: keyof JSX.IntrinsicElements;
  variant?: "text" | "title" | "subtitle";
  align?: "center" | "start" | "end";
  fontWeight?: "bold" | "normal";
}

const Text: React.FC<IProps> = ({
  Component = "p",
  variant = "text",
  align = "start",
  children,
  fontWeight = "normal",
}) => (
  <Component className={[classes.typography, classes[align], classes[variant], classes[fontWeight]].join(" ")}>
    {children}
  </Component>
);

export default Text;
