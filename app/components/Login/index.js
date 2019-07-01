/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
import Icon from './../Icon/index';
import Heading from './../Heading/index';
import Input from './../Input/index';
import HandShake from './../HandShake/index';
import Button from './../Button/index';
import ResponsiveFormSegment from './../ResponsiveFormSegment/index';

class Login extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className={`${styles.Grid} ${styles.login}`}>
        <div className={`${styles.Grid} ${styles.Engine}`}>
          <Heading size={6} color="lightgrey">
            <span className={styles.change} />
          </Heading>
        </div>
        <div className={`${styles.Grid} ${styles.Brand}`}>
          <HandShake>
            <Icon
              ImageUrl="https://res.cloudinary.com/dcalvdelc/image/upload/v1561832703/hand2.png"
              size="5rem"
            />
          </HandShake>
          <Heading size={2}>
            Raisehand
          </Heading>
        </div>

        <ResponsiveFormSegment
          left={
            <div>
              <Heading size={6} color="lightgrey">
                Change is the only constant - anonymous
              </Heading>
              <Heading size={4} color="grey">
                Speed Up You Sell With Us.
              </Heading>
              <Heading size={5} color="grey">
                Understand
              </Heading>
              <Heading size={6}>
                “The way up and the way down are one and the same. Living and dead,
                {' '}
                waking and sleeping, young and old, are the same.” - Unknown
              </Heading>
              <Heading>
                <a href="#readmore">Read More &rarr; </a>
              </Heading>
            </div>
          }
          formName="Login Suite"
          right={
            <div>
              <div>
                <Input
                  name="Email"
                  // danger
                  // success={false}
                  type="email"
                  errormessage="Email is wrong."
                  placeholder="Email"
                  value=""
                />
                <Input
                  name="Password"
                  // danger={false}
                  // success={true}
                  value="system"
                  errormessage="Password is wrong"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
          }
          actions={[
              <Heading key="1" size={6} color="grey">
                Forgot Password? &nbsp;
                <a href="#reset">Reset</a>
              </Heading>,
              <Button key="2" clickable type="right">Login</Button>
          ]}
        />

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
