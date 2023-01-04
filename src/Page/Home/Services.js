import React from 'react'
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
function Services() {

    
  return (
    <>


    <div className="my-16">
    <h2 className="font-bold text-cyan-400 text-center">Our Services</h2>
    <h1 className="text-3xl text-center">Services will provide</h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-12  ">
    
    <div className="card bg-base-100 shadow-xl">
     <figure className="px-10 pt-10">
      <img src={fluoride} alt="cavity"  />
     </figure>
     <div className="card-body items-center text-center">
      <h2 className="card-title">Fluoride Treatment</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      </p>
     </div>
    </div>


    <div className="card bg-base-100 shadow-xl">
     <figure className="px-10 pt-10">
      <img src={cavity} alt="cavity"  />
     </figure>
     <div className="card-body items-center text-center">
      <h2 className="card-title">Cavity Filling</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      </p>
     </div>
    </div>


    
    <div className="card bg-base-100 shadow-xl">
     <figure className="px-10 pt-10">
      <img src={whitening} alt="cavity"  />
     </figure>
     <div className="card-body items-center text-center">
      <h2 className="card-title">Teeth Whitening</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
      </p>
     </div>
    </div>
    </div>
    
    </>
  )
}

export default Services;