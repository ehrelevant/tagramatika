import styled from 'styled-components';

import Button from './Button';

import { Rating } from '@mui/material';

import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { Star } from '@mui/icons-material';

function CorrectionsPanel({ posX, posY, correctionDetails, onAccept, onReject }) {
  return (
    <CorrectionsPanelWrapper posX={posX} posY={posY} id="correction_panel">
      <div className="correction-div-group correction-main">
        <p className="mistake-text">{correctionDetails.mistake}</p>
        <EastRoundedIcon />
        <p>{correctionDetails.correction}</p>
      </div>
      <div className="correction-div-group correction-description">
        <p><u className="correction-reason">{correctionDetails.reason}</u>: {correctionDetails.description}</p>
      </div>
      <div className="correction-div-group correction-buttons">
        <Button className="correction-button accept-button" buttonText="Tanggapin" onButtonClicked={onAccept} />
        <Button className="correction-button reject-button" buttonText="Tanggihan" onButtonClicked={onReject} />
        <Rating
          icon={<Star style={{ color: '#fff' }}fontSize="inherit" />}
          emptyIcon={<Star fontSize="inherit" />}
        />
      </div>
    </CorrectionsPanelWrapper>
  );
}

export default CorrectionsPanel;

const CorrectionsPanelWrapper = styled.div`
  position: absolute;
  top: ${({ posY }) => posY}px;
  left: ${({ posX }) => posX}px;
  z-index: 1;

  border: 3px solid ${({ theme }) => theme.border};
  border-radius: 20px;

  background: ${({ theme }) => theme.correctionsPanelBg};
  backdrop-filter: blur(20px);

  min-width: 300px;
  max-width: 30%;
  padding: 10px;
  gap: 15px;

  display: flex;
  flex-direction: column;

  font-size: 1.2rem;

  transition: 100ms ease-in-out;

  .correction-div-group {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 10px;

    p {
      text-align: left;
      line-height: 1.4rem;
    }
  }

  .mistake-text {
    color: ${({ theme }) => theme.mistakeText};
    text-decoration: underline;
  }

  .correction-description .correction-reason {
    text-decoration: underline;
    font-style: italic;
  }

  .correction-buttons {
    flex-wrap: wrap;

    .correction-button {
      max-width: 200px;
      font-size: 1.4rem;
      height: 60px;
    }

    .accept-button {
      background: ${({ theme }) => theme.acceptBg};
    }

    .reject-button {
      background: ${({ theme }) => theme.rejectBg};
    }
  }
`;