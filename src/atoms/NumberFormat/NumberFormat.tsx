interface IProps {
  options?: Intl.NumberFormatOptions;
}

const NumberFormat: React.FC<IProps> = ({ children, options }) => {
  const formatter = new Intl.NumberFormat("pt-BR", options);
  const value = Number(children);

  if (Number.isNaN(value)) {
    return <>Valor inválido</>;
  }

  return <>{formatter.format(value)}</>;
};

export default NumberFormat;
