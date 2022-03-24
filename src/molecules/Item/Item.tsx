import Avatar from "../../atoms/Avatar";
import Card from "../../atoms/Card";
import { Percent } from "../../atoms/NumberFormat/";
import Text from "../../atoms/Text";
import Badge from "../Badge";
import classes from "./Item.module.scss";

interface IProps {
  Component?: keyof JSX.IntrinsicElements;
  thumb?: string;
  label?: string;
  value?: number;
}

const Item: React.FC<IProps> = ({ children, Component = "li", thumb = "/user.svg", value = 1, label }) => (
  <Card className={classes.item} Component={Component}>
    {
      [
        <>
          <Avatar size={32} src={thumb} />
          <Text variant="text">{label}</Text>
          <Badge color={Math.sign(value) === 1 ? "secondary" : "danger"}>
            <Percent>{value}</Percent>
          </Badge>
        </>,
        children,
      ][Number(Boolean(children))]
    }
  </Card>
);

export default Object.assign(Item, {
  Avatar,
  Text,
  Badge,
  Card,
});
