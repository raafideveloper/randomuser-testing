import React, { Component } from 'react';
import './style.css';

class Button extends Component {
  render () {
    const { sortByAge, sortByCity } = this.props
    return (
      <div className='section'>
        <div className='section-one'>
          <h2>RANDOM USER</h2>
        </div>
        <div className='section-two'>
          <button onClick={() => sortByAge()} className='color-btn'>age</button>
          <button onClick={() => sortByCity()} className='city-btn'>city</button>
        </div>
      </div>
    )
  }
}


export default Button