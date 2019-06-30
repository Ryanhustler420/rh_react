/*
 *
 * ProfileContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectProfileContainer from './selectors';
import Profile from './../../components/Profile/index';

export class ProfileContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Profile {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = selectProfileContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
