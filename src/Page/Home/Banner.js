import React from 'react'
import chair from '../../assets/images/chair.png';
import bgImg from '../../assets/images/bg.png';

function Banner() {

  const backgroundStyle = {
    backgroundImage: `url(${bgImg})`
  }

 

  return (
    <>
      <div className="hero min-h-screen bg-cover bg-center" style={backgroundStyle}>
        <div className="hero-content flex-col lg:flex-row-reverse ">

          <img src={chair} className="max-w-md max-w-sm rounded-lg shadow-2xl" ></img>

          <div >

            <h1 className="text-5xl font-bold">Your New Smile Starts <br />Here!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            <button className="btn bg-gradient-to-r from-indigo-200 to-cyan-400 hover:from-pink-500 hover:to-yellow-500" style={{ color: 'black' }}>Get Started</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner