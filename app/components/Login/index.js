/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
import Icon from './../Icon/index';
import Heading from './../Heading/index';

class Login extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className={`${styles.Grid} ${styles.login}`}>
        <div className={`${styles.Grid} ${styles.Engine}`}>
          <Heading size={6} color="lightgrey">
            Marketplace Engine
          </Heading>
        </div>
        <div className={`${styles.Grid} ${styles.Brand}`}>
          <Icon
            ImageUrl="https://res.cloudinary.com/dcalvdelc/image/upload/v1561832703/hand2.png"
            size="5rem"
          />
          <Heading size={2}>
            Raisehand
          </Heading>
        </div>
        <div className={`${styles.Grid} ${styles.Form}`}>
          <div style={{
            borderRight: '5px solid lightgray'
          }}>
            <Heading size={6} color="lightgrey">
              Change is the only constant - anonymous
            </Heading>
            <Heading size={4} color="grey">
              Speed Up You Sell With Us.
            </Heading>
            &nbsp; Understand <br />
            <Heading size={6}>
              “The way up and the way down are one and the same. Living and dead, 
              waking and sleeping, young and old, are the same.” - Unknown
            </Heading>
            <Heading>
              <a href="#readmore">Read More &rarr; </a>
            </Heading>
          </div>
          <div>
            <Heading size={3} pad="1rem .7rem" color="grey">Login Suite</Heading>

          <div className={`${styles.Grid} ${styles.Split}`}>

            <div>
              {/* Login Input Fields Goes Here */}
              <div className={`${styles.InputField}`}>
                <input /* className={styles.danger} */ type="email" placeholder="EMAIL ID" />
                <Heading pad=".5rem" size={6} color="red">
                  {/* &nbsp; This username does not exist. */}
                </Heading>
              </div>
              <div className={`${styles.InputField}`}>
                <input /* className={styles.success} */ type="password" placeholder="PASSWORD" />
                <Heading pad=".5rem" size={6} color="red">
                  {/* &nbsp; Your password is wrong. */}
                </Heading>
              </div>
            </div>

          </div>


            <div className={`${styles.Grid} ${styles.Actions}`}>
              <Heading size={6} color="grey">
                Forgot Password? &nbsp;
                <a href="#reset">Reset</a>
              </Heading>
              <div>Login</div>
            </div>

          </div>
        </div>
        <div className={`${styles.Grid} ${styles.RegLink}`}>
          <Heading size={6} color="grey">
            New here ? <a href="#signip"> Signup </a>
          </Heading>
        </div>
        <div className={`${styles.Grid} ${styles.Footer}`}>
          <Heading size={6} color="lightgrey">
            A GauravGupta Production &copy; 2019
          </Heading>
        </div>
      </div>
    );
  }
}

export default Login;
