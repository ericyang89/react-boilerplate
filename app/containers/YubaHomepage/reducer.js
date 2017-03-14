/*
 *
 * YubaHomepage reducer
 *
 */

import {
  fromJS
} from 'immutable';
import {
 LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  posts: null,
  topics: null,
});

function yubaHomepageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('posts', action.posts);
    case LOAD_POSTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_TOPICS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_TOPICS_SUCCESS:
    let topics=action.topics.map(item=>Object.assign(item,{posts:[]}))
      return state
        .set('loading', false)
        .set('error', false)
        .set('topics', topics);
    case LOAD_TOPICS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
        
    default:
      return state;
  }
}

export default yubaHomepageReducer;
