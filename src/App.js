import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import { lightTheme, darkTheme }from './theme/theme';

import { useState } from 'react';

import TextInput from './components/TextInput';

import Button from './components/Button';
import SettingsPanel from './components/SettingsPanel';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function App() {
  const [ state, setState ] = useState({
    darkModeEnabled: false,
    settingsPanelOpen: false,
  });

  const toggleSettingsPanel = () => {
    setState({
      settingsPanelOpen: !state.settingsPanelOpen,
      darkModeEnabled: state.darkModeEnabled,
    });
  };

  const toggleDarkMode = (event) => {
    setState({
      settingsPanelOpen: state.settingsPanelOpen,
      darkModeEnabled: event.target.checked,
    });
  };

  return (
    <ThemeProvider theme={(state.darkModeEnabled) ? (darkTheme) : (lightTheme)}>
      <GlobalStyle />
      <AppWrapper className="App">
        {((state.settingsPanelOpen)
          ? (<SettingsPanel toggleSettingsPanel={toggleSettingsPanel} toggleDarkMode={toggleDarkMode} />)
          : (<button className="settings-button" onClick={toggleSettingsPanel}><SettingsRoundedIcon /></button>))}

        <div className="header-text">
          <h1 className="logo-text">TaGramatika</h1>
          <h2 className="sub-logo-text">"Gumamit ng tamang gramatika, gamit ang TaGramatika!"</h2>
        </div>
        <TextInput />
        <div className="buttons-group">
          <Button buttonText="Suriin" className="suriin-button" />
          <Button buttonText="—" className="error-count-button" />
        </div>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgColor};
  background-image: url( ${({ theme }) => theme.bgImage} );
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .settings-button {
    background: none;
    border: none;
    outline: none;
    padding: 0;

    cursor: pointer;

    height: 100px;
    width: 100px;

    position: absolute;
    top: 20px;
    right: 20px;

    svg {
      height: 100%;
      width: 100%;
      color: ${({ theme }) => theme.settingsIcon};
    }
  }

  .header-text {
    color: ${({ theme }) => theme.headerText};

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

  .buttons-group {
    min-width: 300px;
    width: 16%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    .suriin-button {
      font-size: 1.6rem;
      height: 80px;

      background-color: ${({ theme }) => theme.textInputBgActive};
      // background: ${({ theme }) => theme.textInputBgInactive};;
    }

    .error-count-button {
      font-size: 1.6rem;
      height: 40px;

      background-color: ${({ theme }) => theme.textInputBgActive};
      // background: ${({ theme }) => theme.textInputBgInactive};;
    }
  }
`;