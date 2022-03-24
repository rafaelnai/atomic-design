import classes from "./Container.module.scss";

interface IProps {
  Component?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, Component = "div", className }) => (
  <Component className={[classes.container, className].join(" ")}>{children}</Component>
);

export default Container;
