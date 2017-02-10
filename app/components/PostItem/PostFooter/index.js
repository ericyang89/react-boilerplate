/**
*
* PostFooter
*
*/

import React from 'react';
import MessageIcon from 'components/MessageIcon'
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  align-items:stretch;
  justify-content:space-between;
  font-size:.28rem;
  color:#ccc;
  height:.4rem;

`;
const Left = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  
`;
const Right = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  
`;


class PostFooter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let source = this.props.postTeam;
    let replyCount = this.props.replyCount;
    return (
      <Wrapper >
        <Left>
          <span style={{ fontSize: '.24rem', color: '#ccc' }}>来自</span>
          <span style={{ color: '#f70', marginLeft: '.14rem' }}>{source}</span>
        </Left>
        <Right>
          <MessageIcon/>
          <span style={{ marginLeft: '.14rem' }}>{replyCount}</span>
        </Right>
      </Wrapper>
    );
  }
}

PostFooter.propTypes = {
  postTeam: React.PropTypes.string,
  replyCount: React.PropTypes.number,
};

export default PostFooter;
