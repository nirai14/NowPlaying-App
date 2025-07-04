import React from 'react';

function Contact() {
  return (
    <>
      <div className='bg-gray-900 p-10'>
        <h2 className='text-white text-[24px] text-center font-semibold py-2 uppercase'>Get in Touch with Us</h2>
        
        {/* form */}
    <form action="" className='justify-center items-center m-2 p-4 flex font-semibold text-[15px]'>
  <div className='bg-gray-300 p-5 justify-center items-center flex flex-col rounded-2xl w-full max-w-xl'>
    
    {/* Labels + Inputs group */}
    <div className='flex flex-col gap-4 w-full'>
      {/* Full Name */}
      <div className='flex items-center justify-between w-full gap-2'>
        <label htmlFor="name" className='text-sm w-[30%]'>Full Name</label>
        <input type="text" id='name' className='p-2 w-[70%] text-xs outline-none rounded' placeholder='Enter full Name' />
      </div>

      {/* Email */}
      <div className='flex items-center justify-between w-full gap-2'>
        <label htmlFor="email" className='text-sm w-[30%]'>Email</label>
        <input type="email" id='email' className='p-2 w-[70%] text-xs outline-none rounded' placeholder='Enter Email' />
      </div>

      {/* Subject */}
      <div className='flex items-center justify-between w-full gap-2'>
        <label htmlFor="subject" className='text-sm w-[30%]'>Subject</label>
        <input type="text" id='subject' className='p-2 w-[70%] text-xs outline-none rounded' placeholder='Enter Subject' />
      </div>

      {/* Message */}
      <div className='flex items-center justify-between w-full gap-2'>
        <label htmlFor="message" className='text-sm w-[30%]'>Message</label>
        <textarea id="message" className='p-2 w-[70%] text-xs outline-none rounded resize-none' rows={3} placeholder='Enter message'></textarea>
      </div>
    </div>

    {/* Submit Button */}
    <div className='w-full flex justify-center items-center'>
      <button type="submit" className='w-full bg-red-600 hover:outline outline-red-500 text-white rounded-xl m-4 p-2 text-sm'>Submit</button>
    </div>
  </div>
</form>

        {/* form end */}

        <div>
          <h2 className='text-white text-[24px] text-center font-semibold py-2 uppercase'>Contact Information</h2>
        </div>

        <div className='justify-center items-center flex lg:flex flex-col lg:flex-row'>
          {/* General Inquiries */}
          <div className='m-2 w-[240px] pt-3 h-[170px] bg-gray-300 p-1 font-semibold text-[12px] text-center rounded'>
            <h2 className='text-[13px]'>General Inquiries</h2>
            <p className='text-red-700'>Email</p>
            <a href="mailto:info@nowplaying.com" className='text-gray-500'>info@nowplaying.com</a>
            <p className='text-red-700'>Phone</p>
            <a href="tel:+11234567890" className='text-gray-500'>+1 (123) 456-7890</a>
            <p className='text-red-700'>Address</p>
            <a href="https://www.google.com/maps?q=123+Cinema+Avenue,+Los+Angeles,+CA+90001,+USA" target="_blank" rel="noopener noreferrer" className='text-gray-500'>
              123 Cinema Avenue, Los Angeles, CA 90001, USA
            </a>
          </div>

          {/* Customer Support */}
          <div className='m-2 w-[240px] pt-3 h-[170px] bg-gray-300 p-1 font-semibold text-[12px] text-center rounded'>
            <h2 className='text-[13px]'>Customer Support</h2>
            <p className='text-red-700'>Email</p>
            <a href="mailto:support@nowplaying.com" className='text-gray-500'>support@nowplaying.com</a>
            <p className='text-red-700'>Phone</p>
            <a href="tel:+12345678901" className='text-gray-500'>+1 (234) 567-8901</a>
            <p className='text-red-700'>Address</p>
            <a href="https://www.google.com/maps?q=456+Movie+Lane,+New+York,+NY+10001,+USA" target="_blank" rel="noopener noreferrer" className='text-gray-500'>
              456 Movie Lane, New York, NY 10001, USA
            </a>
          </div>

          {/* Business Partnerships */}
          <div className='m-2 w-[240px] pt-3 h-[170px] bg-gray-300 p-1 font-semibold text-[12px] text-center rounded'>
            <h2 className='text-[13px]'>Business Partnerships</h2>
            <p className='text-red-700'>Email</p>
            <a href="mailto:partnerships@nowplaying.com" className='text-gray-500'>partnerships@nowplaying.com</a>
            <p className='text-red-700'>Phone</p>
            <a href="tel:+13456789012" className='text-gray-500'>+1 (345) 678-9012</a>
            <p className='text-red-700'>Address</p>
            <a href="https://www.google.com/maps?q=789+Studio+Road,+London,+UK+W1A+1AA" target="_blank" rel="noopener noreferrer" className='text-gray-500'>
              789 Studio Road, London, UK W1A 1AA
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;





