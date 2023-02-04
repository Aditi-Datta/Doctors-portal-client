import React from 'react'
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

function BookingModal({ treatment, date, setTreatment }) {
    const { id, name, slots } = treatment;

    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'pp');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(id,slot);
        const booking = {
            treatmentId: id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                //to close the modal
                console.log(data);
                setTreatment(null);
            })


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-cyan-400 pb-[5%] " >Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />

                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)

                            }

                        </select>

                        <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email'
                            disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn bg-gradient-to-r from-indigo-200 to-cyan-400 hover:from-pink-500 hover:to-yellow-500 text-red-800 w-full max-w-xs mb-[5%]" />
                    </form>


                </div>
            </div>
        </>
    )
}

export default BookingModal