import Avatar from "../../atoms/Avatar";
import Card from "../../atoms/Card";
import Text from "../../atoms/Text";
import classes from "./UserInfo.module.scss";

interface IProps {
  name?: string;
  avatar?: string;
}

const UserInfo: React.FC<IProps> = ({ children, avatar = "", name }) => (
  <Card className={classes.userInfo}>
    {Boolean(children) ? (
      children
    ) : (
      <>
        <Avatar src={avatar} size={64} />
        <Text variant="subtitle">{name}</Text>
      </>
    )}
  </Card>
);

export default Object.assign(UserInfo, {
  Avatar,
  Text,
  Wrapper: Card,
});
