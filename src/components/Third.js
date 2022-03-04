import React from 'react';
import '../styles/Third.css';
import instaimg from '../images/instaimg.png';
import instaimg2 from '../images/instaimg2.png';

function Third({ navigateToFourth }) {
  return (
    <div className='third-div'>
      <h1 className='animate__animated animate__backInDown'>"כתבה שנייה: "האחיות חדיד במסע הכפשה נגד ישראל</h1>
      <div className='animate__animated animate__backInRight'>
        <img src={instaimg} />
        <img src={instaimg2} />
      </div>
      <p className='animate__animated animate__backInLeft'>
      בכתבה שפורסמה בעיתון ישראל היום, ניתן לראות את התגובות של האחיות המפורסמות ממוצא פלסטיני, האחיות חדיד, בנוגע להתנהלות של ישראל בכלל וצה"ל בפרט.  בנוסף, האחיות חדיד מציגות את המאבק הפרו-פלסטיני נגד ישראל והקידום של רעיון מדינת פלסטין. בחשבון האינסטגרם שלהן הן מציגות טענות ודעות לגבי ישראל לפי השקפת העולם שלהן. כתבה זו קשורה לנושא מאחר והביקורת של האחיות חדיד אכן מגבשת הבניה חברתית  על ישראל בקהלים ברחבי העולם, וייתכן כי ימשכו אחריהן תומכים רבים. 
      </p>
      <button className='btn' onClick={navigateToFourth}>שקופית הבאה</button>
    </div>
  );
}

export default Third;