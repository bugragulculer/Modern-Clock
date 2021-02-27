import './App.css';
import { useEffect, useState } from 'react'

// Column Function: Takes two inputs as max value and current value, maps them in arrays. 
function Column({max, current}) {
  return (
    <div
      className='column'
      data-id={current}
      // Style part creates the animation of the current value. Change the below number -30 with the column_height value in App.css file. (make it equal to each other)
      // It takes the current value and multiplies with the -30 value.
      style={{ top: `${-30 * current}px` }}
    >
      {Array(max + 1)
        .fill("")
        .map((_e, i) => (
          <div 
            key={i}
            className={`number${current === i.toString() ? " active": ""}`}
          >
            {i}
          </div>
        ))}
      </div>
  );
}

function splitNum(num) {
  return ('0' + num.toString()).slice(-2).split('');
}

export default function App() {
  const [date, setDate] = useState(new Date());

  const s = splitNum(date.getSeconds()),
    m = splitNum(date.getMinutes()),
    h = splitNum(date.getHours());
  
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <div className='App'>
      <Column max={2} current={h[0]} />
      <Column max={9} current={h[1]} />
      <p className='spacer' >:</p>
      <Column max={5} current={m[0]} />
      <Column max={9} current={m[1]} />
      <p className='spacer' >:</p>
      <Column max={5} current={s[0]} />
      <Column max={9} current={s[1]} />
    </div>
  );
}