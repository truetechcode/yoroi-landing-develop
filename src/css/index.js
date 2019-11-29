import styled from 'styled-components';

const Overflow = styled.div`
  @media (max-width: 700px) {
    margin-top: 46px;
  }
  
  @media (min-width: 700px) {
    margin-top: 86px;
  }
  height:450px;
  display: flex;
`;

const OverflowS = styled.div`
  @media (max-width: 700px) {
    margin-top: 43px;
  }
  
  @media (min-width: 700px) {
    margin-top: 43px;
  }
  height:280px;
  display: flex;
`;

const Container = styled.div`
  @media (max-width: 700px) {
    margin-right: 8px;
    margin-left: 8px;
  }
  margin: 0 auto;
  max-width: 1040px;
  
  padding-left: 20px;
  padding-right: 20px;
`;

const ContainerB = styled.div`
  margin-left: -430px;
  max-width: 1920px;
`;

const ContainerGrey = styled.div`
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
  height: 240px;	
  width: 1400px;	
  background-color: #F1F7FA;
`;

const ContainerBlue = styled.div`
  color: white;
  background-image: url('./assets/background_square.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const SectionTitle = styled.div`
  /* font-size: 30px; */
  margin-bottom: 23px;
  width: 100%;
  /* text-align: center; */
  padding-top:60px;

  height: 32px;	
  /* width: 211px;	 */
  color: #215F68;	
  font-family: Rubik;	
  font-size: 24px;	
  font-weight: bold;	
  line-height: 32px;	
  text-align: center;
`;

const SectionTitleLight = styled(SectionTitle)`
  color: white;
`;

export {
  Container,
  ContainerB,
  ContainerGrey,
  ContainerBlue,
  Overflow,
  OverflowS,
  SectionTitle,
  SectionTitleLight,
}
