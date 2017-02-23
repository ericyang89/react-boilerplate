/**
*
* GroupList
*
*/

import React from 'react';
import styled from 'styled-components';
import Item from './Item.js';
//   // overflow-x: scroll;
const Wrapper=styled.div`
  height:.9rem;
  overflow:hidden;
  font-size:.3rem;
  display:flex;
 
`;
const Content=styled.div`
 display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transform: ${(props)=>{return "translate("+props.translateLeft+"px,0px)"}};
  transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s; 

`;


class GroupList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    moveX: 0,
  };
  handleTouchStart = (e) => {
      this.startX=e.nativeEvent.touches[0].clientX;
  };
  handleTouchEnd = (e) => {
    this.props.translateLeft
  };
  startX=0;
  maxGroupWidth=-10000;
  handleTouchMove = (e) => {
    let diat = e.nativeEvent.touches[0].clientX - this.startX;
    if (6 > 5) {
      this.setState({
        moveX: e.nativeEvent.touches[0].clientX - this.startX
      })
    }


  };
  componentWillReceiveProps(){
     this.setState({
        moveX: 0
      })
  }
  
  componentDidMount(){
    const contentDom=document.querySelector("#reactScrollTabContent")
    let clientWidth = contentDom.parentNode.offsetWidth;
    this.maxGroupWidth=clientWidth-contentDom.offsetWidth;
  }
  render() {
    let items=this.props.items;
    let handleClick=this.props.handleClick;
    handleClick=handleClick?handleClick:(tId,item,e)=>(console.log(tId,item,e));
    items=items?items:[
      {valuse:"dota2",isActive:true,topicId:12},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:15},
      {valuse:"asdaf",isActive:false,topicId:16},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asd44444af",isActive:true,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:13},
      ];
      let transLeft=this.props.translateLeft+this.state.moveX;
       const minTranslateLeft = this.maxGroupWidth;
          transLeft=transLeft>0?0:(transLeft < minTranslateLeft ? minTranslateLeft : transLeft);
    return (
      <Wrapper >
        <Content translateLeft={transLeft} 
        id="reactScrollTabContent" 
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
        >
        { items.map((item,index)=><Item {...item} key={index} index={index} onClick={handleClick}/>) }   
        </Content>     
      </Wrapper>
    );
  }
}
GroupList.propTypes = {
  items: React.PropTypes.array,
  handleClick: React.PropTypes.func,
  translateLeft:React.PropTypes.number,
};

export default GroupList;
