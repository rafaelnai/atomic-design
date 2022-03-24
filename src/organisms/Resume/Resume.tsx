import Card from "../../atoms/Card";
import Text from "../../atoms/Text";
import { Currency, Percent } from "../../atoms/NumberFormat/";
import classes from "./Resume.module.scss";

interface IProps {
  total?: number;
  rent?: number;
  rate?: number;
}

const Rate: React.FC<Pick<IProps, "rate">> = ({ rate }) => (
  <div>
    <Text variant="text">Variação de hoje</Text>
    <Text variant="subtitle">
      <Currency>{rate}</Currency>
    </Text>
  </div>
);

const Rent: React.FC<Pick<IProps, "rent">> = ({ rent }) => (
  <div>
    <Text variant="text">Rentabilidade</Text>
    <Text variant="subtitle">
      <Percent>{rent}</Percent>
    </Text>
  </div>
);

const Total: React.FC<Pick<IProps, "total">> = ({ total }) => (
  <div>
    <Text variant="text">Total</Text>
    <Text fontWeight="bold" variant="title">
      <Currency>{total}</Currency>
    </Text>
  </div>
);

const Row: React.FC = ({ children }) => <div className={classes.flex}>{children}</div>;

const Resume: React.FC<IProps> = ({ children, rate = 0, rent = 0, total = 0 }) => (
  <Card className={classes.wrapper}>
    {Boolean(children) ? (
      children
    ) : (
      <div>
        <Total total={total} />
        <Row>
          <Rate rate={rate} />
          <Rent rent={rent} />
        </Row>
      </div>
    )}
  </Card>
);

export default Object.assign(Resume, {
  Text,
  Rent,
  Rate,
  Total,
  Row,
});
