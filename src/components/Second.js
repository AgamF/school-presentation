import React from 'react';
import markpost from '../images/twitterimg1.png';
import markpost2 from '../images/twitterimg2.png';
import markpost3 from '../images/twitterimg3.png';
import '../styles/Second.css';

function Second({ navigateToThird }) {
  return (
    <div className='second-div'>
      <h1 className='animate__animated animate__backInDown'>"כתבה ראשונה: "זה לא מדויק, זה מתסיס ולא מכבד</h1>
      <div className='animate__animated animate__backInLeft'>
        <img src={markpost} />
        <div>
          <img src={markpost2} />
          <img src={markpost3} />
        </div>
      </div>
      <p className='animate__animated animate__backInRight'>
        בכתבה שפורסמה באתר מאקו, ניתן לראות את הפוסטים של השחקן המפורסם מארק רפאלו ברשת החברתית טוויטר, כאשר הוא מתייחס לסכסוך הישראלי-פלסטיני ובא בהצהרה <br/> כי ישראל מבצעת בעיניו "רצח עם". השחקן מביע התנגדות להתנהלות של ישראל בשטחים ומציג נתונים בחשבון הטוויטר שלו על פציעות ומיתות של פלסטינים וקורא להפסיק את ה-"כיבוש הישראלי". לאחר מכן השחקן הביע התנצלות וחרטה ופרסם את התנצלותו בטוויטר על כך כי לקרוא שישראל מבצעת רצח עם היא אמירה  לפיו: "מסיתה ומתסיסה ולא מכובדת".ס
      </p>
      <button className='btn' onClick={navigateToThird}>שקופית הבאה</button>
    </div>
  );
}

export default Second;