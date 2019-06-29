import { createSelector } from 'reselect';

/**
 * Direct selector to the profileContainer state domain
 */
const selectProfileContainerDomain = () => state => state.get('profileContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProfileContainer
 */

const selectProfileContainer = () => createSelector(
  selectProfileContainerDomain(),
  (substate) => substate.toJS()
);

export default selectProfileContainer;
export {
  selectProfileContainerDomain,
};
