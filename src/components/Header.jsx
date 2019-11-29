import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import styled from 'styled-components';
import { Container } from './../css';
import { HashLink as Link } from 'react-router-hash-link';

import Plx from "react-plx";

const data = [
  {
    start: 0,
    end: 400,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "opacity"
      }
    ]
  },
  {
    start: 400,
    duration: 100,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      }
    ]
  },

];

const navFixed = {
  width: '100%',
  height: 60,
  background: 'linear-gradient(41deg, #0C4146 0%, #48A1B0 100%)',
  color: "#fff",
  left: 0,
  top: 0,
  position: "fixed",
  zIndex: 10,
  
};

const Content = styled.div`  
  display: flex;
  max-width: 1115px;
  margin: 10px auto;
  a{
    padding-top: 5px;
    
  }
`;

const NavFixed = styled.div`
  flex: 1;
  text-align: center;
  text-transform: capitalize;
  line-height: 21px;
  font-size: 15px;
  height: 24px;
  font-weight: 500;
  margin: 5px;
  a{    
    display: inline-block;
    text-decoration: none;
    height: 23px;
    img{
      margin-top: -5px;
      margin-left: -65px
    }
    &:link,
    &:visited{
      color: white;
    }
  }
`;

const Logo = styled.img`
  font-size: 1.5em;
  text-align: center;
  height: 35px;	
  width: 200.54px; 
`;

const VTitleList = styled.div`
  flex: 1;
  margin: 4px;
  text-align: center;
  text-transform: capitalize;
 
  font-size: 15px;
  height: 24px;
  font-weight: 500;
  z-index: 100;

  a{
    text-decoration: none;
    display: inline-block;
    height: 23px;
    
    &:link,   
    &:visited{
      color: white;
    }
  }  
`;

/*
 * Background
 *
 * @media rules
 * to move blue triangle header responsive
 * an correctly centered.
 *
 * .hasOffset is for different sections, that require
 * diffrent sizes.
 */
const Background = styled.div`
  position: relative;

  @media (min-width: 700px) {
    top: -150px;
    right: 160px;  
  }

  @media (max-width: 700px) {
    top: -150px;
    right: 11px;
    height: 935px;	
    width: 1402px;	    
  }

  height: 935px;	
  width: 1402px;	
  transform: scaleX(-1);
  background-image: url('../assets/designAssets/Assets/photos/start_page.jpg');
  background-size: cover;
  z-index: -3;
`;

const HeaderText = styled.span`
  @media (max-width: 700px) {
    display: none;
  }
  position: relative;
  color: white;
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

const HContainer = styled.div`
  margin: 0 auto;
  max-width: 1115px;
  height: 88px;
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

