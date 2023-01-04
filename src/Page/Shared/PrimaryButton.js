import React from 'react'

function PrimaryButton({children}) {
  return (
    <button className="btn bg-gradient-to-r from-indigo-200 to-cyan-400 hover:from-pink-500 hover:to-yellow-500" style={{color:'black'}}>{children}</button>
  )
}

export default PrimaryButton