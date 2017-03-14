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
import {loadPosts,loadTopics} from './actions.js';

function getPosts(posts){
  let ret=[];
  if(posts&&posts.length>0){
    for(let i=0;i<posts.length;i++){
      ret.push(<PostItem key={i} item={posts[i]}/>)
    }
  }
  console.log("posts",posts);
  console.log("ret",ret);
  return ret;
}

export class YubaHomepage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount(){
    this.props.onLoadPosts();
    this.props.onLoadTopics();
  }
  render() {
     let  groups = this.props.topics?this.props.topics:[];
     groups=JSON.parse(JSON.stringify(groups));

    //  [
    //     { "value": "dota2", "topicId": 12,"views":[]  },
    //     { "value": "lol", "topicId": 13 ,"views":[] },
    //     { "value": "dota3", "topicId": 14 ,"views":[] },
    //     { "value": "dota4", "topicId": 15 ,"views":[] },
    //     { "value": "dota5", "topicId": 16 ,"views":[] },
    //     { "value": "dota3", "topicId": 17 ,"views":[] },
    //     { "value": "dota4", "topicId": 18 ,"views":[] },
    //     { "value": "dota5", "topicId": 19 ,"views":[] },
    //     { "value": "dota3", "topicId": 20 ,"views":[] },
    //     { "value": "dota4", "topicId": 21 ,"views":[] },
    //     { "value": "dota5", "topicId": 22 ,"views":[] },
    // ];
    let changeHandle=(index,item)=>{
      console.log('this is changeHandle')
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
    // onAddPosts:(param)=>dispatch(addPosts(param))
  };
}
const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  topics: makeSelectTopics(),
});

export default connect(mapStateToProps, mapDispatchToProps)(YubaHomepage);
