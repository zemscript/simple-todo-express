import styled from "styled-components";

function App() {
  return (
    <MainSection>
      <Content></Content>
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
