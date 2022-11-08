import React from 'react'
import "./Drop.css"

function Drop() {
  return (
    <>
      <div className='drop'>
        <nav className='drop-nav'>
          <label for="touch"><span>Please Select</span></label>
          <input type="checkbox" id="touch" />
          <div class="slide">
            <li><a href="#">AAPL</a></li>
            <li><a href="#">ADBE</a></li>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Drop