import React from 'react'
import Navbar from '../../components/Navbar'
import VillaCard from '../../components/VillaCard'

const Home = () => {
  return (
    <>
      <Navbar />
        <div className='container mx-auto p-10'>
          <div className='rounded-2xl shadow-lg h-96 bg-gradient-to-r from-cyan-300 to-cyan-50'>
            <div className='px-6 py-10'>
              <div className='font-bold w-2/5 pl-8 non-italic text-5xl leading-extra-loose'>Let Us Show Your Family the Way Home</div>
              <p className='text-gray-700 w-2/3 text-base pl-8 p-4'>
              Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
              </p>
            </div>
          </div>
          <div className='container mx-auto font-bold non-italic text-4xl'>
            <div className='pl-6 pr-16 pt-28'>Best Deal</div>
            <div className='flex justify-between'>
                <VillaCard img={'img/icons/room.png'}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home