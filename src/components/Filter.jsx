import React from 'react'

const Filter = () => {
  return (
      <section className='flex font-normal items-center'>
          <div className='text-md'>
              <span>Filter By :</span>
          </div>
          <div className="flex space-x-10 ml-20">
              <span className=' hover:bg-[#CFD2DC] rounded-xl px-6 cursor-pointer border-2 border-solid transparent'>Uread</span>
              <span className=' hover:bg-[#CFD2DC] rounded-xl px-6 cursor-pointer border-2 border-solid transparent'>Read</span>
              <span className=' hover:bg-[#CFD2DC] rounded-xl px-6 cursor-pointer border-2 border-solid transparent'>Favorites</span>
          </div>
    </section>
  )
}

export default Filter