import React from 'react'

const About = ({handleSynopsis}) => {

  return (
    <div className='w-full h-screen-xl bg-gray-900 justify-between  flex flex-col lg:flex-row'>
      <div className='w-full  lg:w-[60%] text-center gap-10 leading-loose flex flex-col px-20'>

        <div className=' w-full text-center'>
          <h2 className='w-full inline-block text-red-700 font-semibold text-[30px] lg:text-[35px] lg:text-start'>About NowPlaying</h2>
          <p className='mt-5  text-center text-cursive text-gray-400 lg:text-start'>Welcome to NowPlaying—your one-stop destination for discovering, streaming, and enjoying movies from all around the world. Whether you're a cinephile craving timeless classics, the latest blockbusters, or hidden indie gems, NowPlaying delivers an unparalleled movie-watching experience.
            What We Do At NowPlaying, we bring the magic of cinema straight to your screen. Our platform offers a curated collection of films across every genre and era. From heart-pounding thrillers to heartwarming dramas, from riveting documentaries to captivating international cinema, our library is crafted to meet the tastes of every movie lover.</p>
        </div>

        <div className='w-full relative bottom-4 py-3 '>
          <h2 className='relative  text-red-700 text-[30px] lg:text-[35px] font-semibold lg:text-start'>Features</h2>
          <ul className='text-gray-400  leading-relaxed list-disc red-500 text-start lg:text-start'>
            <li><span className='font-bold'>Vast Movie Library: </span>Explore an ever-growing selection of movies, including Hollywood hits, international cinema, independent films, and exclusive releases.</li>
            <li><span className='font-bold'>Personalized Movie Recommendations: </span> Get suggestions tailored to your taste based on your viewing habits and preferences, so you never miss a movie you'll love.</li>
            <li><span className='font-bold'>Offline Viewing: </span>Download movies to your device and enjoy them anytime, anywhere—even without an internet connection.</li>
            <li><span className='font-bold'>Curated Playlists: </span>Discover handpicked movie collections based on themes, moods, genres, or trending topics. You can also create and share your own playlists with fellow movie enthusiasts.</li>
            <li><span className='font-bold'>Watch Parties: </span>Enjoy a communal movie experience with friends and family through synchronized watch parties, complete with live chat and reactions.</li>
            <li><span className='font-bold'>Advanced Search & Filters </span>Easily find movies by genre, director, actor, or year to quickly locate the perfect film for your mood.</li>
          </ul>
        </div>

      </div>

      {/* movies */}
      <div onClick={handleSynopsis} className='lg:w-[40%] items-center justify-center text-center flex my-5 mx-10 lg:flex-col lg:gap-3'>
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
  )
}

export default About