import React from 'react'
import { IoMdClose } from "react-icons/io";

function Synopsis({closeSynopsis}) {
  

  return (
    <>
      <div className='fixed bg-black h-screen bg-opacity-50 justify-center items-center lg:px-[300px]
         rounded m-0 p-0 flex gap-5 font-semibold text-[15px] bottom-0'>
        <div className=' bg-black bg-opacity-77 p-5 justify-center 
        items-start flex flex-col rounded-2x'>
          <div className='absolute lg:top-[23%] lg:end-[27%] top-[20%] end-[5%]'>
          <button className='text-white bg-red-600 p-2 rounded'
          onClick={closeSynopsis} ><IoMdClose /></button>
          </div>
          <h1 className='text-gray-300 text-[24px] font-semibold'>About the Movie</h1>
          <h3 className='text-gray-400 '>Title: <span className='text-gray-500'>Fast and Furious</span></h3>
          <h3 className='text-gray-400 '>Release Date: <span className='text-gray-500'>17 Jul 2009</span></h3>
          <h3 className='text-gray-400 '>Genre:  <span className='text-gray-500'>Action</span></h3>
          <h3 className='text-gray-400 '>Synopsis: <span className='text-gray-500'>Brian O'Conner, now working for the FBI, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation. Their shared past and trust issues complicate their mission, but they must work together to take down the criminal organization, pushing their driving skills to the limit in high-speed chases and daring heists.</span></h3>
          <h3 className='text-gray-400 '>Director: <span className='text-gray-500'> Justin Lin</span></h3>
          <h3 className='text-gray-400 '>Cast: <span className='text-gray-500'>Vin Diesel, Paul Walker, Michelle Rodriguez, Jordana Brewster</span></h3>
          <h3 className='text-gray-400 '> Duration:  <span className='text-gray-500'>1h 47m (107 minutes)</span></h3>
          <h3 className='text-gray-400 '>Language: <span className='text-gray-500'>English</span></h3>

        </div>
      </div>
    </>
  )
}

export default Synopsis