import React, { useState } from 'react'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
function AppointmentBanner({date, setDate}) {

  
  return (
    <div>
      <div class="hero min-h-screen px-16 ">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='chair' />
          <div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
            />
          </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default AppointmentBanner