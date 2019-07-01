/**
*
* Input
*
*/

import React from 'react';

import styles from './styles.css';
import Heading from './../Heading/index';

class Input extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  state = {
    name: '',
    value: ''
  };

  componentWillReceiveProps(nextProp) {
    if(nextProp.value) {
      if(this.props.value !== nextProp.value){
        this.setState({
          name: this.props.name,
          value: nextProp.value,
        })
      }
    }
  }

  changeState = e => this.setState({
    name: this.props.name,
    value: e.target.value,
  }, () => {
    // do something after state changes
  })

  render () {
    /**
     * If you are passing danger as 'TRUE'
     * Than, make sure you also pass the 'message'
     * And If not Passing Any Message than default 
     * Message will be show.
     * 
     * @param param0 success - make border green 
     * @param param1 danger - make border red 
     * @param param2 value - pass any value from parent component 
     * @param param3 type - type of input field [text, email, password, number]
     * @param param4 placeholder - pass static text for reference. inside input field : [enter username...] 
     * @param param5 errormessage - pass errormessage text for label if error occure
     */

    const {success, danger, value, type, placeholder, errormessage} = this.props;

    let style = '';

    if (success) {
      style = styles.success;
    } else if (danger) {
      style = styles.danger;
    }

    return (
      <div className={styles.input}>
        <div className={`${styles.InputField}`}>
          <input
            className={style}
            onChange={e => this.changeState (e)}
            value={this.state.value}
            type={type}
            placeholder={placeholder}
          />
          <Heading pad=".5rem" size={6} color="red">
            {!success && danger && ` ${errormessage}`}
          </Heading>
        </div>
      </div>
    );
  }
}

Input.defaultProps = {};

export default Input;
