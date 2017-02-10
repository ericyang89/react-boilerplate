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
    let item = {
      avator: 'https://apic.douyucdn.cn/upload/avanew/face/201609/28/01/f753a7aaa6e6b5f6df3f66e3b6a74cd3_big.jpg?rltime=1486626791',
      poster: '1麻烦搜的咖啡机',
      postTime: '01天前',
      postTitle: '一二三四五六七八九零一二三四五六二三四五六七四五六七八九零一二三四五1111六',
      isContainedVideo: false,
      images: [
        'https://img.douyucdn.cn/data/yuba/default/2017/02/10/201702100910155657.200x0.jpg?i=417333f4c1676249026c11d5d3e6610834',
        'https://img.douyucdn.cn/data/yuba/default/2017/02/10/201702100910155657.200x0.jpg?i=417333f4c1676249026c11d5d3e6610834',

      ],
      postTeam: 'Dota2',
      isVote: true,
      replyCount: '555',
    };
    const isOnePic = item.images && (item.images.length === 1 || item.images.length === 2)
    return (
      <Wrapper>
        <PostHeader {...item}/>
        <ContentWrapper>
          <LeftBox isOnePic={isOnePic}>            
            <Title title={item.postTitle}>
              <Vote src={voteImg} />
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
  // avator: React.PropTypes.string,
  // poster: React.PropTypes.string,
  // postTime: React.PropTypes.string,
  // postTitle: React.PropTypes.string,
  // isContainVideo: React.PropTypes.bool,
  // images: React.PropTypes.array,
  // postTeam: React.PropTypes.string,
  // isVote: React.PropTypes.bool,
  // replyCount: React.PropTypes.number,
};

export default PostItem;
