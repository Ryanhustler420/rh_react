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
    <div className={styles.profile}>
      <Grid gutter={['50px','25px']} rows={['auto']} columns={['300px', '600px', '230px']}>
        <div className={styles.card}>
          <ImageCard AvatarUrl={"https://avatars2.githubusercontent.com/u/25275856?s=460&v=4"} />
          <div className={styles.Padded}>
            <fieldset className={styles.Fieldset}>
              <legend className={styles.Legend}> &nbsp; Sneak peek &nbsp; </legend>
              <span>Name: Gaurav Gupta</span><br />
              <span>Email: gouravgupta420@gmail.com</span><br />
              <span>Gender: Male</span><br />
              <span>Hobbie(s): [ programming, shopping, foodie ] </span><br />
              <span>Date of birth: 21st July 1997</span>
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
        <div className={styles.card}>
          <Grid 
            alignItems={"center"} 
            gutter={['5px','5px']} 
            rows={['50px', '50px']} 
            columns={['200px', '320px']}
          >
            <div className={styles.defaultStyle}>
              <h1>Jhon Doe</h1>
            </div>
            <div className={`${styles.Left} ${styles.defaultStyle}`}><h4>
                Jamshedpur, Jharkhand, India
            </h4></div>
            <div className={styles.defaultStyle}>
              <h3>
                <a href="#/Job/Programmer">Programmer</a>
              </h3>
            </div>
            <div className={`${styles.Left} ${styles.defaultStyle}`}>
              <h5>
                Bookmark him
              </h5>  
            </div>
          </Grid>
        </div>
        <div className={styles.card}>
          Notifications
        </div>
      </Grid>
    </div>
  );
}

export default Profile;
