import classes from "./List.module.scss";

const List: React.FC = ({ children }) => <ul className={classes.list}>{children}</ul>;

export default List;
