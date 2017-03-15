
/*
 * YubaHomepage actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_TOPICS,
  LOAD_TOPICS_SUCCESS,
  LOAD_TOPICS_ERROR,
  ADD_POSTS,
  ADD_POSTS_SUCCESS,
  ADD_POSTS_ERROR,
} from './constants';

export function loadPosts() {
  return {
    type: LOAD_POSTS,
  };
}


export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}


export function postsLoadError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error,
  };
}

export function loadTopics() {
  return {
    type: LOAD_TOPICS,
  };
}


export function topicsLoaded(topics) {
  return {
    type: LOAD_TOPICS_SUCCESS,
    topics,
  };
}


export function topicsLoadError(error) {
  return {
    type: LOAD_TOPICS_ERROR,
    error,
  };
}

/**
 * 添加帖子
 * @param {topicId,lastQId} param 
 */
export function addPosts(param) {
  return {
    type: ADD_POSTS,
    param,
  };
}

export function addPostsSuccess(data) {
  return {
    type: ADD_POSTS_SUCCESS,
    ...data
  };
}

export function addPostsError(error) {
  return {
    type: ADD_POSTS_ERROR,
    error,
  };
}


