import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { inject, observer } from 'mobx-react/index';
import styled from 'styled-components';

import { Container, SectionTitle } from '../css';

const BlogContainer = styled(Container)`
  max-width: 1200px;
  margin-bottom: 60px;
`;

const Blogs = styled.div`                                                                                                                                                                                                                                                                                               
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
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
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }

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
        <BlogContainer id="blog">
          <SectionTitle style={{ paddingBottom: '4px' }}>
            {formatMessage({ id: 'home.Blog.title' })}
          </SectionTitle>

          <SectionSubTitle style={{ paddingBottom: '40px', margin: '0 auto' }}>
          {formatMessage({ id: 'home.Blog.sub-title' })}
          </SectionSubTitle>

          <Blogs>
            <BlogItem>
            <BlogImageMask>
              <BlogImage src="./assets/designAssets/Assets/photos/Blog1.jpg" alt="Yoroi - Simple Our passion" />
            </BlogImageMask>             

             <TimeSlotText>
              {formatMessage({ id: BlogList[0].blogDate })}
            </TimeSlotText>

            <BlogText>
              {formatMessage({ id: BlogList[0].blogText })}
            </BlogText>
            </BlogItem>

            <BlogItem>
              <BlogImageMask>
                <BlogImage src="./assets/designAssets/Assets/photos/Blog2.jpg" alt="Yoroi - Simple Our passion" />
              </BlogImageMask>             

             <TimeSlotText>
              {formatMessage({ id: BlogList[1].blogDate })}
            </TimeSlotText>

            <BlogText>
              {formatMessage({ id: BlogList[1].blogText })}
            </BlogText>
            </BlogItem>

            <BlogItem>
              <BlogImageMask>
                <BlogImage src="./assets/designAssets/Assets/photos/Blog3.jpg" alt="Yoroi - Simple Our passion" />
              </BlogImageMask>             

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
