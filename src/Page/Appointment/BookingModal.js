import React from 'react'
import { format } from 'date-fns'
function BookingModal({ treatment, date, setTreatment }) {
    const {id, name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        //to close the modal
        setTreatment(null);
        // console.log(id,slot);
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-cyan-400 pb-[5%] " >Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)

                            }
                            
                        </select>

                        <input type="text" name='name' placeholder="Full name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Pnone number" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn bg-gradient-to-r from-indigo-200 to-cyan-400 hover:from-pink-500 hover:to-yellow-500 text-red-800 w-full max-w-xs mb-[5%]" />
                    </form>


                </div>
            </div>
        </>
    )
}

export default BookingModal