import React from 'react'
import doctor from '../../assets/images/doctor-small.png'
import bgAppointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

function HomeAppointment() {
  const backgroundStyle = {
    backgroundImage: `url(${bgAppointment})`
  }
  return (
    <>

      <div className=" flex justify-center items-center px-12" style={backgroundStyle}>
        <div className="flex-1  hidden lg:block">
          <img className="mt-[-125px]" src={doctor} />
        </div>
        <div className="flex-1 my-12 ">
          <h1 className="text-2xl font-bold text-indigo-400 ">Appointment</h1>
          <h1 className="text-3xl text-white">Make an appointment Today</h1>
          <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>

    </>
  )
}

export default HomeAppointment