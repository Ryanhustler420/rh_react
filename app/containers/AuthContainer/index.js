/*
 *
 * AuthContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAuthContainer from './selectors';

export class AuthContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
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
