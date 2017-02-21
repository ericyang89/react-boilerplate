/*
 *
 * YubaHomepage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {makeSelectPosts} from './selectors';
import GroupList from 'components/GroupList';
import PostItem from 'components/PostItem';
import {loadPosts} from './actions.js';

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
  }
  render() {
    return (
      <div>
      <GroupList/>
      {getPosts(this.props.posts)}
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
  };
}
const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

export default connect(mapStateToProps, mapDispatchToProps)(YubaHomepage);
