import styled from 'styled-components';

function InfoBox({ id, className, infoText, multilineInfoText, onInfoBoxClicked }) {
  return (
    <InfoBoxWrapper id={id} className={className} onClick={onInfoBoxClicked}>
      <div className="inner-info-box">
        <p className="info-text">
          {(multilineInfoText)
          ? multilineInfoText.map((line) => {
              return <>{line}<br/></>;
            })
          : infoText
          }
        </p>
      </div>
    </InfoBoxWrapper>
  );
}

export default InfoBox;

const InfoBoxWrapper = styled.div`
  color: ${({ theme }) => theme.text};

  // Defaults before applying new styles
  background-color: ${({ theme }) => theme.textInputBgActive};
  // background-color: ${({ theme }) => theme.textInputBgInactive};

  border: ${({ theme }) => theme.border};
  padding: 20px;

  border: 2px solid ${({ theme }) => theme.border};;
  border-radius: 20px;
  width: 100%;
  height: 100%;

  .inner-info-box {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
`;