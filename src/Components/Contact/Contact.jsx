import React from 'react'

function Contact() {
  return (
    <>

      <div className=' bg-gray-900 p-10'>
        <h2 className='text-white text-[24px] text-center font-semibold py-2 uppercase'>Get in Touch with Us</h2>
        {/* form */}
        <form action="" className='justify-center items-center 
         m-2 p-4 flex gap-5 font-semibold text-[15px]'>
          <div className='bg-gray-300 p-5 justify-center 
        items-center flex flex-col bg-gray-300 
        rounded-2xl'>

            <div className='flex flex-wrap gap-5'>
              {/* labels */}
              <div className='flex flex-col text-start gap-[29px]'>
                <label htmlFor="name" className='text-left'>Full Name</label>
                <label htmlFor="email">Email </label>
                <label htmlFor="subject">Subject</label>
                <label htmlFor="message">Message</label>
              </div>
              {/* inputs */}
              <div className='flex flex-col gap-6 text-end items-end justify-end '>
                <input type="text" id='name' className='p-1 text-sm outline-none text-center rounded' placeholder='Enter full Name' />
                <input type="email" id='email' className='p-1 text-sm outline-none text-center rounded' placeholder='Enter Email' />
                <input type="text" id='subject' className='p-1 text-sm outline-none text-center rounded' placeholder='Enter Subject' />
                <textarea name="" id="message" className='p-1  text-sm outline-none text-center w-full rounded' placeholder='Enter message'></textarea>
              </div>
            </div>

            <div className='w-full flex justify-center items-center'>
              <button type="submit" className=' w-full bg-red-600
             hover:outline outline-red-500 text-center text-white rounded-xl m-4 p-2'>Submit</button>
            </div>

          </div>
        </form>
        {/* form end */}




        <div>
          <h2 className='text-white text-[24px] text-center font-semibold py-2 uppercase'>Contact Information</h2>
        </div>
        <div className='justify-center items-center flex lg:flex flex-col lg:flex-row'>
          <div className='m-2 w-[240px] pt-3 h-[170px] bg-gray-300 p-1 font-semibold text-[12px]
    text-center rounded justify-center '>
            <h2 className='text-[13px]'>General Inquiries</h2>
            <p className='text-red-700 '>Email</p>
            <a className='cursor-pointer text-gray-500'>info@nowplaying.com</a>
            <p className='text-red-700 '>Phone</p>
            <a className='cursor-pointer  text-gray-500'>+1 (123) 456-7890</a>
            <p className='text-red-700 '>Address</p>
            <a className='cursor-pointer text-gray-500'>123 Cinema Avenue, Los Angeles, CA 90001, USA</a>
          </div>
          <div className='m-2 w-[240px] pt-3 h-[170px] bg-gray-300 p-1 font-semibold text-[12px]
    text-center rounded justify-center '>
            <h2 className='text-[13px]'>Customer Support</h2>
            <p className='text-red-700 '>Email</p>
            <a className='cursor-pointer text-gray-500'>support@nowplaying.com</a>
            <p className='text-red-700 '>Phone</p>
            <a className='cursor-pointer  text-gray-500'> +1 (234) 567-8901</a>
            <p className='text-red-700 '>Address</p>
            <a className='cursor-pointer text-gray-500'> 456 Movie Lane, New York, NY 10001, USA</a>
          </div>
          <div className='m-2 w-[240px] pt-3 h-[170px] bg-gray-300 p-1 font-semibold text-[12px]
    text-center rounded justify-center '>
            <h2 className='text-[13px]'> Business Partnerships</h2>
            <p className='text-red-700 '>Email</p>
            <a className='cursor-pointer text-gray-500'>partnerships@nowplaying.com</a>
            <p className='text-red-700 '>Phone</p>
            <a className='cursor-pointer  text-gray-500'>+1 (345) 678-9012</a>
            <p className='text-red-700 '>Address</p>
            <a className='cursor-pointer text-gray-500'> 789 Studio Road, London, UK W1A 1AA</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact






