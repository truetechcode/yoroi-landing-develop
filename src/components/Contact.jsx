import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import ModalVideo from 'react-modal-video';
import SweetAlert from 'react-bootstrap-sweetalert';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import { Container, SectionTitle } from '../css';

const ContactContainer = styled(Container)`
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 632px;	
  width: 700px;	
  background-color: #F1F7FA;
  padding: 0 80px;
  /* align-items: center; */
`;

const SectionSubTitle = styled.div`
    height: 44px;	
    width: auto;	
    color: #1D1E21;	
    font-family: Rubik;	
    font-size: 18px;	
    line-height: 22px;	
    text-align: left;


    height: 28px;	
    line-height: 28px;
`;
const ContactImageMask = styled.div`
  height: 632px;	
  width: 700px;	
  background-color: #D8D8D8;
`;

const ContactImage = styled.img`
  height: 632px;	
  width: 700px;
`;
const ContactContainerSecondary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ContactInput = styled.input`
    box-sizing: border-box;	
    height: 54px;	
    width: 469px;	
    border: 1px solid #215F68;	
    border-radius: 2px;

    background: transparent;
    opacity: 0.5;
    color: #8C8C8C;
    font-family: Rubik;
    font-size: 14px;
    line-height: 20px;
    padding: 15px;
`;
const ContactTextArea = styled.textarea`
    box-sizing: border-box;	
    height: 170px;	
    width: 469px;	
    border: 1px solid #215F68;	
    border-radius: 2px;

    background: transparent;
    opacity: 0.5;
    color: #8C8C8C;
    font-family: Rubik;
    font-size: 14px;
    line-height: 20px;
    padding: 15px;
`;
const ContactButton = styled.button`
    box-sizing: border-box;	
    height: 48px;	
    width: 216px;	
    border: 2px solid #215F68;	
    border-radius: 2px;	
    box-shadow: 0 2px 48px 0 rgba(83,81,81,0.5);
    text-transform: uppercase;
    color: #215F68;	
    font-family: Rubik;	
    font-size: 14px;	
    font-weight: 500;	
    letter-spacing: 1.87px;	
    line-height: 17px;	
    text-align: center;
    align-self: center;
`;

class Contact extends Component {
  
  render() {
    const _Contact = ({ intl: { formatMessage } }) => {
      return (
        <ContactContainer>
          <SectionTitle style={{ paddingBottom: '0' }}>
            {formatMessage({ id: 'home.Contact.title' })}
          </SectionTitle>

          <ContactContainerSecondary>
          <ContactForm>

          <SectionSubTitle>
          {formatMessage({ id: 'home.Contact.sub-title.1' })}
          </SectionSubTitle>

            <ContactInput type="text" name="name" placeholder={formatMessage({ id: 'home.Contact.placeholder.name' })} />
            <ContactInput type="text" name="email" placeholder={formatMessage({ id: 'home.Contact.placeholder.email' })} />

            <SectionSubTitle>
          {formatMessage({ id: 'home.Contact.sub-title.2' })}
          </SectionSubTitle>

            <ContactTextArea type="textarea" name="message" placeholder={formatMessage({ id: 'home.Contact.placeholder.your-message' })} />

            <ContactButton type="submit" name="submit" >{formatMessage({ id: 'home.Contact.button.learn-more' })}</ContactButton>
          </ContactForm>
          <ContactImageMask>
            <ContactImage src="./assets/designAssets/Assets/photos/Contact_us.jpg" alt="Yoroi - Simple Our passion" />
          </ContactImageMask>          
          </ContactContainerSecondary>
        </ContactContainer>
      );
    };

    const Contact = inject('locale')(injectIntl(observer(_Contact)));

    return <Contact />;
  }
}

export default Contact;
