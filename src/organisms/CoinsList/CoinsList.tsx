import ListWrapper from "../../atoms/List";
import Item from "../../molecules/Item";

interface IProps {
  items?: React.ComponentProps<typeof Item>[];
}

const CoinsList: React.FC<IProps> = ({ children, items = [] }) => (
  <ListWrapper>
    {Boolean(children) ? (
      children
    ) : (
      <>
        {items.map(({ label, thumb, value }) => (
          <Item label={label} thumb={thumb} value={value} />
        ))}
      </>
    )}
  </ListWrapper>
);

export default Object.assign(CoinsList, {
  Item,
  Wrapper: ListWrapper,
});
