/**
*
* Profile
*
*/

import React from 'react';

import styles from './styles.css';
import Grid from '../ReusableGrid/Grid';
import ImageCard from './../ImageCard/index';

function Profile () {
  return (
      <div className={`${styles.grid} ${styles.profile}`}>
      {/************************* Avatar && Sneak Peek *****************************/}
        <div className={styles.card}>
          {/* LEFT START */}
          <ImageCard AvatarUrl={"https://avatars2.githubusercontent.com/u/25275856?s=460&v=4"} />
          <div className={styles.Padded}>
            <fieldset className={styles.Fieldset}>
              <legend className={styles.Legend}> &nbsp; Sneak peek &nbsp; </legend>
              <div className={styles.Padded}>
                <div className={styles.UL}>
                  <span>Name: Gaurav Gupta</span><br />
                  <span>Email: gouravgupta420@gmail.com</span><br />
                  <span>Gender: Male</span><br />
                  <span>Hobbie(s): [ programming, shopping, foodie ] </span><br />
                  <span>Date of birth: 21st July 1997</span>
                </div>
              </div>
            </fieldset>
          </div>
          <div className={styles.Padded}>
            <fieldset className={styles.Fieldset}>
              <legend className={styles.Legend}> &nbsp; Work &nbsp; </legend>
              <div className={styles.Padded}>
                <div className={styles.UL}>
                  <h2>TCS</h2>
                  <span>- Internship</span>
                  <h4>&#10687; 2 Months</h4>
                  <blockquote>
                    Yamaha Showroom, NH33, Jamshedpur.
                  </blockquote>
                </div>
              </div>
              <div className={styles.Padded}>
                <div className={styles.UL}>
                  <h2>My FutureBook</h2>
                  <span>- Internship</span>
                  <h4>&#10687; 2 Months</h4>
                  <blockquote>
                    AIDIA, Adityapur, Jamshedpur
                  </blockquote>
                </div>
              </div>
            </fieldset>
          </div>
          <div className={styles.Padded}>
            <fieldset className={styles.Fieldset}>
              <legend className={styles.Legend}> &nbsp; Skills &nbsp; </legend>
              <div className={styles.Padded}>
                <ul className={styles.Padded}>
                  <li>Marketing</li>
                  <li>Designer</li>
                  <li>Public Speaker</li>
                  <li>Computer</li>
                  <li>Programmer</li>
                </ul>
              </div>
            </fieldset>
          </div>
          <div className={styles.Padded}>
            <fieldset className={styles.Fieldset}>
              <legend className={styles.Legend}> &nbsp; Qualifications &nbsp; </legend>
              <div className={styles.Padded}>
                <ul className={styles.Padded}>
                  <li>MBA in Marketing</li>
                  <li>BBA</li>
                  <li>Public Speaking</li>
                </ul>
              </div>
            </fieldset>
          </div>
          <div className={styles.Padded}>
            <fieldset className={styles.Fieldset}>
              <legend className={styles.Legend}> &nbsp; Agree with Package &nbsp; </legend>
              <div className={styles.Padded}>
                <ul className={styles.Padded}>
                  <li>1.8 Lakh Pa</li>
                </ul>
              </div>
            </fieldset>
          </div>
        </div>
        {/* LEFT END */}
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
                Bookmark him
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
            <h2 className={styles.defaultStyle}>
              <h5>
                <img src="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918107/Message.png"/>
              </h5>
            </h2>
            <small className={`${styles.defaultStyle}`}>Message</small>
            <small className={`${styles.Left} ${styles.defaultStyle} `}> I Know Him &#10003; </small>
            <small className={`${styles.Left} ${styles.leastImportant}`}>Report user</small>
          </div>
          {/* ACTIONS GRID ENDS */}
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
