import React from 'react'

const LoadingGif = () => {
  return (
    <div className='h-screen bg-gray-900 flex flex-col justify-center items-center text-center'>
        <h2 className='absolute top-[30%] font-bold text-red-500 text-[20px] text-white'>LOADING</h2>
   <img className=''
   src="https://d33wubrfki0l68.cloudfront.net/e0519fd6fa113912df237f6bd97394bb319cca32/b6a09/uploads/slidin-squares.gif" alt="" />
    </div>
  )
}

export default LoadingGif