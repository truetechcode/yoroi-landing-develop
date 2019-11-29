import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import { Container, ContainerGrey, Overflow, SectionTitle } from './../css';
import Collaborators from './Collaborators';
import Blog from "./Blog";
import Contact from "./Contact";
import AboutComponent from "./About";

const MainTitle = styled.div`
  @media (max-width: 700px) {
    font-size: 40px;	
    font-weight: bold;	
    line-height: 60px;
    letter-spacing: 1px;
    margin-left: 50px;
  }

  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 62px;	
  font-weight: bold;	
  line-height: 72px;
  letter-spacing: 2px;
`;

const SubTitle = styled.div`
  @media (max-width: 700px) {
    font-size: 10px;	
    line-height: 20px;
    letter-spacing: 1px;
    margin-left: 50px;
  }

  height: 24px;	
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 20px;	
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubSubTitle = styled.div`
  @media (max-width: 700px) {
    font-size: 10px;	
    line-height: 20px;
    letter-spacing: 1px;
    margin-left: 50px;
  }

  font-size: 20px;
  color: white;
  font-weight: 300;
  margin-top: 6px;
  display: flex;
  align-items: center;
`;

const MainText = styled.div`
  flex: 1;
`;

const MainImage = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

const MainButtons = styled.div`
  display: flex;
  @media (min-width: 700px) {
    flex-direction: row;
    max-width: 410px;
    margin-top: 60px;
  }
  @media (max-width: 700px) {
    margin-top: 40px;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100px;
  }

  align-items: center;
  justify-content: center;
  a{
    text-decoration: none;
  }
  a:visited {
    color: white;
  }

  a:link {
    color: white;
  }
`;

const LearnButton = styled.div`
  @media (min-width: 700px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 210px;
  }
  box-sizing: border-box;
  height: 48px;
  width: 216px;
  border: 2px solid #FFFFFF;
  border-radius: 2px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);

  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding-left: 8px;
  padding-right: 8px;

  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  
  transition: all .2s;
  &:hover {
    background: rgba(23, 209, 170, .8);
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  }
`;

const LearnButtonText = styled.div`
  text-transform: uppercase;
  height: 17px;	
  width: 108px;	
  color: #FFFFFF;	
  font-family: Rubik;	
  font-size: 14px;	
  font-weight: 500;	
  letter-spacing: 1.87px;	
  line-height: 17px;	
  text-align: center;  
`;

const WatchVideo = styled.div`
  @media (min-width: 700px) {
    flex: 1;
  }
  @media (max-width: 700px) {
    width: 190x;
    margin-top: 16px;
  }
  box-sizing: border-box;
  height: 48px;
  width: 216px;
  border: 2px solid #FFFFFF;
  border-radius: 2px;
  box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);


  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding-left: 8px;
  padding-right: 8px;

  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  transition: all .2s;
  &:hover{    
    background: rgba(255,255,255,0.15);
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
  }
`;

const WatchVideoImage = styled.span`
  width: 25px;
  height: 25px;
  display: flex;
  margin-right: 10px;
  background: url('./assets/playbtn.svg') center no-repeat;
  border: 0;
`;

const WatchVideoText = styled.div`
  font-size: 15px;
`;

const YoroiInfo = styled.span`
  margin-right: none;
`;

const CheckMark = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 8px;
  padding-bottom: 3px;
`;

const CheckMark2 = styled(CheckMark)`
  margin-left: 14px;
  padding-bottom: 3px;
`;

const EmurgoLogo = styled.img`
  margin-left: 6px;
  width: 115px;
`;

const ContainerBottom = styled(Container)`
  padding-bottom: 60px;
  max-height: 2400px;
`;

const Developer = styled.img`
  @media (max-width: 700px) {
    height: auto;	
    width: 100%;    
  }

  height: 600px;	
  width: 1400px;
`;

const DeveloperOverlay = styled.div`
  @media (max-width: 700px) {
    height: auto;	
    width: 100%;    
  }

  height: 600px;	
  width: 1400px;	
  background: linear-gradient(47.75deg, #0C4146 0%, #48A1B0 100%);
`;

const DeveloperMask = styled.div`
  @media (max-width: 700px) {
    height: auto;	
    width: 100%;    
  }

  height: 600px;	
  width: 1400px;	
  background-color: #215F68;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
      showSupportModal: false,
      showDownloadDropdown: false,
    };
    this.openVideo = this.openVideo.bind(this);
  }

  hideDropdownMenu = () => {
    this.setState({ showDownloadDropdown: false });
  };

  showDropdownMenu = () => {
    this.setState({ showDownloadDropdown: true });
  };
  openVideo() {
    this.setState({ video: true });
  }

  render() {
    const _Home = ({ intl: { formatMessage } }) => (
      <span id="#top">
        <ContainerBottom>
          <Overflow style={{marginTop: '94px', marginLeft: '-37px'}}>
            <MainText>
              <MainTitle>
                <YoroiInfo>
                  <FormattedHTMLMessage id={'home.title.Yoroi'} />
                </YoroiInfo>
              </MainTitle>
              <SubTitle>
                {formatMessage({id: 'home.title.YoroiDescription'})}
              </SubTitle>
              <SubSubTitle>
                By <EmurgoLogo src="./assets/emurgo_logo.png" alt="Emurgo - Creating a more connected and equitable world through Cardano blockchain" border="0" />
              </SubSubTitle>
              <MainButtons>
                <LearnButton onClick={this.openVideo} style={{marginTop: '-7px'}}>
                  <div style={{ width: 'auto'}}>
                    <LearnButtonText> {formatMessage({ id: 'home.title.learn-more' })} </LearnButtonText>
                  </div>
                </LearnButton>

                <WatchVideo onClick={this.openVideo} style={{marginTop: '-7px'}}>
                  <span>
                    <WatchVideoImage />
                  </span>
                  <div style={{ width: '140px'}}>
                    <WatchVideoText> {formatMessage({ id: 'home.title.watch-the-video' })} </WatchVideoText>
                  </div>
                </WatchVideo>
              </MainButtons>
            </MainText>
          </Overflow>
          <MainImage/>
        </ContainerBottom>
        <AboutComponent />
          <DeveloperMask>
            <DeveloperOverlay>
              <Developer src="./assets/designAssets/Assets/photos/Developer.jpg" alt="Yoroi - Simple Our passion" />
            </DeveloperOverlay>
          </DeveloperMask>
        <Collaborators />
        <Blog />
        <Contact />
      </span>
    );

    const Home = inject('locale')(injectIntl(observer(_Home)));

    return <Home />;
  }
}

export default App;
