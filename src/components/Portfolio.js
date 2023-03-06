import React from 'react'
import globify from '../assets/portfolio/globify.png'
import college_marketplace from '../assets/portfolio/college_marketplace.png'
import traveler from '../assets/portfolio/traveler.png'
import droneco from '../assets/portfolio/droneco.png'
import vapo from '../assets/portfolio/vapo.png'
import amazonscraper from '../assets/portfolio/amazon-scraper.png'
import Project from './Project'

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: globify,
      title: 'Globify',
      technologies: 'React.js | Ruby on Rails | Bootstrap',
      frontendLink: 'https://github.com/KotaUeshima/globify-frontend',
      backendLink: 'https://github.com/KotaUeshima/globify-backend',
      demoLink: 'https://stately-bombolone-0812fa.netlify.app/',
      disabled: false,
      demoButtonColor: 'text-pink-800',
    },
    {
      id: 2,
      src: droneco,
      title: 'DroneCo',
      technologies: 'React.js | Next.js | Tailwind',
      frontendLink: 'https://github.com/KotaUeshima/DroneCo',
      backendLink: 'https://github.com/KotaUeshima/DroneCo',
      demoLink: 'https://drone-co.vercel.app/',
      disabled: false,
    },
    {
      id: 3,
      src: amazonscraper,
      title: 'Amazon Scraper',
      technologies: 'TypeScript | Next.js | Webhooks',
      frontendLink: 'https://github.com/KotaUeshima/amazon-scraper',
      backendLink: 'https://github.com/KotaUeshima/amazon-scraper',
      demoLink: 'https://brightdata-amazon-scraper-lovat.vercel.app/',
      disabled: false,
    },
    {
      id: 4,
      src: vapo,
      title: 'Vapo',
      technologies: 'React.js | Tailwind | Python | Flask',
      frontendLink: 'https://github.com/KotaUeshima/vapo',
      backendLink: 'https://github.com/KotaUeshima/vapo',
      demoLink: '',
      disabled: true,
    },
    {
      id: 5,
      src: college_marketplace,
      title: 'College Marketplace',
      technologies: 'React.js | Ruby | MUI',
      frontendLink: 'https://github.com/KotaUeshima/college_marketplace_frontend',
      backendLink: 'https://github.com/KotaUeshima/college_marketplace_backend',
      demoLink: 'https://clever-kulfi-41745d.netlify.app/',
      disabled: true,
    },
    {
      id: 6,
      src: traveler,
      title: "Traveler's Guide",
      technologies: 'React.js | MUI',
      frontendLink: 'https://github.com/KotaUeshima/traveler-guide',
      backendLink: 'https://github.com/KotaUeshima/travelers-guide-backend',
      demoLink: 'https://fluffy-vacherin-e1c347.netlify.app',
      disabled: true,
    },
  ]

  return (
    <div name='portfolio' className='py-20 bg-white w-full min-h-screen text-black'>
      <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='header'>My Projects</p>
          <p className='subheader'>Here is some of my most recent work!</p>
        </div>

        <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0'>
          {portfolios.map(({ id, src, title, technologies, frontendLink, backendLink, demoLink, disabled }) => (
            <Project
              key={id}
              src={src}
              title={title}
              technologies={technologies}
              frontendLink={frontendLink}
              backendLink={backendLink}
              demoLink={demoLink}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
