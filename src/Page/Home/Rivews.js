import React from 'react'

function Rivews({ review }) {
    return (
        <>

            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>

                    <div className="flex items-center my-8">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} alt='avatarImg'/>
                            </div>
                        </div>

                        <div>
                            <h4 className='text-2xl'>{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Rivews