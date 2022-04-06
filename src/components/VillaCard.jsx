import React from 'react'

const VillaCard = () => {
  return (
    <div className='container'>
      <div className="p-10">
        <div className="w-80 h-96 left-0.5 top-2 shadow-md rounded-lg bg-white flex-none order-none grow-0 my-0 mx-7">
          <img srcSet='img/icons/room.png' className='w-80 h-48 left-0 top-0 rounded-lg' />
          <div className="px-6 py-4">
            <div className='flex justify-between'>
              <p className='font-bold text-xl w-48 h-11 top-60 font-sans not-italic leading-8'>Villa Pertama</p>
              <div className='flex mb-2'>
                <div className='text-sm mr-3'>
                  <button className='font-bold'>love</button>
                </div>
                <div className='text-sm'>
                  <button className='font-bold'>share</button>
                </div>
              </div>
            </div>
            <p className='non-italic font-normal text-base text-gray-600 leading-6 '>Jl. Kembang Kertas</p>
            <div className='flex justify-between mt-3'>
              <p className='text-sm mr-3 font-normal text-base leading-6 text-gray-800'>3 bedroom</p>
              <p className='text-sm font-normal text-base leading-6 text-gray-800'>2 bathroom</p>
            </div>
              <p className='mb-px text-sm mt-6 font-normal leading-5 text-gray-400'>start from</p>
              <p className='text-xl text-bold font-bold leading-5 text-gray-700'>Rp. 1,750,000/night</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VillaCard;