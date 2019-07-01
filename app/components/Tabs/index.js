/**
*
* Tabs
*
*/

import React from 'react';

import styles from './styles.css';
import Tab from './../Tab/index';

class Tabs extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // static propTypes = {
  //   children: React.PropTypes.array().isRequired,
  // }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label, 
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab : tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab
      },
    } = this;
    return (
      <div className={styles.tabs}>
        <ol className={styles.tabList}>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className={styles.Content}>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
