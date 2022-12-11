import React from 'react'
import loding from './loding.gif'

const Spinner = () => {
    return (
      <div className='text-center align-middle'>
        <img className='my-3'src={loding} alt="" />
      </div>
    )
}

export default Spinner
