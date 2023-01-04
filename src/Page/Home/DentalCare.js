import React from 'react'
import treatment from '../../assets/images/treatment.png'

function DentalCare() {

  return (
    <>
    <div className="hero min-h-screen lg:mx-16">
    <div className="hero-content flex-col lg:flex-row ">
      <img src={treatment} className="max-w-sm rounded-lg shadow-2xl " />
      <div className="px-16">
        <h1 className="text-5xl font-bold">Exceptional Dental <br/> Care, on Your Terms </h1>
        <p className="py-6" style={{paddingRight:'22%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.</p>
        <button className="btn bg-gradient-to-r from-indigo-200 to-cyan-400 hover:from-pink-500 hover:to-yellow-500" style={{color:'black'}}>Get Started</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default DentalCare