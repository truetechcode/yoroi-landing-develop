import React from 'react'
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import styled from 'styled-components';
import { Container, ContainerGrey, Overflow, SectionTitle } from './../css';


const About = styled(Container)`
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const AboutTitle = styled.div`
  color: #215F68;	
  font-family: Rubik;	
  font-size: 24px;	
  font-weight: bold;	
  line-height: 32px;	
  text-align: center;
`;

const Right = styled.div`
  @media (min-width: 700px) {
    margin: 100px auto;
    height: 282px;	
    width: 770px;
  }
  @media (max-width: 700px) {
    height: auto;	
    width: auto;    
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  @media (min-width: 700px) {
    margin: 0 auto;
    height: 282px;	
    width: 770px;     
  }

  @media (max-width: 700px) {
    height: auto;	
    width: auto;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Square = styled.div`
  width: 320px;
  height: 300px;
`;

const SquareImage = styled.img`
  @media (max-width: 700px) {
    width: 80%;
  }

  height: 330px;
  width: 350px;
`;

const SquareText = styled.div`
  @media (max-width: 700px) {
    margin-left: 10px;
    margin-right: 10px;
    height: 168px;
    width: 70%;

  }

  flex: 1;

  font-size: 14px;
  color: #9B9B9B;
  line-height: 28px;
  height: 168px;
  width: 400px;
`;

const SquareTextTitle = styled.div`
  height: 36px;	
  width: 98px;	
  color: #353535;	
  font-family: Rubik;	
  font-size: 30px;	
  line-height: 36px;
  margin-bottom: 20px;
`;

const SquareTextText = styled.div`
  font-size: 14px;
  color: #9B9B9B;
  line-height: 28px;
  height: 168px;
  width: 400px;
`;


function AboutComponent() {
  const _About = ({ intl: { formatMessage } }) => (
    <span>
           <About id="about">
            <AboutTitle>
              <h2>{formatMessage({ id: 'home.about.title' })}</h2>
            </AboutTitle>
            <Left>
            <SquareText style={{}}>
              <SquareTextTitle >{formatMessage({ id: 'home.properties.secure' })}</SquareTextTitle>
              <SquareTextText >
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.secure-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.secure-text' })}
              </SquareTextText>
            </SquareText>
            <Square style={{}}>
              <SquareImage src="./assets/icon_secure.svg" alt="Yoroi is a Web Light Wallet for Cardano Secure Fast Simple" />
            </Square>
          </Left>
          <Right>
            <Square>
              <SquareImage src="./assets/icon_fast.svg" alt="Yoroi - Fast Our innovation" />
            </Square>
            <SquareText style={{marginLeft: '50px'}}>
              <SquareTextTitle >{formatMessage({ id: 'home.properties.fast' })}</SquareTextTitle>
              <SquareTextText>
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.fast-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.fast-text' })}
              </SquareTextText>
            </SquareText>
          </Right>
          <Left>
            <SquareText style={{}}>
              <SquareTextTitle>{formatMessage({ id: 'home.properties.simple' })}</SquareTextTitle>
              <SquareTextText>
              <span style={{ color: '#353535', fontWeight: '400' }}>{formatMessage({ id: 'home.properties.simple-text-highlight' })}</span><br/>
                {formatMessage({ id: 'home.properties.simple-text' })}
              </SquareTextText>
            </SquareText>
            <Square style={{}}>
              <SquareImage src="./assets/icon_simple.svg" alt="Yoroi - Simple Our passion" />
            </Square>
          </Left>
          </About>
    </span>
  );
  const AboutComponent = inject('locale')(injectIntl(observer(_About)));

  return <AboutComponent />
}

export default AboutComponent
