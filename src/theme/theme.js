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

  correctionsPanelBg: 'rgba(180, 206, 229, 0.75)',

  mistakeText: '#FF0000',
  acceptBg: 'rgba(183, 223, 185, 0.6)',
  rejectBg: 'rgba(223, 185, 183, 0.6)',
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

  correctionsPanelBg: 'rgba(43, 72, 98, 0.4)',

  mistakeText: '#FB5757',
  acceptBg: 'rgba(12, 182, 100, 0.75)',
  rejectBg: 'rgba(251, 87, 87, 0.75)',
}

export { lightTheme, darkTheme };