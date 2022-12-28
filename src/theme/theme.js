import lightImage from '../assets/images/bg-light.jpg';
import darkImage from '../assets/images/bg-dark.jpg';


const lightTheme = {
  text: '#000',
  headerText: '#FFF',
  bgColor: '#FFF',
  bgImage: lightImage,
  border: '#000',

  settingsIcon: '#2F4369',
  generalIcon: '#000',

  textInputBgActive: '#F0F0F0',
  textInputBgInactive: 'rgba(240, 240, 240, 0.5)',

  settingsPanelBg: 'rgba(183, 204, 223, 0.4)',
};

const darkTheme = {
  text: '#FFF',
  headerText: '#EEE',
  bgColor: '#000',
  bgImage: darkImage,
  border: '#FFF',

  settingsIcon: '#FFF',
  generalIcon: '#FFF',

  textInputBgActive: '#0D162C',
  textInputBgInactive: 'rgba(6, 29, 44, 0.5)',

  settingsPanelBg: 'rgba(17, 27, 48, 0.85)',
}

export { lightTheme, darkTheme };