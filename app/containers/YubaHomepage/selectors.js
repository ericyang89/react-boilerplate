import {
  createSelector
} from 'reselect';

/**
 * Direct selector to the yubaHomepage state domain
 */
const selectYubaHomepageDomain = () => (state) => state.get('yubaHomepage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by YubaHomepage
 */


const makeSelectLoading = () => createSelector(
  selectYubaHomepageDomain(),
  (subState) => subState.get('loading')
);

const makeSelectError = () => createSelector(
  selectYubaHomepageDomain(),
  (subState) => subState.get('error')
);

const makeSelectPosts = () => createSelector(
  selectYubaHomepageDomain(),
  (subState) => subState.get('posts')
);


export default selectYubaHomepageDomain;
export {
  selectYubaHomepageDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
};





// /**
//  * The global state selectors
//  */

// import { createSelector } from 'reselect';

// const selectGlobal = (state) => state.get('global');

// const makeSelectCurrentUser = () => createSelector(
//   selectGlobal,
//   (globalState) => globalState.get('currentUser')
// );

// const makeSelectLoading = () => createSelector(
//   selectGlobal,
//   (globalState) => globalState.get('loading')
// );

// const makeSelectError = () => createSelector(
//   selectGlobal,
//   (globalState) => globalState.get('error')
// );

// const makeSelectRepos = () => createSelector(
//   selectGlobal,
//   (globalState) => globalState.getIn(['userData', 'repositories'])
// );

// const makeSelectLocationState = () => {
//   let prevRoutingState;
//   let prevRoutingStateJS;

//   return (state) => {
//     const routingState = state.get('route'); // or state.route

//     if (!routingState.equals(prevRoutingState)) {
//       prevRoutingState = routingState;
//       prevRoutingStateJS = routingState.toJS();
//     }

//     return prevRoutingStateJS;
//   };
// };

// export {
//   selectGlobal,
//   makeSelectCurrentUser,
//   makeSelectLoading,
//   makeSelectError,
//   makeSelectRepos,
//   makeSelectLocationState,
// };
