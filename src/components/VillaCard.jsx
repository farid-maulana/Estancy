import React from 'react'

const VillaCard = () => {
  return (
    <div className='container'>
      <div class="p-10">
        <div class="w-80 h-96 left-0.5 top-2 shadow-md rounded-lg bg-white flex-none order-none grow-0 my-0 mx-7">
          <img srcSet='img/icons/room.png' className='w-80 h-48 left-0 top-0 rounded-lg' />
          <div class="px-6 py-4">
            <div className='flex justify-between'>
              <p className='font-bold text-xl w-48 h-11 top-60 font-sans not-italic leading-8'>Villa Pertama</p>
              <div className='flex mb-2'>
                <div className='text-sm mr-3'>
                  <p>love</p>
                </div>
                <div className='text-sm'>
                  <p>share</p>
                </div>
              </div>
            </div>
            <p className='non-italic font-normal text-base leading-6 '>Jl. Kembang Kertas</p>
            <div className='flex justify-between mt-3'>
              <p className='text-sm mr-3'>3 bedroom</p>
              <p className='text-sm'>2 bathroom</p>
            </div>
            <p className='text-sm mt-6'>start from</p>
            <p className='text-xl'>Rp. 1,750,000/night</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VillaCard;