import styled from 'styled-components';
import TextInput from './components/TextInput';

function App() {
  return (
    <AppWrapper className="App">
      <div className="header-text">
        <h1 className="logo-text">TaGramatika</h1>
        <h2 className="sub-logo-text">"Gumamit ng tamang gramatika, gamit ang TaGramatika!"</h2>
      </div>
      <TextInput />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;

  color: ${({ theme }) => theme.light.text};
  background-color: ${({ theme }) => theme.light.bgColor};
  background-image: url( ${({ theme }) => theme.light.bgImage} );
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  .header-text {
    color: #FFF;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo-text {
      -webkit-text-stroke: 2px #000;
      font-size: 7rem;
      line-height: 7.5rem;

      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    }

    .sub-logo-text {
      font-size: 2.4rem;
      line-height: 2.6rem;
      text-shadow: 0px 4px 12px #000;
    }
  }
`;