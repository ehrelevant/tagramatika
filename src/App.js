import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import { lightTheme, darkTheme }from './theme/theme';

import { useState } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
  const [fontSizeValue, setFontSizeValue] = useState(1.6);

  const toggleDarkMode = (event) => {
    setDarkModeEnabled(event.target.checked);
  };

  const onSliderChange = (event) => {
    setFontSizeValue(event.target.value);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage toggleDarkMode={toggleDarkMode} fontSizeValue={fontSizeValue} onSliderChange={onSliderChange}/>,
    },
    {
      path: "about",
      element: <AboutPage fontSizeValue={fontSizeValue} />,
    },
  ])

  return (
    <ThemeProvider theme={(isDarkModeEnabled) ? (darkTheme) : (lightTheme)}>
      <GlobalStyle />
      <AppWrapper>
        <RouterProvider router={router} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.bgColor};
  background-image: url( ${({ theme }) => theme.bgImage} );
  background-size: cover;
  background-position: center bottom;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;