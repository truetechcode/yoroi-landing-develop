import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import ModalVideo from 'react-modal-video';
import SweetAlert from 'react-bootstrap-sweetalert';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

import { Container, SectionTitle } from '../css';

const BlogContainer = styled(Container)`
  max-width: 1200px;
  margin-bottom: 60px;
`;

const Blogs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 15px;
`;

const TimeSlotText = styled.div`
  height: 20px;	
  width: auto;	
  color: #8C8C8C;	
  font-family: Rubik;	
  font-size: 14px;	
  line-height: 20px;
  margin-top: 30px;
`;

const TimeSlotTextSecondary = styled(TimeSlotText)`
  font-size: 14px;
  line-height: 18px;
  min-height: 18px;
  margin-bottom: 2px;
`;

const LineBlock = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  position: relative;
  align-items: center;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  border: 2px solid #F0F3F5;
`;

const TimeCircleWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeCircleBase = styled.div`
  border-radius: 50%;
  behavior: url(PIE.htc); /* IE8 */
`;

const TimeCircleOuterBig = styled(TimeCircleBase)`
  min-width: 36px;
  min-height: 36px;
  background-color: #F0F3F5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 53px;
  margin-right: 53px;
  visibility: ${p => (p.show ? 'visible' : 'hidden')};
`;

const TimeCircleGreen = styled(TimeCircleBase)`
  min-width: 20px;
  min-height: 20px;
  background-color: #17D1AA;  
`;

const TimeCircleOuterSmall = styled(TimeCircleBase)`
  min-width: 26px;
  min-height: 26px;
  background-color: #F0F3F5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 53px;
  margin-right: 53px;
  visibility: ${p => (p.show ? 'visible' : 'hidden')};  
`;

const TimeCircleBlue = styled(TimeCircleBase)`
  min-width: 14px;
  min-height: 14px;
  background-color: #2F5AE9;
`;

const GoalRow = styled.div`
  display: flex;
`;

const GoalWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Goal = styled.div`
  flex: 1 0 31%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 320px;
  max-width: 320px;
`;

const GoalImage = styled.img`
  margin-right: 24px;
`;

const GoalTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 160px;  
`;

const GoalText = styled.div`
  color: #353535;
  font-family: Rubik;
  font-size: 16px;
  line-height: 24px;
`;

const GoalTextSub = styled(GoalText)`
  color: #A7AFC0;
`;

const MoveLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  margin-right: 10px;
`;

const MoveRight = styled(MoveLeft)`
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  behavior: url(PIE.htc); /* IE8 */
  background: #F0F3F5;
  .leftArrow, [disabled] {
    width: 24px;
    height: 24px;
    background: url("./assets/arrow-default-left.svg") no-repeat;
  }  
  .rightArrow, [disabled] {
    width: 24px;
    height: 24px;
    background: url("./assets/arrow-default-right.svg") no-repeat;
  }
  &[disabled] {
    cursor: default;
  }
  :hover:not([disabled]) {
    .leftArrow {
      background: url("./assets/arrow-highlight-left.svg") no-repeat;
    };
    .rightArrow {
      background: url("./assets/arrow-highlight-right.svg") no-repeat;
    };
  };
`;
const SectionSubTitle = styled.div`
    height: 44px;	
    width: auto;	
    color: #1D1E21;	
    font-family: Rubik;	
    font-size: 18px;	
    line-height: 22px;	
    text-align: center;
    padding-bottom: 0;
`;
const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlogImageMask = styled.div`
  height: 250px;	
  width: 370px;	
  background-color: #002936;
`;

const BlogImage = styled.img`
    height: 250px;	
    width: 370px;
`;
const BlogText = styled.p`
    height: 84px;	
    width: 370px;	
    color: #1D1E21;
    font-family: Rubik;	
    font-size: 18px;	
    font-weight: 500;	
    line-height: 28px;
`;

const BlogList = [
  {
    blogDate: 'home.Blog.11-11-2019.blog-date',
    blogText: 'home.Blog.11-11-2019.blog-text',
  },
  {
    blogDate: 'home.Blog.06-11-2019.blog-date',    
    blogText: 'home.Blog.06-11-2019.blog-text',
  },
  {
    blogDate: 'home.Blog.16-10-2019.blog-date',
    blogText: 'home.Blog.16-10-2019.blog-text',
  }
];

class Blog extends Component {
  
  render() {
    const _Blog = ({ intl: { formatMessage } }) => {
      return (
        <BlogContainer>
          <SectionTitle style={{ paddingBottom: '4px' }}>
            {formatMessage({ id: 'home.Blog.title' })}
          </SectionTitle>

          <SectionSubTitle style={{ paddingBottom: '40px', margin: '0 auto' }}>
          {formatMessage({ id: 'home.Blog.sub-title' })}
          </SectionSubTitle>

          <Blogs>
            <BlogItem>
             <BlogImage src="./assets/designAssets/Assets/photos/Blog1.jpg" alt="Yoroi - Simple Our passion" />

             <TimeSlotText>
              {formatMessage({ id: BlogList[0].blogDate })}
            </TimeSlotText>

            <BlogText>
              {formatMessage({ id: BlogList[0].blogText })}
            </BlogText>
            </BlogItem>

            <BlogItem>
             <BlogImage src="./assets/designAssets/Assets/photos/Blog2.jpg" alt="Yoroi - Simple Our passion" />

             <TimeSlotText>
              {formatMessage({ id: BlogList[1].blogDate })}
            </TimeSlotText>

            <BlogText>
              {formatMessage({ id: BlogList[1].blogText })}
            </BlogText>
            </BlogItem>

            <BlogItem>
             <BlogImage src="./assets/designAssets/Assets/photos/Blog3.jpg" alt="Yoroi - Simple Our passion" />

             <TimeSlotText>
              {formatMessage({ id: BlogList[2].blogDate })}
            </TimeSlotText>

            <BlogText>
              {formatMessage({ id: BlogList[2].blogText })}
            </BlogText>
            </BlogItem>
          </Blogs>
        </BlogContainer>
      );
    };

    const Blog = inject('locale')(injectIntl(observer(_Blog)));

    return <Blog />;
  }
}

export default Blog;
