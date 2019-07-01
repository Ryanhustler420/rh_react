/*
 *
 * AuthContainer
 *
 */

import React from './node_modules/react';
import { connect } from './node_modules/react-redux';
import selectAuthContainer from './selectors';
import Login from '../../components/Login/index';
// import Signup from './../../components/Signup/index';

export class AuthContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Login {...this.props}/>
        {/* <Signup {...this.props}/> */}
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
