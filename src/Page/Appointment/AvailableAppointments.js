import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookingModal from './BookingModal';
import Service from './Service';
function AvailableAppointments({ date }) {

  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/service')
    .then(res=> res.json())
    .then(date => setServices(date));
  },[])

  return (
    <>

      <div className='font-bold text-cyan-400 text-center'>
        Available Appointments on: {format(date, 'PP')}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grap-5'>
        {
          services.map(service=> <Service
              key={service.id}
              service={service}
              setTreatment={setTreatment}
            ></Service>)
        }
      </div>

      {treatment && 
        <BookingModal date={date} 
        treatment={treatment}
        setTreatment={setTreatment}
     ></BookingModal>} 

    </>
  )
}

export default AvailableAppointments