import React from 'react'
import Banner from './Banner'
import ContactUs from './ContactUs'
import DentalCare from './DentalCare'
import Footer from '../Shared/Footer'
import HomeAppointment from './HomeAppointment'
import Info from './Info'
import PatientsSays from './PatientsSays'
import Services from './Services'
function Home() {
  return (
    <div >
    <Banner></Banner>
    <Info></Info>
    <Services></Services>
    <DentalCare></DentalCare>
    <HomeAppointment></HomeAppointment>
    <PatientsSays></PatientsSays>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </div>
    
  )
}

export default Home