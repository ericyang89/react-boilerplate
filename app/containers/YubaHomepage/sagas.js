// import { take, call, put, select } from 'redux-saga/effects';

// // Individual exports for testing
// export function* defaultSaga() {
//   // See example in containers/HomePage/sagas.js
// }

// // All sagas to be loaded
// export default [
//   defaultSaga,
// ];



/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import {makeSelectAddPostParam} from "./selectors"
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
import { 
  loadPosts, 
  postsLoaded,
  postsLoadError , 
  loadTopics, 
  topicsLoaded,
  topicsLoadError ,
  addPostsSuccess,
  addPostsError,
  addPosts,
} from './actions';


import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getPosts() {
  // Select username from store
  const requestURL = `http://localhost:3001/posts`;

  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    yield put(postsLoaded(posts));
  } catch (err) {
    yield put(postsLoadError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* getPostsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_POSTS, getPosts);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

/**
 * Github repos request/response handler
 */
export function* getTopics() {
  // Select username from store
  const requestURL = `http://localhost:3001/topics`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(addPosts({topicId:data[0].topicId,lastQid:null}));
    yield put(topicsLoaded(data));
  } catch (err) {
    yield put(topicsLoadError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* getTopicsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_TOPICS, getTopics);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* addPostSaga() {

  //TODO  需要把参数拼到 url
  const param = yield select(makeSelectAddPostParam());
  const requestURL = `http://localhost:3001/posts?${JSON.stringify(param)}`;

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(addPostsSuccess({
      posts:data,
      topicId:param.topicId,
    }));
  } catch (err) {
    yield put(addPostsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* addPostsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution

  const watcher = yield takeLatest(ADD_POSTS, addPostSaga);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}





// Bootstrap sagas
export default [
  getPostsData,
  getTopicsData,
  addPostsData,
];