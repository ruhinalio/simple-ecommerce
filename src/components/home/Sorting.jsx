import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='sorting-side bg-light'>
      <select name="" id="" className='select-option bg-light' onChange={(e)=> setSort(e.target.value)}>
        <option disabled value="" className='bg-light'>Couse</option>
        <option value="inc" className='bg-light'>increasing</option>
        <option  value="dec" className='bg-light'>decreasing</option>
      </select>
    </div>
  )
}

export default Sorting