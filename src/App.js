import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import { lightTheme, darkTheme }from './theme/theme';

import { useState } from 'react';

import TextInput from './components/TextInput';

import Button from './components/Button';
import SettingsPanel from './components/SettingsPanel';
import CorrectionsPanel from './components/CorrectionsPanel';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { checkForExamples } from './modules/checks';

function App() {
  const [ state, setState ] = useState({
    darkModeEnabled: false,
    settingsPanelOpen: false,
    textInputContent: '',
    initialTextInputHtml: '',
    textInputHtml: '',
    textInputActive: false,
    fontSizeValue: 1.6,

    hasCorrections: false,
    correctionCount: 0,
    corrections: [{
      mistake: '',
      correction: '',
      reason: '',
      description: '',
    }],
    correctedText: '',

    /*
    Note: For this project demo, there will only be one correction per example.
    This is done to save time and resources as well as to reduce the difficulty of implementation.
    As such, we can just use a single object to represent the correction state.
    For implementing multiple corrections, it would have to be an array of correction objects and
    each corresponding correction panel and uncorrected text will need to have a variable 
    attached indicating its id.
     */
  });

  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [correctionClickPos, setCorrectionsClickPos] = useState({
    x: -1,
    y: -1,
  });

  const toggleSettingsPanel = () => {
    setState({
      settingsPanelOpen: !state.settingsPanelOpen,
      darkModeEnabled: state.darkModeEnabled,
      textInputContent: state.textInputContent,
      initialTextInputHtml: state.initialTextInputHtml,
      textInputHtml: state.textInputHtml,
      textInputActive: state.textInputActive,
      fontSizeValue: state.fontSizeValue,

      hasCorrections: state.hasCorrections,
      correctionCount: state.correctionCount,
      corrections: state.corrections,
      correctedText: state.correctedText,
    });
  };

  const toggleDarkMode = (event) => {
    setState({
      settingsPanelOpen: state.settingsPanelOpen,
      darkModeEnabled: event.target.checked,
      textInputContent: state.textInputContent,
      initialTextInputHtml: state.initialTextInputHtml,
      textInputHtml: state.textInputHtml,
      textInputActive: state.textInputActive,
      fontSizeValue: state.fontSizeValue,

      hasCorrections: state.hasCorrections,
      correctionCount: state.correctionCount,
      corrections: state.corrections,
      correctedText: state.correctedText,
    });
  };

  const onTextInputChange = (event) => {
    if (!state.hasCorrections) {
      const newTextInputContent = event.target.textContent;
      const newTextInputHtml = event.target.innerHTML;

      setState({
        settingsPanelOpen: state.settingsPanelOpen,
        darkModeEnabled: state.darkModeEnabled,
        textInputContent: newTextInputContent,
        initialTextInputHtml: newTextInputHtml,
        textInputHtml: newTextInputHtml,
        textInputActive: (!!newTextInputContent),
        fontSizeValue: state.fontSizeValue,

        hasCorrections: state.hasCorrections,
        correctionCount: state.correctionCount,
        corrections: state.corrections,
        correctedText: state.correctedText,
      });
    } else {
      const textInputArea = document.querySelector("#text_input_area");
      textInputArea.innerHTML = state.initialTextInputHtml;

      setState({
        settingsPanelOpen: state.settingsPanelOpen,
        darkModeEnabled: state.darkModeEnabled,
        textInputContent: state.textInputContent,
        initialTextInputHtml: state.initialTextInputHtml,
        textInputHtml: state.initialTextInputHtml,
        textInputActive: state.textInputActive,
        fontSizeValue: state.fontSizeValue,

        hasCorrections: false,
        correctionCount: -1,
        corrections: [{
          mistake: '',
          correction: '',
          reason: '',
          description: '',
        }],
        correctedText: '',
      });

      setCorrectionsClickPos({
        x: -1,
        y: -1,
      });

      setVisibleIndex(-1);
    }
  };

  const onSliderChange = (event) => {
    setState({
      settingsPanelOpen: state.settingsPanelOpen,
      darkModeEnabled: event.target.checked,
      textInputContent: state.textInputContent,
      initialTextInputHtml: state.initialTextInputHtml,
      textInputHtml: state.textInputHtml,
      textInputActive: state.textInputActive,
      fontSizeValue: event.target.value,

      hasCorrections: state.hasCorrections,
      correctionCount: state.correctionCount,
      corrections: state.corrections,
      correctedText: state.correctedText,
    });
  }

  const applyTextboxExample = (example) => {
    const textInputArea = document.querySelector("#text_input_area");

    textInputArea.innerHTML = example.uncorrectedHtml;

    setState({
      settingsPanelOpen: state.settingsPanelOpen,
      darkModeEnabled: state.darkModeEnabled,
      textInputContent: state.textInputContent,
      initialTextInputHtml: state.initialTextInputHtml,
      textInputHtml: example.uncorrectedHtml,
      textInputActive: state.textInputActive,
      fontSizeValue: state.fontSizeValue,

      hasCorrections: true,
      correctionCount: 1,
      corrections: [example.details],
      correctedText: example.corrected,
    });

    const uncorrectedText = document.querySelector("#uncorrected_text");
    uncorrectedText.addEventListener('click', (event) => {
      setCorrectionsClickPos({
        x: event.clientX,
        y: event.clientY,
      });

      setVisibleIndex(0);
    });
  }

  const onSuriinClicked = () => {
    checkForExamples(state.textInputContent, applyTextboxExample);
  }

  const checkClickOusideCorrection = (event) => {
    if (visibleIndex !== -1) {
      const correctionPanel = document.querySelector("#correction_panel");
      const uncorrectedText = document.querySelector("#uncorrected_text");

      const isClickInside = correctionPanel.contains(event.target) || uncorrectedText.contains(event.target);

      if (!isClickInside) {
        setVisibleIndex(-1);
      }
    }
  }

  const onAcceptCorrection = () => {
    const textInputArea = document.querySelector("#text_input_area");

    textInputArea.textContent = state.correctedText;
    const correctedTextHtml = textInputArea.innerHTML;

    setState({
      settingsPanelOpen: state.settingsPanelOpen,
      darkModeEnabled: state.darkModeEnabled,
      textInputContent: state.correctedText,
      initialTextInputHtml: correctedTextHtml,
      textInputHtml: correctedTextHtml,
      textInputActive: state.textInputActive,
      fontSizeValue: state.fontSizeValue,

      hasCorrections: false,
      correctionCount: 0,
      corrections: [{
        mistake: '',
        correction: '',
        reason: '',
        description: '',
      }],
      correctedText: '',
    });

    setCorrectionsClickPos({
      x: -1,
      y: -1,
    });

    setVisibleIndex(-1);
  }

  const onRejectCorrection = () => {
    const textInputArea = document.querySelector("#text_input_area");
    textInputArea.innerHTML = state.initialTextInputHtml;

    setState({
      settingsPanelOpen: state.settingsPanelOpen,
      darkModeEnabled: state.darkModeEnabled,
      textInputContent: state.textInputContent,
      initialTextInputHtml: state.initialTextInputHtml,
      textInputHtml: state.initialTextInputHtml,
      textInputActive: state.textInputActive,
      fontSizeValue: state.fontSizeValue,

      hasCorrections: false,
      correctionCount: -1,
      corrections: [{
        mistake: '',
        correction: '',
        reason: '',
        description: '',
      }],
      correctedText: '',
    });

    setCorrectionsClickPos({
      x: -1,
      y: -1,
    });

    setVisibleIndex(-1);
  }

  return (
    <ThemeProvider theme={(state.darkModeEnabled) ? (darkTheme) : (lightTheme)}>
      <GlobalStyle />
      <AppWrapper className="App" textInputActive={state.textInputActive} onClick={checkClickOusideCorrection}>
        {((state.settingsPanelOpen)
          ? (<SettingsPanel toggleSettingsPanel={toggleSettingsPanel} toggleDarkMode={toggleDarkMode} onSliderChange={onSliderChange} fontSizeValue={state.fontSizeValue} />)
          : (<button className="settings-button" onClick={toggleSettingsPanel}><SettingsRoundedIcon /></button>))}

        <div className="header-text">
          <h1 className="logo-text">TaGramatika</h1>
          <h2 className="sub-logo-text">"Gumamit ng tamang gramatika, gamit ang TaGramatika!"</h2>
        </div>
        <TextInput onTextInputChange={onTextInputChange} textInputActive={state.textInputActive} fontSizeValue={state.fontSizeValue}/>

        {(visibleIndex !== -1)
        ? <CorrectionsPanel
          posX={correctionClickPos.x}
          posY={correctionClickPos.y}
          correctionDetails={state.corrections[visibleIndex]}
          onAccept={onAcceptCorrection}
          onReject={onRejectCorrection}
        />
        : <></>}

        <div className="buttons-group">
          <Button buttonText="Suriin" className="suriin-button" onButtonClicked={onSuriinClicked} />
          <Button
            buttonText={(state.correctionCount > 0) ? `${state.correctionCount} pagkakamali` : "—"}
            className={(state.correctionCount > 0) ? "error-count-button use-mistake-color" : "error-count-button"}
          />
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
  background-position: center bottom;

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

      background-color: ${({ textInputActive, theme }) => (
        (textInputActive) ? (theme.textInputBgActive) : (theme.textInputBgInactive)
      )};

      transition: 100ms ease-in-out;
    }

    .error-count-button {
      font-size: 1.6rem;
      height: 40px;

      background-color: ${({ textInputActive, theme }) => (
        (textInputActive) ? (theme.textInputBgActive) : (theme.textInputBgInactive)
      )};

      transition: 100ms ease-in-out;
    }

    .use-mistake-color {
      color: ${({ theme }) => theme.mistakeText};
    }
  }
`;