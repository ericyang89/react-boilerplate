/**
*
* PostItem
*
*/

import React from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader'
import PostFooter from './PostFooter';
import RightImg from './RightImg';
import ImageList from './ImageList';
import voteImg from './vote.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:.16rem;
  padding-bottom:.16rem;
  border-bottom:.06rem solid #ccc;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  flex:1 0 auto;
  max-width:${props => props.isOnePic ? '4.83rem' : '7.02rem'};
  font-size:.34rem;
  margin:0 .24rem;
`;

const Vote = styled.img` 
  display:${(props)=>props.show?'inline':'none'}
  height:.34rem;
  width:.6rem;
  border-radius: .04rem;
  margin-right:.12rem; 
  position:relative;
  top:-.03rem;
`

const Title=styled.div`

    height: .96rem;
    position: relative;
    margin-bottom: .1rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp:2;
	  -webkit-box-orient:vertical;
`

class PostItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let item = this.props.item;
    const isOnePic = item.images && (item.images.length === 1 || item.images.length === 2)
    return (
      <Wrapper>
        <PostHeader {...item}/>
        <ContentWrapper>
          <LeftBox isOnePic={isOnePic}>            
            <Title title={item.postTitle}>
              <Vote src={voteImg} show={item.isVote}/>
              {item.postTitle}
            </Title>
            <ImageList images={item.images} />
            <PostFooter {...item}/>
          </LeftBox>
          <RightImg {...item} />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

PostItem.propTypes = {
  avator: React.PropTypes.string,
  poster: React.PropTypes.string,
  postTime: React.PropTypes.string,
  postTitle: React.PropTypes.string,
  isContainVideo: React.PropTypes.bool,
  images: React.PropTypes.array,
  postTeam: React.PropTypes.string,
  isVote: React.PropTypes.bool,
  replyCount: React.PropTypes.number,
};

export default PostItem;
