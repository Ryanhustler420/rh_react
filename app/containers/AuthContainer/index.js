/*
 *
 * AuthContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAuthContainer from './selectors';
import Login from '../../components/Login/index';

export class AuthContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Login {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = selectAuthContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
