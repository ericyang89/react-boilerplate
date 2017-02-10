/**
*
* GroupList
*
*/

import React from 'react';
import styled from 'styled-components';
import Item from './Item.js';

const Wrapper=styled.div`
  height:.9rem;
  overflow-x: scroll;
  font-size:.3rem;
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom:.02rem solid #ccc;
`;


class GroupList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let items=this.props.items;
    items=[
      {valuse:"dota2",isActive:true,topicId:12},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:13},
      {valuse:"asdaf",isActive:false,topicId:13},
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
    return (
      <Wrapper>
        { items.map((item,index)=><Item {...item} key={index}/>) }        
      </Wrapper>
    );
  }
}
GroupList.propTypes = {
  items: React.PropTypes.array,
};

export default GroupList;
