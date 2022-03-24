import Container from "./atoms/Container";
import Resume from "./organisms/Resume";

const App: React.FC = () => {
  return (
    <Container Component="section">
      <Resume rate={10} rent={100} total={150000} />

      <footer>
        <Resume.Total total={150000} />
      </footer>
    </Container>
  );
};

export default App;
