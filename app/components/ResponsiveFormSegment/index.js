/**
*
* ResponsiveFormSegment
*
*/

import React from 'react';

import styles from './styles.css';
import Heading from './../Heading/index';

class ResponsiveFormSegment extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * 
   * @param param1 left - the left entire content will be populate here. make sure you wrap up the contant
   *                      in a variable and than pass that to This component
   * @param param2 formName - The label of the form for example 'Login' || 'Signup'
   * @param param3 right - the Right entire content will be populate here. make sure you wrap up the contant
   *                      in a variable and than pass that to This component
   * @param param4 actions - is a area which contain Actions Compoent Like 'Submit Button' || 'Forgot Password'
   * 
   */
  render () {
    return (
      <div className={styles.responsiveFormSegment}>
        <div className={`${styles.Grid} ${styles.Form}`}>

          <div
            className={styles.StupidDialog}
            style={{borderRight: '5px solid lightgray'}}
          >
            {this.props.left}
          </div>

          <div className={`${styles.Grid} ${styles.LoginForm}`}>
            <Heading size={3} pad="1rem .7rem" color="grey">
              {this.props.formName}
            </Heading>

            <div className={`${styles.Grid} ${styles.Split}`}>
              <div>{this.props.right}</div>
            </div>

            <div className={`${styles.Grid} ${styles.Actions}`}>
              {this.props.actions}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ResponsiveFormSegment;
