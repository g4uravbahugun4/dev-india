import React from 'react'

function Card() {
  return (
  <>

          {/* <div class="container mx-auto m-auto">
            <div class="-mx-4 flex flex-wrap"> */}
              {/* <div class="w-full px-4 md:w-1/3 xl:w-1/4"> */}
                <div class="mb-10 p-4 overflow-hidden rounded-lg bg-[#9bbcff]">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
                    alt="image"
                    class="w-full"
                  />
                  <div class="p-8 text-center sm:p-9 md:p-3 xl:p-3">
                  
                    <p class="text-black font-bold text-xl mb-2 ">
                     Task1
                    </p>
                    <a
                      href=""
                      class=" hover:border-primary hover:bg-primary inline-block rounded-full border border-[#001b50] py-2 px-7 text-base font-medium transition hover:text-white text-black "
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