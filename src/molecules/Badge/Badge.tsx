import Chip from "../../atoms/Chip";
import Text from "../../atoms/Text";

interface IProps extends React.ComponentProps<typeof Chip> {
  label?: string;
}

const Badge: React.FC<IProps> = ({ label, color, children }) => (
  <Chip color={color}>{Boolean(children) ? children : <Text Component="span">{label}</Text>}</Chip>
);

export default Object.assign(Badge, { Chip, Text });
