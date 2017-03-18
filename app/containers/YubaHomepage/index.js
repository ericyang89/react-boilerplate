/*
 *
 * YubaHomepage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {makeSelectPosts,makeSelectTopics} from './selectors';
import GroupList from 'components/GroupList';
import PostItem from 'components/PostItem';
import TabView from 'components/TabView';
import {loadPosts,loadTopics,addPosts} from './actions.js';
import { List } from 'immutable';

function getPosts(posts){
  let ret=[];
  if(Array.isArray(posts)&&posts.length>0){
    for(let i=0;i<posts.length;i++){
      ret.push(<PostItem key={i} item={posts[i]}/>)
    }
  }else if(posts.length===0){
    ret=(<div>loading posts</div>)
  }
  return ret;
}

const getGroups=(topics)=>{
  let  ret = (topics&&topics.size>0)?topics:List();
  ret=ret.map(item=>item.set("views",getPosts(item.get("posts").toJS()) ));
  return ret.toJS();
}

export class YubaHomepage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.onLoadTopics();
  }
  changeHandle = (index) => {
    console.log('this is changeHandle')
    let groups=getGroups(this.props.topics);
    const param = {
      topicId: groups[index].topicId,
      lastQId: "",
    }

    if (groups[index].posts.length === 0) {
      this.props.onAddPosts(param);
    }

  };


  viewScrollHandle=(index,deltaHeight)=>{
    const threshold=20;
    let groups=getGroups(this.props.topics);
    if(deltaHeight<threshold){
      console.log('loadinnnnnnn data');
    }
  }
  render() {
    if(!this.props.topics||this.props.topics.size===0){
      // TabView 的groups 不支持空数组
      return (<div>loading</div>);
    }
     
    let groups=getGroups(this.props.topics);

    return (
      <div>
        <TabView groups={groups} onChange={this.changeHandle} onViewScroll={this.viewScrollHandle}/>     
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onLoadPosts:()=>dispatch(loadPosts()),
    onLoadTopics:()=>dispatch(loadTopics()),
    onAddPosts:(param)=>dispatch(addPosts(param))
  };
}
const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  topics: makeSelectTopics(),
});

export default connect(mapStateToProps, mapDispatchToProps)(YubaHomepage);
