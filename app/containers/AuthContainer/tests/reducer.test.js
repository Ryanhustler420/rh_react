import expect from 'expect';
import authContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('authContainerReducer', () => {
  it('returns the initial state', () => {
    expect(authContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
