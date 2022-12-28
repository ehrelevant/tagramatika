import styled from 'styled-components';

import Button from './Button';
import { Switch, Stack, Slider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function SettingsPanel() {
  return (
    <SettingsPanelWrapper>
      <button className="exit-button"><CloseRoundedIcon /></button>
      <div className="dark-mode-toggle settings-option">
        <div className="settings-option-label">
          <p>Dark Mode</p>
        </div>
        <Switch />
      </div>
      <div className="font-size-slider settings-option">
        <div className="settings-option-label">
          <p>Font Size</p>
        </div>
        <Stack spacing={2} direction="row" alignItems="center">
          <RemoveIcon />
          <Slider aria-label="Font Size" min={0.8} max={2.4} defaultValue={1.6} step={0.05} />
          <AddIcon />
        </Stack>
      </div>
      <Button className="settings-option-button" buttonText="Tungkol sa TaGramatika" />
      <Button className="settings-option-button" buttonText="Tutoryal" />
    </SettingsPanelWrapper>
  );
}

export default SettingsPanel;

const SettingsPanelWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 400px;
  width: 25%;
  height: 360px;

  border: 3px solid #000;
  border-radius: 20px;
  background: rgba(183, 204, 223, 0.4);
  backdrop-filter: blur(20px);

  box-sizing: border-box;
  padding: 20px;
  padding-top: 80px;

  .exit-button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;

    background: none;
    border: none;
    outline: none;
    padding: 0;

    cursor: pointer;

    border: 3px solid black;
    border-radius: 50%;
    height: 60px;
    width: 60px;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  .dark-mode-toggle {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .font-size-slider {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
  }

  .settings-option {
    font-size: 1.4rem;

    .settings-option-label {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .settings-option-button {
    font-size: 1.6rem;
    height: 60px;
  }
`;