import styled from 'styled-components';

import { useEffect, useState } from 'react';

import InfoBox from './InfoBox';


function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    w: undefined,
    h: undefined,
  });

  useEffect(()=>{
    const handleChangeSize = () => {
      setWindowSize({
        w: window.innerWidth,
        h: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleChangeSize);
    handleChangeSize();
    return () => {
      window.removeEventListener('resize', handleChangeSize)
    };
  }, []);

  return windowSize;
}

function TutorialOverlay({ tutorialPage, setTutorialPage }) {
  const windowSize = useWindowSize();
  const [pos1, setPos1] = useState({x: -1.0, y: -1.0});
  const [pos2, setPos2] = useState({x: -1.0, y: -1.0});

  useEffect(() => {
    const textInputOuter = document.querySelector("#text_input_outer");

    const rect1 = textInputOuter.getBoundingClientRect();

    setPos1({
      x: (rect1.left * 0.9) + window.scrollX,
      y: (rect1.bottom * 1.01) + window.scrollY,
    });

    const suriinButton = document.querySelector("#suriin_button");

    const rect2 = suriinButton.getBoundingClientRect();

    setPos2({
      x: (rect2.left * 0.95) + window.scrollX,
      y: (windowSize.h - (rect2.top)) * 1.05 - window.scrollY,
    });
  }, [windowSize]);

  const continueTutorial = () => {
    if (tutorialPage + 1 > 1) {
      setTutorialPage(-1)
    } else {
      setTutorialPage(tutorialPage + 1);
    }
  }

  return (
    <TutorialOverlayWrapper pos1={pos1} pos2={pos2} onClick={continueTutorial}>
      {(tutorialPage === 0)
      ? <InfoBox className="tutorial-box box-1" infoText="Dito sa loob ng text box na ito ilalagay ang (mga) pangungusap na nais mong suriin ang gramatika."/>
      : <InfoBox id="tutorial_box_2" className="tutorial-box box-2" infoText="Matapos na mailagay ang (mga) pangungusap sa loob ng text box, pindutin lamang ang “Suriin” nang mabasa ni TaGramatika ang nilalaman nito."/>
      }
    </TutorialOverlayWrapper>
  );
}

export default TutorialOverlay;

const TutorialOverlayWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;

  background-color: rgba(19, 18, 18, 0.55);

  .tutorial-box {
    position: absolute;
    z-index: 12;

    text-align: left;
    overflow-wrap: break-word;
    line-height: 1.2em;

    font-size: 1.2rem;

    width: 40%;
    max-width: 500px;
    height: auto;
    max-height: 400px;

    overflow-y: hidden;

    .inner-info-box {
      overflow-y: auto;
    }
  }

  .box-1 {
    left: ${({ pos1 }) => pos1.x}px;
    top: ${({ pos1 }) => pos1.y}px;
  }

  .box-2 {
    left: ${({ pos2 }) => pos2.x}px;
    bottom: ${({ pos2 }) => pos2.y}px;
  }
`;