const HeaderAlt = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const HeaderAltSub = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
  top: 70px;
  display: none;  
  width: 100%;
  height: 200px;
  background: linear-gradient(41deg, #0C4146 0%, #48A1B0 100%);
  position: absolute;
  padding-top: 40px;
  padding-bottom: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.toggleMenu = this.toggleMenu.bind(this)
  }
  toggleMenu() {
    this.setState({
      show: !this.state.show
    })
  }
  isThisHomePage() {
    return this.props.location.pathname === '/';
  }

  render() {
    
    const showMenu = this.state.show ? {display: ''} : {display: 'none'}
    const _Header = ({ locale, intl: { formatMessage } }) => (
      <HContainer>
        <HeaderAltSub style={showMenu}>
          <VTitleList>
            <Link to="/#about">
              {formatMessage({ id: 'header.about' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Link to="/#blog">
              {formatMessage({ id: 'header.blog' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Link to="/#contact">
              {formatMessage({ id: 'header.contact' })}
            </Link>
          </VTitleList>
          <VTitleList>
            <Selector
              value={locale.value}
              onChange={event => (locale.value = event.target.value)}
            >
              <option value="en">ENG</option>
              <option value="ja">日本語</option>
              {/* <option value="ko">한국어</option>
              <option value="zh-Hans">简体中文</option>
              <option value="zh-Hant">繁體中文</option>
              <option value="ru">Pусский</option> */}
           </Selector>
          </VTitleList>
        </HeaderAltSub>
        <Container>
          <HeaderAlt>
            <Logo  src="./assets/designAssets/Assets/svg/EMURGOTEST-logo.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
            <div style={{ flex: 1 }} />
            <a style={{ color: 'white', fontSize: '30px' }} href="javascript:void(0);" className="icon" onClick={this.toggleMenu}>
              <i className="fa fa-bars" />
            </a>
          </HeaderAlt>
          <HeaderText>
            <VTitleList>
              <Link to="/">
                <Logo style={{marginLeft: '-120px'}} src="./assets/designAssets/Assets/svg/EMURGOTEST-logo.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
              </Link>
            </VTitleList>
            <div style={{ flex: 2 }} />
            <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
            <Link to="/#about">
              {formatMessage({ id: 'header.about' })}
            </Link>
            </VTitleList>
            <VTitleList style={{ flex: 0.5, marginTop: '10px' }}>
            <Link to="/#blog">
              {formatMessage({ id: 'header.blog' })}
            </Link>
            </VTitleList>
            <VTitleList style={{ flex: 0.5, marginTop: '10px'}}>
            <Link to="/#contact">
              {formatMessage({ id: 'header.contact' })}
            </Link>
            </VTitleList>
            <VTitleList style={{flex: 0.5, marginTop: '10px', zIndex: '15'}}>
              <Selector
                style={{color: '#FFFFFF', fontWeight: 500}}
                value={locale.value}
                onChange={event => (locale.value = event.target.value)}
              >
                <option style={{color: '#FFFFFF'}} value="en">ENG</option>
                <option style={{color: '#FFFFFF'}} value="ja">日本語</option>
                {/* <option style={{color: '#4A5065'}} value="ko">한국어</option>
                <option style={{color: '#4A5065'}} value="zh-Hans">简体中文</option>
                <option style={{color: '#4A5065'}} value="zh-Hant">繁體中文</option>
                <option style={{color: '#4A5065'}} value="ru">Pусский</option> */}
              </Selector>
            </VTitleList>
            <Plx parallaxData={data} style={navFixed} >
              <Content>
                <NavFixed>
                  <Link to="/">
                    <Logo src="./assets/designAssets/Assets/svg/EMURGOTEST-logo.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
                  </Link>
                </NavFixed>
                <div style={{ flex: 2, marginRight: '45px' }} />
                <NavFixed style={{ flex: 0.5 }}>
                <Link to="/#about">
              {formatMessage({ id: 'header.about' })}
            </Link>
                </NavFixed>
                <NavFixed style={{ flex: 0.5 }}>
                <Link to="/#blog">
                  {formatMessage({ id: 'header.blog' })}
                </Link>
                </NavFixed>
                <NavFixed style={{ flex: 0.5 }}>
                <Link to="/#contact">
                  {formatMessage({ id: 'header.contact' })}
                </Link>
                </NavFixed>
                <NavFixed style={{marginTop: '10px'}}>
                  <Selector 
                    style={{marginRight: '7px', color: '#ffffff', fontWeight: 500}}
                    value={locale.value}
                    onChange={event => (locale.value = event.target.value)}
                  >
                    <option style={{color: '#4A5065'}} value="en">ENG</option>
                    <option style={{color: '#4A5065'}} value="ja">日本語</option>
                    {/* <option style={{color: '#4A5065'}} value="ko">한국어</option>
                    <option style={{color: '#4A5065'}} value="zh-Hans">简体中文</option>
                    <option style={{color: '#4A5065'}} value="zh-Hant">繁體中文</option>
                    <option style={{color: '#4A5065'}} value="ru">Pусский</option>  */}
                  </Selector>
                </NavFixed>
              </Content>
            </Plx>
          </HeaderText>
        </Container>
        <Background />
      </HContainer>
    );

    const Header = inject('locale')(injectIntl(observer(_Header)));

    return <Header />;
  }
}
export default App;
