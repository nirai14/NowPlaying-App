import React from 'react'
// import Synopsis from '../Synopsis/Synopsis'
function Home({handleSynopsis}) {

  return (
    <div className='w-full justify-between
    text-center items-center flex flex-col 
    bg-gray-900 p-10 lg:flex-row md:flex-col'>
      <div className='text-center lg:px-5 items-center justify-center'>
  
        <h1 className='relative bottom-[20px] text-red-700 text-[50px] font-semibold py-2'>TRENDING NOW</h1>

       <div onClick={handleSynopsis} className=' items-center justify-center text-center flex lg:gap-3 lg:ps-0 lg:m-0'>
  <div className='items-center justify-center text-center'>
  <img className='rounded w-300 h-[250px]' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRIhaKOnyYOWSJHYG3IxVoZajsJsoMKZmwoEM0VxI4AfS17vZq" alt="" />
  <button className='w-full text-white bg-red-700 rounded m-1 p-1 mt-2'>Watch Now</button>
  </div>
  <div className='hidden lg:block'>
  <img className='rounded w-300 h-[250px]' src="https://rukminim2.flixcart.com/image/850/1000/k5wse4w0/poster/u/b/a/medium-artistic-movie-poster-thor-marvel-movie-poster-for-room-original-imafzgvb2xt8ptzx.jpeg?q=20&crop=false" alt="" />
  <button className='w-full text-white bg-red-700 rounded m-1 p-1 mt-2'>Watch Now</button>
  </div>
  <div className='hidden lg:block'>
  <img className='rounded  w-300 h-[250px]' src="https://i.pinimg.com/originals/91/5d/c3/915dc3b2556bce916cdcc8744bd1b7f4.jpg" alt="" />
  <button className='w-full text-white bg-red-700 rounded m-1 p-1 mt-2 '>Watch Now</button>
  </div>
      </div>

      </div>
      <div className='text-center py-4'> 
        <h1 className='font-bold text-red-800 lg:text-[25px]'>Unlimited movies, TV shows and more</h1>
     <div>
      <h4 className='text-[13px] text-red-800 top-[10px] py-5'>Ready to watch? Enter your email to create or restart your membership. </h4>
    <div className='px-23'> 
      <input type="email" placeholder='Enter email address'
      className='w-full text-center 
      text-[15px] rounded-xl p-2' />
      <button className='w-full text-white
       text-[13px] font-medium bg-red-800 mt-5 p-2 hover:outline outline-red-800 rounded-2xl'>Create Account</button>
    </div>
     </div>
      </div>
    </div>
  )
}

export default Home