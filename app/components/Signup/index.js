/**
*
* Signup
*
*/

import React from 'react';

import styles from './styles.css';
import Heading from './../Heading/index';
import ResponsiveFormSegment from './../ResponsiveFormSegment/index';
import Input from './../Input/index';
import Button from './../Button/index';

class Signup extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className={styles.Grid}>
        {/* <div className={`${styles.Grid} ${styles.Grid1Of2}`}>
          <div className={styles.border}>Hello</div>
          <div className={styles.border}>Saurav</div>
        </div> */}
        <div className={`${styles.Grid} ${styles.Grid1Of3}`}>
          {/* <div className={`${styles.border} ${styles.Grid1Of3_remove2}`}>I Will Remove Second</div>
          <div className={`${styles.border} ${styles.Grid1Of3_remove1}`}>I Will Remove First</div>
          <div className={`${styles.border} ${styles.Grid1Of3_remove3}`}>I Will Remove At Last</div> */}
          <div className={`${styles.border}`}>Stack Behavior</div>
          <div className={`${styles.border} ${styles.Grid1Of3_remove1}`}>1st</div>
          <div className={`${styles.border}`}>Stack Behavior</div>
          <div className={`${styles.border}`}>Stack Behavior</div>
        </div>
      </div>
    );
  }
}

export default Signup;


// <div className={`${styles.Grid} ${styles.Signup}`}>

//   <div className={`${styles.Engine}`}>
//     <Heading size={2}>
//       Raisehand
//     </Heading>
//     <Heading size={6} color="lightgrey">
//       <span className={styles.change} />
//     </Heading>
//   </div>

//   <ResponsiveFormSegment
//     left={
//       <div>
//           Something here
//       </div>
//     }
//     formName="Signup"
//     right={
//       <div>
//           <Input 
//             name="firstname"
//             type="text"
//             errormessage="Check firstname field"
//             placeholder="First Name"
//             value="Gaurav"
//           />
//           <Input 
//             name="lastname"
//             type="text"
//             errormessage="Check lastname field"
//             placeholder="Last Name"
//             value="Gupta"
//           />
//           <Input 
//             name="password"
//             type="password"
//             errormessage="Check password field"
//             placeholder="Password"
//             value="123456"
//           />
//           <Input 
//             name="password"
//             type="password"
//             errormessage="Check confirm password field"
//             placeholder="Confirm Password"
//             value="123456"
//           />
//           <Input 
//             name="gender"
//             errormessage="Check gender field"
//             placeholder="Select Gender"
//             value="Male"
//           />
//           <Input 
//             name="phone"
//             errormessage="Check mobile number field"
//             placeholder="Enter Phone No."
//             value="123456"
//           />
//           <Input
//             name="address"
//             errormessage="Check address field"
//             placeholder="Enter Address"
//             value="Main Street, NY"
//           />
//           <Input
//             name="iam"
//             errormessage="Check IAM field"
//             placeholder="I am"
//             value="Student"
//           />
//       </div>
//     }
//     actions={[
//       <Heading key="1" size={6} color="grey">
//         <div className={styles.Engine}>
//         <input type="checkbox" />
//         <Heading size={6} color="grey">
//           I agree all T&C
//         </Heading>
//         </div>
//       </Heading>,
//       <Button key="2" clickable type="right">Signup</Button>
//     ]}
//   />

//   <div className={`${styles.Grid} ${styles.RegLink}`}>
//     <Heading size={6} color="grey">
//       have an account ? <a href="#signip"> Login </a>
//     </Heading>
//   </div>
//   <div className={`${styles.Grid} ${styles.Footer}`}>
//     <Heading size={6} color="lightgrey">
//       A GauravGupta Production &copy; 2019
//     </Heading>
//   </div>
// </div>