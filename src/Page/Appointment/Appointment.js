import React, { useState } from 'react'
import Footer from '../Shared/Footer'
import AppointmentBanner from './AppointmentBanner'
import AvailableAppointments from './AvailableAppointments'
import Service from './Service';

function Appointment() {
  const [date, setDate] = useState(new Date());

  return (
    <>
    <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
    <AvailableAppointments date={date}></AvailableAppointments>
    
    <Footer></Footer>

    </>
  )
}

export default Appointment