/**
*
* Tab
*
*/

import React from 'react';

import styles from './styles.css';

class Tab extends React.Component { // eslint-disable-line react/prefer-stateless-function
  // static propTypes = {
  //   activeTab: React.PropTypes.string.isRequired,
  //   label: React.PropTypes.string.isRequired,
  //   onClick: React.PropTypes.func.isRequired,
  // }

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let style = styles.tabListItem;

    if(activeTab === label) {
      style += ' ' + styles.tabListActive;
    }

    return (
      <div className={styles.tab}>
        <li
          className={style}
          onClick={onClick}
        >
          {label}
        </li>
      </div>
    );
  }
}

export default Tab;
