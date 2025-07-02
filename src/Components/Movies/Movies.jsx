import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CarouselSection({ title, posters, handleSynopsis }) {
  const containerRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const fullWidth = containerRef.current.scrollWidth / 2;
      setScrollWidth(fullWidth);
    }
  }, []);

  const isMobile = window.innerWidth < 768;
  const allPosters = [...posters, ...posters, posters[0]];

  return (
    <>
      <h2 className='hover:text-gray-100 bg-gray-700 rounded-2xl text-gray-300 bg-gray-900 my-4 text-center text-[22px] font-semibold py-2'>
        {title}
      </h2>
      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className={`flex w-max ${isMobile ? 'gap-2' : 'gap-3'}`}
          animate={{
            x: [0, -scrollWidth]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
          drag="x"
          dragConstraints={{ left: -scrollWidth, right: 0 }}
        >
          {allPosters.map((src, i) => (
            <div
              key={title + i}
              onClick={handleSynopsis}
              className="items-center justify-center text-center"
            >
              <img
                className={`rounded ${
                  isMobile
                    ? "w-[170px] h-[250px]"
                    : "w-full h-[275px]"
                } cursor mx-auto`}
                src={src}
                alt=""
              />
              <button className="w-full max-w-[170px] sm:max-w-none hover:outline outline-red-700 text-white bg-red-700 rounded m-1 p-1 mt-2">
                Watch Now
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

function Movies({ handleSynopsis }) {
  const posters = [
    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRIhaKOnyYOWSJHYG3IxVoZajsJsoMKZmwoEM0VxI4AfS17vZq",
    "https://rukminim2.flixcart.com/image/850/1000/k5wse4w0/poster/u/b/a/medium-artistic-movie-poster-thor-marvel-movie-poster-for-room-original-imafzgvb2xt8ptzx.jpeg?q=20&crop=false",
    "https://i.pinimg.com/originals/91/5d/c3/915dc3b2556bce916cdcc8744bd1b7f4.jpg"
  ];

  return (
    <div className="bg-gray-900 p-10">
      <div className="hover:text-gray-100">
        <h2 className="bg-gray-700 rounded-2xl text-gray-300 bg-gray-900 my-4 text-center text-[25px] font-semibold py-2">
          
        </h2>
        <CarouselSection title=" Recommended Shows" posters={posters} handleSynopsis={handleSynopsis} />
      </div>

      <CarouselSection title="English" posters={posters} handleSynopsis={handleSynopsis} />
      <CarouselSection title="Tamil" posters={posters} handleSynopsis={handleSynopsis} />
      <CarouselSection title="Hindi" posters={posters} handleSynopsis={handleSynopsis} />
      <CarouselSection title="Telugu" posters={posters} handleSynopsis={handleSynopsis} />
      <CarouselSection title="Kannada" posters={posters} handleSynopsis={handleSynopsis} />
    </div>
  );
}

export default Movies;
