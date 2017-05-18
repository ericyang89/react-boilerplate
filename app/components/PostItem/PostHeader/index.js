/**
*
* PostHeader
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: flex;
  height: 1rem;
  justify-content: flex-start;
  align-items: center;
  margin:.24rem;
`;

const Avatar = styled.img `
  display: flex;
  height: .78rem;
  width:.78rem;
  border-radius: .78rem;
  border: .02rem solid #ccc;
  justify-content: flex-start;
  align-items: center;
`;

const RightBox = styled.div `
  color:#999;
  display:flex;
  flex-direction:column;
  margin-left: .2rem;
`;

const NameString = styled.div `
  font-size:.28rem;
`;

const TimeString = styled.div `
  font-size:.2rem;
`;

class PostHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Avatar src={this.props.avator}/>
        <RightBox>
          <NameString>
            {this.props.poster}
          </NameString>
          <TimeString>
            {this.props.postTime}
          </TimeString>
        </RightBox>
      </Wrapper>
    );
  }
}

PostHeader.propTypes = {
  avator: React.PropTypes.string,
  poster: React.PropTypes.string,
  postTime: React.PropTypes.string
};

export default PostHeader;
