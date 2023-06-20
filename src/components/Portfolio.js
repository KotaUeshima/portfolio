import React from 'react'
import amazonscraper from '../assets/portfolio/amazon-scraper.png'
import college_marketplace_app from '../assets/portfolio/college_marketplace_app.png'
import droneco from '../assets/portfolio/droneco.png'
import globify from '../assets/portfolio/globify.png'
import globify2 from '../assets/portfolio/globify2.png'
import vapo from '../assets/portfolio/vapo.png'
import Project from './Project'

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: globify2,
      title: 'Globify 2.0',
      technologies: 'Next.js | Typescript | Ruby on Rails | Tailwind',
      frontendLink: 'https://github.com/KotaUeshima/globify-frontend2.0',
      backendLink: 'https://github.com/KotaUeshima/globify-backend',
      demoLink: 'https://globify.vercel.app/',
      buttonColor: '#fe7925',
      disabled: false,
    },
    {
      id: 2,
      src: droneco,
      title: 'DroneCo',
      technologies: 'Next.js | Javascript | Tailwind',
      frontendLink: 'https://github.com/KotaUeshima/DroneCo',
      backendLink: 'https://github.com/KotaUeshima/DroneCo',
      demoLink: 'https://drone-co.vercel.app/',
      buttonColor: '#181a2f',
      disabled: false,
    },
    {
      id: 3,
      src: amazonscraper,
      title: 'Amazon Scraper',
      technologies: 'Next.js | TypeScript | Webhooks | Firebase',
      frontendLink: 'https://github.com/KotaUeshima/amazon-scraper',
      backendLink: 'https://github.com/KotaUeshima/amazon-scraper',
      demoLink: 'https://brightdata-amazon-scraper-lovat.vercel.app/',
      buttonColor: '#5045e4',
      disabled: false,
    },
    {
      id: 4,
      src: globify,
      title: 'Globify 1.0',
      technologies: 'React.js | Javascript | Ruby on Rails | Bootstrap',
      frontendLink: 'https://github.com/KotaUeshima/globify-frontend',
      backendLink: 'https://github.com/KotaUeshima/globify-backend',
      demoLink: 'https://stately-bombolone-0812fa.netlify.app/',
      buttonColor: '#ff385c',
      disabled: false,
    },
    {
      id: 5,
      src: vapo,
      title: 'Vapo',
      technologies: 'React.js | Flask | Python | Tailwind',
      frontendLink: 'https://github.com/KotaUeshima/vapo',
      backendLink: 'https://github.com/KotaUeshima/vapo',
      demoLink: '',
      buttonColor: '#87c232',
      disabled: true,
    },
    {
      id: 6,
      src: college_marketplace_app,
      title: 'College Marketplace App',
      technologies: 'Swift | Firebase | UIKit',
      frontendLink:
        'https://github.com/KotaUeshima/College_Marketplace_App',
      backendLink:
        'https://github.com/KotaUeshima/College_Marketplace_App',
      demoLink: 'https://clever-kulfi-41745d.netlify.app/',
      buttonColor: '#ff2d55',
      disabled: true,
    },
  ]

  return (
    <div
      name='portfolio'
      className='py-20 bg-primary w-full min-h-screen text-black'
    >
      <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='header text-white'>My Projects</p>
          <p className='subheader text-white'>
            Here is some of my most recent work!
          </p>
        </div>

        <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0'>
          {portfolios.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
