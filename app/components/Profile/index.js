/**
*
* Profile
*
*/

import React from 'react';

import styles from './styles.css';
import ImageCard from './../ImageCard/index';
import Tabs from './../Tabs/index';
import Legend from './../Legend/index';

function Profile () {
  return (
      <div className={`${styles.grid} ${styles.profile}`}>
        {/************************* Avatar && Sneak Peek *****************************/}
          <div className={styles.card}>
            <ImageCard AvatarUrl={"https://avatars2.githubusercontent.com/u/25275856?s=460&v=4"} />
            <Legend label={'Sneak Peek'} list={['Name: Gaurav Gupta','Gender: Male','Email: gouravgupta840@gmail.com',
              'hobbies: Programming, Gaming, Music','Address: Jamshedpur Jharkhand India']}/>
            <Legend type="work" list={[['TCS','Internship', '2 Months', 'Yamaha Showroom, NH33, Jamshedpur'],['My FutureBook','Internship', '2 Months', 'AIDIA, Adityapur, Jamshedpur']]} label="Work" />
            <Legend label={'Skills'} list={['Marketing','Designer','Public Speaker','Computer','Programmer']}/>
            <Legend label={'Qualifications'} list={['MBA in Marketing','BBA','Public Speaker']}/>
            <Legend label={'Agree with Package'} list={['1.8 Lakh Pa']}/>
          </div>
        {/************************* Basic Info *****************************/}
        {/* BASIC INFO */}
        <div className={styles.card}>
          <div className={`${styles.grid} ${styles.BasicInfoGrid}`}>
            <div className={styles.defaultStyle}>
              <h1 className={styles.name}>Gaurav Gupta</h1>
            </div>
            <div className={`${styles.Left} ${styles.leastImportant}`}><small>
                Jamshedpur, Jharkhand, India
            </small></div>
            <div className={styles.defaultStyle}>
              <h3>
                <a href="#/Job/Programmer">Programmer</a>
              </h3>
            </div>
            <div className={`${styles.Left} ${styles.defaultStyle}`}>
              <h5>
                <img src="https://res.cloudinary.com/dcalvdelc/image/upload/v1561897718/Tag.png" />
                &nbsp;Bookmark him
              </h5>  
            </div>
          </div>       
          {/* BASIC INFO ENDS */}
          {/************************* Ratings *****************************/}
          {/* RATING GRID */}
          <div className={`${styles.grid} ${styles.RatingGrid}`}>
            <small className={styles.defaultStyle}>HOW GOOD HE IS ?
              <small> <a href="/user/gauravgupta840/comments"> (read comments) </a> </small>
            </small>
          </div>
          {/* RATING GRID ENDS */}
          {/************************* Actions *****************************/}
          {/* ACTIONS GRID */}
          <div className={`${styles.grid} ${styles.Actions}`}>
            <div className={styles.defaultStyle}>
              <h5>
                <img src="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918107/Message.png"/>
              </h5>
            </div>
            <small className={`${styles.defaultStyle}`}>Message</small>
            <small className={`${styles.Left} ${styles.defaultStyle} `}> I Know Him &#10003; </small>
            <small className={`${styles.Left} ${styles.leastImportant}`}>Report user</small>
          </div>
          {/* ACTIONS GRID ENDS */}
          {/* SOCIAL ICONS */}
          <div className={`${styles.grid} ${styles.SocialIcons}`}>
            <div className={styles.defaultStyle}>
              <h5>
                <img src="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918106/Facebook.png"/>
              </h5>
            </div>
            <div className={styles.defaultStyle}>
              <h5>
                <img src="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918107/twitter.png"/>
              </h5>
            </div>
            <div className={styles.defaultStyle}>
              <h5>
                <img src="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918106/insta.png"/>
              </h5>
            </div>
            <div className={styles.defaultStyle}>
              <h5>
                <img src="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918106/git.png"/>
              </h5>
            </div>
          </div>
          {/* SOCIAL ICONS ENDS */}
          {/* TABS */}
          <div className={`${styles.Padded}`}>
            <div className={`${styles.grid} ${styles.Tabs}`}>
              <Tabs>
                <div label="Spider Post">
                  <br />
                  Dolore sunt esse duis ullamco. Voluptate eu sit excepteur aute commodo Lorem aliqua elit occaecat esse. Mollit nulla eiusmod aliqua qui in excepteur sint dolore eiusmod dolore incididunt occaecat laborum incididunt. Duis enim mollit ipsum anim anim incididunt adipisicing mollit ipsum commodo mollit. Irure ipsum do fugiat irure occaecat consequat. Deserunt ex mollit ipsum voluptate.
                  Dolore sunt esse duis ullamco. Voluptate eu sit excepteur aute commodo Lorem aliqua elit occaecat esse. Mollit nulla eiusmod aliqua qui in excepteur sint dolore eiusmod dolore incididunt occaecat laborum incididunt. Duis enim mollit ipsum anim anim incididunt adipisicing mollit ipsum commodo mollit. Irure ipsum do fugiat irure occaecat consequat. Deserunt ex mollit ipsum voluptate.
                  Dolore sunt esse duis ullamco. Voluptate eu sit excepteur aute commodo Lorem aliqua elit occaecat esse. Mollit nulla eiusmod aliqua qui in excepteur sint dolore eiusmod dolore incididunt occaecat laborum incididunt. Duis enim mollit ipsum anim anim incididunt adipisicing mollit ipsum commodo mollit. Irure ipsum do fugiat irure occaecat consequat. Deserunt ex mollit ipsum voluptate.
                  Dolore sunt esse duis ullamco. Voluptate eu sit excepteur aute commodo Lorem aliqua elit occaecat esse. Mollit nulla eiusmod aliqua qui in excepteur sint dolore eiusmod dolore incididunt occaecat laborum incididunt. Duis enim mollit ipsum anim anim incididunt adipisicing mollit ipsum commodo mollit. Irure ipsum do fugiat irure occaecat consequat. Deserunt ex mollit ipsum voluptate.Dolore sunt esse duis ullamco. Voluptate eu sit excepteur aute commodo Lorem aliqua elit occaecat esse. Mollit nulla eiusmod aliqua qui in excepteur sint dolore eiusmod dolore incididunt occaecat laborum incididunt. Duis enim mollit ipsum anim anim incididunt adipisicing mollit ipsum commodo mollit. Irure ipsum do fugiat irure occaecat consequat. Deserunt ex mollit ipsum voluptate.
                  Dolore sunt esse duis ullamco. Voluptate eu sit excepteur aute commodo Lorem aliqua elit occaecat esse. Mollit nulla eiusmod aliqua qui in excepteur sint dolore eiusmod dolore incididunt occaecat laborum incididunt. Duis enim mollit ipsum anim anim incididunt adipisicing mollit ipsum commodo mollit. Irure ipsum do fugiat irure occaecat consequat. Deserunt ex mollit ipsum voluptate.
                </div>
                <div label="Events">
                  After 'while, <em>Crocodile</em>!
                </div>
                <div label="Upgrade Skills">
                  Nothing to see here, this tab is <em>extinct</em>!
                </div>
                <div label="Community">
                  Nothing to see here, this tab is <em>extinct</em>!
                </div>
              </Tabs>
            </div>
          </div>
          {/* TABS ENDS */}
        </div>
        <div id="notification" className={styles.card}>
          <div className={`${styles.grid} ${styles.Notification}`}>
            <h2>Real Time Notification(s)</h2>
          </div>
        </div>
      </div>
  );
}

export default Profile;
