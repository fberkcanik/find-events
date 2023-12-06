import React from 'react'

function FilterBar() {
  return (
    /* Filter by date, location, featured or upcoming etc. with select, date inputs */

    /* Filter by search query with input */

    <>
    <div className='w-full grid grid-flow-col grid-cols-4 py-3 px-24 space-x-2'>
        <div className='col-span-2'>
            <input type='text' placeholder='İstanbul, Konser...' className='w-full h-full border text-sm p-2 border-red-500 rounded-md' />
        </div>
        <div className='col-span-1'>
            <select className='w-full h-full border border-red-500 rounded-md'>
            <option>Category</option>
            <option>Category</option>
            <option>Category</option>
            <option>Category</option>
            <option>Category</option>
            </select>
        </div>
        <div className='col-span-1'>
            <select className='w-full h-full border border-red-500 rounded-md'>
            <option>Location</option>
            <option>Location</option>
            <option>Location</option>
            <option>Location</option>
            <option>Location</option>
            </select>
        </div>
        <div className="col-span-1">
            <button className='w-full h-full p-3 bg-red-500 text-white rounded-md'><i className='fas fa-search text-xl'></i></button>
        </div>
    </div>

    </>
  )
}

export default FilterBar