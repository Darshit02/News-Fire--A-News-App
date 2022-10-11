import React, { Component } from 'react'
import loding from './loding.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center align-middle'>
        <img className='my-3'src={loding} alt="" />
      </div>
    )
  }
}

export default Spinner
