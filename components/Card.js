import React from 'react'

function Card() {
  return (
  <>

          {/* <div class="container mx-auto m-auto">
            <div class="-mx-4 flex flex-wrap"> */}
              {/* <div class="w-full px-4 md:w-1/3 xl:w-1/4"> */}
      <div class="sm:mb-10 mb-8 p-3 sm:p-4 w-full  sm:w-full  overflow-hidden rounded-lg bg-[#9bbcff]">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                    alt="image"
                    class="w-full"
                  />
                  <div class="p-2 text-center sm:p-9 ">
                  
                    <p class="text-black font-bold sm:text-xl text-sm mb-2 ">
                     Task1
                    </p>
                    <a
                      href=""
                      class=" hover:border-primary hover:bg-primary sm:inline-block inline rounded-full border border-[#001b50] sm:py-1 py-1 px-4 sm:px-4 text-xs sm:text-xs sm:font-medium font-medium transition hover:text-white text-black "
                    >
                      View Gallery
                    </a>
                  </div>
                </div>
              {/* </div>              */}
            {/* </div>
          </div>
       */}
  </>
  )
}

export default Card