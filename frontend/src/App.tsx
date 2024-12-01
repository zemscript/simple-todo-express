import styled from "styled-components";
import TodoList from "./components/TodoList";

function App() {
  return (
    <MainSection>
      <Content>
        <TodoList></TodoList>
      </Content>
    </MainSection>
  );
}

export default App;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;
