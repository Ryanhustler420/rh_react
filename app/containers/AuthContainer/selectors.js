import { createSelector } from 'reselect';

/**
 * Direct selector to the authContainer state domain
 */
const selectAuthContainerDomain = () => state => state.get('authContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AuthContainer
 */

const selectAuthContainer = () => createSelector(
  selectAuthContainerDomain(),
  (substate) => substate.toJS()
);

export default selectAuthContainer;
export {
  selectAuthContainerDomain,
};
