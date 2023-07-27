// import Navbar from '@/Component/Navbar'
import Navbar from '@/components/Navbar'
import React from 'react'
import ProfileUpdateModel from '@/components/ProfileUpdateModel'
const profile = ({user}) => {
  return (
    <div className='bg-white dark:bg-gray-900'>
 
<main className="flex flex-col gap-10">
  <div>
  <Navbar user={user}/>
  </div>
  <section className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words profile-page bg-translation w-full mb-6 shadow-xl rounded-lg pt-4 sm:pt-8">
        <div className="px-6">
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none mt-1 max-w-150-px" />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center text-center">
              <div className="py-6 px-3 mt-2 sm:mt-0">
                <button className="bg-primary active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  completed
                </button>
                <button className="bg-primary active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 mx-2 sm:mx-0" type="button">
                  pending
                </button>
                <button className="bg-primary active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  ratings
                </button>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-white">22</span><span className="text-sm text-white">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-white">10</span><span className="text-sm text-white">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-white">89</span><span className="text-sm text-white">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
          {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center text-center"> */}
              <div className="py-6 px-3 mt-2 sm:mt-0">
                <ProfileUpdateModel />
              </div>
            {/* </div> */}
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-white">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-white"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-white mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-white"></i>Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-white">
              <i className="fas fa-university mr-2 text-lg text-white"></i>University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-white">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An
                  artist of considerable range.
                </p>
                <a href="#pablo" className="font-normal text-pink-500">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </section>
</main>
  </div>
  )
}

export default profile