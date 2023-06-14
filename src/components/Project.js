import React from 'react'

function Project({
  src,
  title,
  technologies,
  frontendLink,
  backendLink,
  demoLink,
  feature,
  disabled,
}) {
  return (
    <div
      className={`${
        feature ? 'ring-8 ring-yellow-400 ' : ''
      }z-0 bg-white shadow-md shadow-gray-600 rounded-md hover:scale-105 duration-200`}
    >
      <img className='rounded-t-md' src={src} alt='' />
      <p className='text-center pt-2 text-xl font-bold'>{title}</p>
      <p className='text-center text-gray-500 text-sm'>{technologies}</p>
      <div className='flex flex-row py-6'>
        <div className='w-1/2 flex justify-center'>
          <a href={demoLink} target='_blank' rel='noreferrer'>
            <button
              disabled={disabled}
              className={`px-8 py-3 bg-primary text-white rounded-md ${
                disabled ? 'opacity-50' : 'duration-200 hover:scale-105'
              }`}
            >
              Demo
            </button>
          </a>
        </div>
        <div className='w-1/2 flex justify-center'>
          <a href={frontendLink} target='_blank' rel='noreferrer'>
            <button
              className={`px-8 py-3 bg-primary text-white rounded-md duration-200 hover:scale-105`}
            >
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
