import styled from 'styled-components';

import { Link } from "react-router-dom";

import InfoBox from '../components/InfoBox';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function AboutPage({ fontSizeValue }) {
  const description = [
    'Ang TaGramatika ay isang web-based na application na gumagamit ng machine learning sa pagsusuri ng gramatika ng mga pangungusap o talatang nakasulat sa Tagalog, ayon sa mga panuntunan sa gramatika. Sa tuloy-tuloy na paggamit nito, patuloy nitong pinabubuti ang mga pagsusuri ayon sa mga tugon at komento ng mga gumagamit nito.',
    '',
    'Maaaring makatulong ang TaGramatika sa mga lokal o dayuhang mag-aaral na nais pag-aralan ang wikang Filipino sa pamamagitan ng pagtuturo sa mga pagkakamali sa kanilang mga pangungusap at kung paano ayusin ang mga ito. Maliban dito, maaari ring makatulong ang TaGramatika bilang sekondaryong sanggunian sa pagdouble-check sa mga sanaysay ng mga bihasa na sa Filipino. Kaugnay rito, magagamit din ang TaGramatika nang maunawaan nang mabuti ang mga pormal na sulatin at pahayag, kung saan lalong mahalaga ang presentasyon ng mensahe nito.',
    '',
    'Layunin ng TaGramatika na lalong mahikayat ang mga tao upang mas gamitin ang wikang Tagalog sa pagsilbi nito bilang sanggunian sa maayos na gramatika.',
  ];

  return (
    <AboutPageWrapper fontSizeValue={fontSizeValue}>
      <Link to="/" className="home-button"><HomeRoundedIcon /></Link>
      <div className="header-text">
        <h1 className="logo-text">TaGramatika</h1>
        <h2 className="sub-logo-text">"Gumamit ng tamang gramatika, gamit ang TaGramatika!"</h2>
      </div>

      <InfoBox className="about-box" multilineInfoText={description} />
    </AboutPageWrapper>
  );
}

export default AboutPage;

const AboutPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  color: ${({ theme }) => theme.text};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  .home-button {
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

  .about-box {
    text-align: justify;
    overflow-wrap: break-word;
    line-height: 1.2em;

    font-size: ${({ fontSizeValue }) => fontSizeValue}rem;

    width: 80%;
    height: auto;
    max-height: 400px;
    margin: 10px 0;

    overflow-y: hidden;

    .inner-info-box {
      overflow-y: scroll;
    }
  }
`;