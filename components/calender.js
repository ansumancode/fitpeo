import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} allowPartialRange={false} goToRangeStartOnSelect={false} selectRange={false}/>
    </div>
  );
}

export default Calender