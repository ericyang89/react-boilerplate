/**
*
* FloatBar
*
*/

import React from 'react';
import styled from 'styled-components';
import {div,span,img} from "react";
import bg from './image/float-bg.png';
import qq from './image/qq.png';
import wechat from './image/wechat.png';
import weibo from './image/weibo.png';
import douyu from './image/douyu.png';


const Wrapper = styled.div`
    height: 1rem;
    width: 100%;
    max-width: 7.5rem;
    position: fixed;
    bottom: 0;
    margin: auto;
    background-image: url("${bg}");
    background-repeat: repeat-x;
    font-size: .28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .1rem .24rem;
    color:#333;
`;

const Download=styled.div`
    display: flex;
    align-items: center;
`;

const Share=styled.div`
    display: flex;
    align-items: center;
    margin-right: .04rem;
`;

const Douyu=styled.img`
    width: .78rem;
    height: .78rem;
    margin: 0 .24rem 0 .2rem;
`;

const Icon=styled.img`    
    width: .7rem;
    height: .7rem;
    margin: 0 .16rem;
`;


class FloatBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
          <Download>
                <Douyu src={douyu} alt="斗鱼app下载"/>
                <span>立即打开 &gt;</span>
        </Download>
        <Share>
            <span>something awesome</span>
          
        </Share>
      </Wrapper>
    );
  }
}

FloatBar.propTypes = {

};

export default FloatBar;
