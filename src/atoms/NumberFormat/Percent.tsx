import NumberFormat from ".";

const Percent: React.FC = ({ children }) => (
  <NumberFormat options={{ style: "percent" }}>{Number(children) / 100}</NumberFormat>
);

export default Percent;
