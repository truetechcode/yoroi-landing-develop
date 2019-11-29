import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import styled from 'styled-components';
import { Container } from './../css';
import { HashLink as Link } from 'react-router-hash-link';

const ContainerFooter = styled.div`
  @media (max-width: 700px) {
    width: 100%;	
  }

  height: 187px;	
  width: 1400px;  
  background: linear-gradient(41deg, #0C4146 0%, #48A1B0 100%);
`;

const RowContainerIcons = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: row;
    flex-flow: wrap;
    padding-top: 0;
  }
  padding-top: 29.74px;
  display: flex;
  flex-direction: row-reverse;
  .links {
    flex: 0;
    margin: 0 5px;
  }
  .links.links-flex {
    flex: 0;
  }
`;

const FooterText = styled.div`
  @media (max-width: 700px) {
    text-align: center; 
    margin-left: 0;
    margin-top: 10px;
  }

  width: 100%;
  color: #fff;
  font-size: 13px;
  text-align: left; 
  margin-left:-45px;
  margin-top:-24px;
`;

const Spacer = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  flex: 1;
`;

const RowContainer = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  @media (max-width: 700px) {
    min-height: 50px;
    flex-direction: column;
  }
  @media (min-width: 700px) {
  }
  a:hover,
  a:visited,
  a:link,
  a:active {
    text-decoration: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
`;

const LogoSize = styled.div`
  @media (max-width: 700px) {
    flex: 0;
    margin-top: 0px;
    justify-content: center;
  }

  flex: 2;
  margin-top: -30px;
`;

const Logo = styled.img`
  @media (max-width: 700px) {
    height: 25px;	
    margin-left: 0px;
  }

  height: 35px;	
  max-width: 188.19px;
  margin-left: -50px;
`;

const FooterMenu = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    div{
    display: flex;
  }    
  }

  display: flex;
  padding: 60px 0;
  flex-direction: row;
  text-transform: capitalize;
  div{
    display: flex;
  }
`;

const Selector = styled.select`
  height: 20px;
  width: 56.44px;
  background-color: #fff0;
  border: none;
  background: transparent;
  text-transform: capitalize;
  cursor: pointer;
  &:after{
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;    
  }
`;

const LinkS = styled.div`
  @media (max-width: 700px) {
    flex: 1;
    width: 100%;
  }

  flex: 0.8;
  font-weight: 500;
  font-size: 15px;
  margin: 4px;
  text-align: left;
  text-transform: capitalize;
  margin-top: -22px;
 
  @media (max-width: 700px) {
  }
  a:visited {
    color: white;
  }

  a:link {
    color: white;
  }
`;

const LinksLogo = {
  display: 'flex', flexDirection: 'row', alignItems: 'last baseline', justifyContent: 'space-evenly'
}

const ContainerHeight = styled(Container)`
  @media (min-width: 700px) {
    height: 187px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showDownloadDropdown: false,
    };
  }

  closePopUp = () => {
    this.setState({ show: false });
  };

  hideDropdownMenu = () => {
    this.setState({ showDownloadDropdown: false });
  };

  showDropdownMenu = () => {
    this.setState({ showDownloadDropdown: true });
  };

  render() {
    const _Footer = ({ intl: { formatMessage } }) => (
      <ContainerFooter >
        <ContainerHeight>
          <RowContainer>
            <FooterMenu>
            <LogoSize>
            <Logo src="./assets/designAssets/Assets/svg/EMURGOTEST-logo.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
            </LogoSize>
            <div>
            <LinkS>
              <Link to="/#about">{formatMessage({ id: 'header.about' })}</Link>
            </LinkS>
            <LinkS style={{flex: 0.5}}>
              <Link to="/#blog">{formatMessage({ id: 'header.blog' })}</Link>
            </LinkS>
            <LinkS>
              <Link to="/#contact">{formatMessage({ id: 'header.contact' })}</Link>
            </LinkS>
            <LinkS>
            <Selector
                style={{color: '#FFFFFF', fontWeight: 500}}
              >
                <option style={{color: '#FFFFFF'}} value="en">ENG</option>
                <option style={{color: '#FFFFFF'}} value="ja">日本語</option>
                {/* <option style={{color: '#4A5065'}} value="ko">한국어</option>
                <option style={{color: '#4A5065'}} value="zh-Hans">简体中文</option>
                <option style={{color: '#4A5065'}} value="zh-Hant">繁體中文</option>
                <option style={{color: '#4A5065'}} value="ru">Pусский</option> */}
              </Selector>
            </LinkS>
            </div>
            </FooterMenu>
            <div style={{ flex: 0.1 }} />
              <Spacer />
              <RowContainerIcons style={{ }}>
              <LinkS style={LinksLogo}>

                <a className='links links-flex' target= '_blank' href="https://www.facebook.com/Yoroi-wallet-399386000586822/" rel='noopener'>
                  <img src="./assets/facebook.svg" />
                </a>
                <a className='links' target= '_blank' href="https://twitter.com/YoroiWallet" rel='noopener'>
                  <img src="./assets/twitter.svg" />
                </a>
                <a className='links' target= '_blank' href="https://www.youtube.com/channel/UCgFQ0hHuPO1QDcyP6t9KZTQ" rel='noopener'>
                  <img src="./assets/youtube.svg" />
                </a>
                <a className='links' target= '_blank' href="https://medium.com/@emurgo_io" rel='noopener'>
                  <img src="./assets/medium-size.svg" />
                </a>
                <a className='links' target= '_blank' href="https://www.reddit.com/r/cardano/" rel='noopener'>
                  <img src="./assets/reddit.svg" />
                </a>
                <a className='links' target= '_blank' href="https://www.linkedin.com/company/emurgo_io"  rel='noopener'>
                  <img src="./assets/linkedin.svg" />
                </a>
                </LinkS>
            <FooterText>
              {formatMessage({ id: 'footer.all-rights' })}
            </FooterText>
          </RowContainerIcons>
          </RowContainer>
        </ContainerHeight>
      </ContainerFooter>
    );

    const Footer = inject('locale')(injectIntl(observer(_Footer)));

    return <Footer />;
  }
}

export default App;
