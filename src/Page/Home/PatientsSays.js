import React from 'react'
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Rivews from './Rivews';

function PatientsSays() {
  const reviews=[
    {
      id:1,
      review:'ss',
      name:'we',
      location:'california',
      img: people1,
    },
    {
      id:2,
      review:'ss',
      name:'we',
      location:'california',
      img: people2,
    },
    {
      id:3,
      review:'ss',
      name:'we',
      location:'california',
      img: people3,
    },
  ]
  return (
    <>
    <section>

    <div className='flex justify-between'>
    <div className="my-12 mx-12">
    <h2 className="font-bold text-cyan-400 ">Testimonial</h2>
    <h1 className="text-3xl ">What our Patients says</h1>
    </div>
    <div>
    <img src={quote} className='w-24 lg:w-48'></img>
    </div>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-16">
    {
      reviews.map(review => <Rivews
         key={review.id}
         review={review}
        ></Rivews>)
    }
    </div>
    </section>

    
    <h1></h1>
    </>
  )
}

export default PatientsSays