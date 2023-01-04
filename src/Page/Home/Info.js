import React from 'react'
import clock from '../../assets/icons/clock22.png'
import location from '../../assets/icons/R2.png'
import caller from '../../assets/icons/call2.png'

function Info() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-12 text-teal-800 ">
    <div className="card lg:card-side bg-base-100 shadow-xl  bg-gradient-to-r from-indigo-200 to-cyan-400 px-12" >
    <figure><img src={clock} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
  </div>

  <div className="card lg:card-side bg-base-100 shadow-xl  bg-slate-400 px-12" >
    <figure><img src={location} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>

  <div className="card lg:card-side bg-base-100 shadow-xl  bg-gradient-to-r from-indigo-200 to-cyan-400 px-12" >
    <figure><img src={caller} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      <div className="card-actions justify-end">
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default Info;