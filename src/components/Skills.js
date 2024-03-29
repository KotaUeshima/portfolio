import React from 'react'
import cpp from '../assets/skills/c++.png'
import css from '../assets/skills/css.png'
import flask from '../assets/skills/flask.png'
import html from '../assets/skills/html.png'
import java from '../assets/skills/java.png'
import javascript from '../assets/skills/javascript.png'
import python from '../assets/skills/python.png'
import rails from '../assets/skills/rails.png'
import reactImage from '../assets/skills/react.png'
import swift from '../assets/skills/swift.png'
import tailwind from '../assets/skills/tailwind.png'
import typescript from '../assets/skills/typescript.png'

function Skills() {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: typescript,
      title: 'TypeScript',
      style: 'shadow-blue-400',
    },
    {
      id: 5,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600',
    },

    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 7,
      src: rails,
      title: 'Ruby on Rails',
      style: 'shadow-red-500',
    },
    {
      id: 8,
      src: java,
      title: 'Java',
      style: 'shadow-blue-400',
    },
    {
      id: 9,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-400',
    },
    {
      id: 10,
      src: swift,
      title: 'Swift',
      style: 'shadow-orange-400',
    },
    {
      id: 11,
      src: flask,
      title: 'Flask',
      style: 'shadow-gray-400',
    },
    {
      id: 12,
      src: cpp,
      title: 'C++',
      style: 'shadow-blue-400',
    },
  ]
  return (
    <div name='skills' className='bg-white w-full min-h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='text-center mt-20 text-black'>
          <p className='header'>SKILLS</p>
          <p className='subheader'>
            These are some of the technologies I've worked with
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 my-10'>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4 text-gray-500'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
