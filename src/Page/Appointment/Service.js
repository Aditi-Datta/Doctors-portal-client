import React from 'react'

function Service({ service, setTreatment }) {
    const { name, slots } = service;

    return (
        <>
            <div class="card lg:w-96 mb-12 bg-base-100 shadow-xl ">
                <div class="card-body text-center " >
                    <h2 class=" font-bold text-lg text-cyan-400 ">{name}</h2>

                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-500'> No slots available</span>
                        }
                    </p>

                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <div class="card-actions justify-center">


                        <label for="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            class="btn bg-gradient-to-r from-indigo-200 to-cyan-400 hover:from-pink-500 hover:to-yellow-500 text-red-800">Book Appointment</label>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Service