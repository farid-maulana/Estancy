import React from 'react'

const ContactUs = () => {
  return (
    <>
    <Navbar />
    <div className='p-10'>
        <div className='container mx-auto p-10'>
            <div className='rounded-2xl shadow-lg h-96 bg-gradient-to-r from-cyan-300 to-cyan-50'>
                <div className='px-6 py-4'>
                    <div className='font-bold w-96 h-20 pl-8 p-20 non-italic font-sans font-medium text-6xl leading-10'>Contact Us</div>
                    <p className='text-gray-700 text-base pl-8 p-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
            <div className='container mx-auto font-sans font-bold font-medium non-italic text-4xl'>
                <div className='pl-6 pr-16 pt-28'>Tentang Kami</div>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <p className='text-base pt-3.5 h-14 p-7'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className='flex justify-end'>
                        <img srcSet='' className='w-80 h-80 rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default ContactUs