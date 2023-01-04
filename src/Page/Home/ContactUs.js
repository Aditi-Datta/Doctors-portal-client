import React from 'react'
import bgImage from '../../assets/images/appointment.png';
function ContactUs() {
  const backgroundStyle={
    backgroundImage: `url(${bgImage})`
  }

  return (
    <>
      <section style={backgroundStyle} className='my-16 py-16 grid justify-items-center'>
      <h1 className="text-xl font-bold text-cyan-400 text-center">Contact Us</h1>
      <h1 className="text-3xl text-center text-white mb-[2%]">Stay Connected With US</h1>
        <form action="">
          <input type="email" className='rounded-md py-1 ml-[-48%] pr-[100%] my-4' style={{ backgroundColor: 'white' }} id="email" name="email" placeholder='Email Address'></input><br />
          <input type="text" className='rounded-md py-1 ml-[-48%] pr-[100%] ' style={{ backgroundColor: 'white' }} id="subject" name="subject" placeholder='Subject'></input><br />
          <input type="text" className='rounded-md py-8 ml-[-48%] pr-[100%] my-4' style={{ backgroundColor: 'white' }} id="message" name="message" placeholder='Your Message'></input><br />

          <button className="btn bg-gradient-to-r from-indigo-200 to-cyan-400 hover:from-pink-500 hover:to-yellow-500 ml-[20%] px-8 mt-[5%]" style={{color:'black'}}>Submit</button>
        </form>
      </section>

    </>
  )
}

export default ContactUs