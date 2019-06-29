import expect from 'expect';
import profileContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('profileContainerReducer', () => {
  it('returns the initial state', () => {
    expect(profileContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
