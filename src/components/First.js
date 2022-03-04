import React from 'react';
import '../styles/First.css';
import missleImg from '../images/missles.jpg';
import rubbles from '../images/rubbles.jpg';
import fights from '../images/fights.jpg';
import tank from '../images/tank.jpg';
import flag from '../images/flag.jpg';

function First({ navigateToSecond }) {
  return (
    <div>
      <h1 className='animate__animated animate__backInDown' id='title'>תגובות ידוענים למבצע שומר חומות</h1>
      <div className='p-div'>
        <p className='animate__animated animate__backInUp'>
          .בעבודת גמר שלי יצאתי לבדוק כיצד הגיבו ידוענים מרחבי העולם על ההתנהלות של ישראל בזמן מבצע שומר חומות <br/>​
​
          ?מדוע נושא זה <br/>​
          מכיוון שמדובר בנושא אקטואלי חשוב המגבש דעת קהל בעולם  כלפי ישראל, וחשוב לדבר על כך​ <br/>
        </p>
        <div className='animate__animated animate__backInLeft'>
          <img src={missleImg} />
          <img src={rubbles} />
          <img src={fights} />
          <img src={tank} />
          <img src={flag} />
        </div>
        <button className='btn' onClick={navigateToSecond}>שקופית הבאה</button>
      </div>
    </div>
  );
}

export default First;