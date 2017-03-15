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
  if(posts&&posts.length>0){
    for(let i=0;i<posts.length;i++){
      ret.push(<PostItem key={i} item={posts[i]}/>)
    }
  }
  return ret;
}

export class YubaHomepage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount(){
    this.props.onLoadTopics();
  }
  render() {
    console.log('ttt',this.props.topics)
     let  groups = (this.props.topics&&this.props.topics.size>0)?this.props.topics:List();

     groups=groups.map(item=>item.set("views",getPosts(item.get("posts").toJS()) ));
     groups=groups.toJS();


    let changeHandle=(index)=>{
      console.log('this is changeHandle')
      const param={
        topicId:groups[index].topicId,
        lastQId:"",
      }

      this.props.onAddPosts(param);
    };


    // todo:测试
    // groups[0].views=getPosts(this.props.posts);
    // groups[1].views=getPosts(this.props.posts);

     console.log('group',groups)
    return (
      <div>
        <TabView groups={groups} onChange={changeHandle}/>     
      </div>
    );
  }
}

// YubaHomepage.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

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
