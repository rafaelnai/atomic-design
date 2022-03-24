import NumberFormat from ".";

interface IProps {
  currency?: string;
}

const Currency: React.FC<IProps> = ({ children, currency = "BRL" }) => (
  <NumberFormat options={{ style: "currency", currency }}>{Number(children)}</NumberFormat>
);

export default Currency;
