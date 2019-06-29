/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  links: [
    {
      name: 'Find Shops',
      url: '/findShops'
    },
    {
      name: 'Find Products',
      url: '/findProducts'
    },
    {
      name: 'Find Jobs',
      url: '/findJobs'
    },
    {
      name: 'Find Peoples',
      url: '/findPeoples'
    },
    {
      name: 'Settings',
      url: '/userSetting'
    },
  ],
  avatar: 'https://avatars2.githubusercontent.com/u/25275856?s=460&v=4',
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
