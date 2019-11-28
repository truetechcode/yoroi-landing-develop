import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './../css';
import OutsideClickHandler from 'react-outside-click-handler';

const ContainerFooter = styled.div`
  height: 187px;	
  width: 1400px;  
  background: linear-gradient(41deg, #0C4146 0%, #48A1B0 100%);
`;

const RowContainerIcons = styled.div`
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
  width: 100%;
  font-size: 13px;
  text-align: left; 
  display: flex; 
  flex-direction: row;
  align-items: flex-end; 
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
  /* align-items: center; */
  /* justify-content: space-between; */
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
  flex: 2;
  margin-top: -30px;
`;

const Logo = styled.img`
  font-size: 1.5em;
  text-align: center;
  /* max-width: 128px; */
  height: 35px;	
  max-width: 188.19px;
  margin-right: -110px;
  margin-left: -30px;
`;

const FooterMenu = styled.div`
  display: flex;
  padding: 60px 0;
  flex-direction: row;
  div{
    display: flex;
  }
`;

const LinkS = styled.div`
  flex: 0.8;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  margin: 4px;
  text-align: left;
  text-transform: uppercase;
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

  /* Single page app - scroll to top, to look like a normal webpage */
  scroll = () => {
    window.scrollTo(0, 0);
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
            <LinkS onClick={scroll}>
              <Link to="/about">{formatMessage({ id: 'header.about' })}</Link>
            </LinkS>
            <LinkS onClick={scroll} style={{flex: 0.5}}>
              <Link to="/faq/1">{formatMessage({ id: 'header.blog' })}</Link>
            </LinkS>
            <LinkS onClick={scroll}>
              <Link to="/support">{formatMessage({ id: 'header.contact' })}</Link>
            </LinkS>
            </div>
            </FooterMenu>
            <div style={{ flex: 0.1 }} />
              <Spacer />
              <RowContainerIcons style={{ paddingTop: '29.74px', }}>
              <LinkS style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>

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
              {/* </RowContainerIcons>
          <RowContainerIcons style={{paddingTop: '-29.74px' }}> */}
            <FooterText>
              {formatMessage({ id: 'footer.all-rights' })}
            </FooterText>
            {/* <Spacer/> */}
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
