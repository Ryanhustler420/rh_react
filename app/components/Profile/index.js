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
import Heading from './../Heading/index';
import Icon from './../Icon/index';

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
        <div className={styles.card}>
          <div className={`${styles.grid} ${styles.BasicInfoGrid}`}>

            <Heading size={3} color="#666666">
              Gaurav Gupta
            </Heading>
            
            <div className={styles.Left}>
              <Heading size={6} color="#666666">
                  Jamshedpur, Jharkhand, India
              </Heading>  
            </div>

            <Heading size={3} color="#666666">
               <a href="#/Job/Programmer">Programmer, Software Designer</a>
            </Heading>

            <div className={`${styles.Left}`}>
              <Heading size={6} color="#666666">
                <Icon ImageUrl="https://res.cloudinary.com/dcalvdelc/image/upload/v1561897718/Tag.png">
                  &nbsp;Bookmark him
                </Icon>
              </Heading>
            </div>
          </div>       

          {/************************* Actions *****************************/}
          <div className={`${styles.grid} ${styles.Actions}`}>
            <Heading size={5} color='#666666'>
              <Icon ImageUrl="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918107/Message.png">
                &nbsp; Message
              </Icon>
            </Heading>
            <Heading size={5} color="#666666">I Know Him &#10003;</Heading>
            <div className={styles.Left}>
              <Heading size={6} color="#bdb8b8">Report user</Heading>
            </div>
          </div>

          {/************************* Social Buttons *****************************/}
          <div className={`${styles.grid} ${styles.SocialIcons}`}>
            <Heading size={5} color="#666666">
              <Icon ImageUrl="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918106/Facebook.png" />
            </Heading>
            <Heading size={5} color="#666666">
              <Icon ImageUrl="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918107/twitter.png" />
            </Heading>
            <Heading size={5} color="#666666">
              <Icon ImageUrl="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918106/insta.png" />
            </Heading>
            <Heading size={5} color="#666666">
              <Icon ImageUrl="https://res.cloudinary.com/dcalvdelc/image/upload/v1561918106/git.png" />
            </Heading>
          </div>

          {/************************* Tabs *****************************/}
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
                Socket.io Event Will Be Populate Here....
              </div>
              <div label="Upgrade Skills">
                Respected Courses Populate here....
              </div>
            </Tabs>
          </div>
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
