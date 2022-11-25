import styled from 'styled-components';

function App() {
  return (
    <AppWrapper className="App">
      <h1>Hello World!</h1>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  min-height: 100vh;
  text-align: center;
`;