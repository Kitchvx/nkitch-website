import React from 'react';
import PCards from './PCards';

const project_DATA = [
    {
      id: 1,
      title: 'React Portfolio Website',
      description: 'The "behind the scenes" of creating this portfolio project using NextJS and TailwindCSS Stack, credit to "judygab" on GitHub for the inspo. Find out more above!',
      image: '/images/projects/1.png',
      tag: ['All', 'Web'],
      gitUrl: 'https://github.com/Kitchvx/nkitch-website',
      previewUrl: '/',
    },
      {
        id: 2,
        title: 'React Blog Website',
        description: 'A project centred around the blog I have always wanted to make to document my experiences in the different fields I have interests in. Stacked with etc etc etc. Find out more above!',
        image: '/images/projects/1.png',
        tag: ['All', 'Web'],
        gitUrl: '#',
        previewUrl: '#',
      },
      {
        id: 3,
        title: 'Ramshackle Books Website',
        description: 'This is, to date (29/07/2024), the only other web project I have created (more soon!). Made with the stack: NextJS, Tailwind, MySQL, NextAuth and Stripe. Find out more above!',
        image: '/images/projects/1.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/Kitchvx/ramshacklebooks',
        previewUrl: 'https://ramshacklebooks.co.uk',
      },
  ];

const Projects = () => {
  return (
      <>
        <h1 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h1>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <button className='rounded-full border-2 border-red-500 px-5 py-2 text-xl'>All</button>
            <button className='rounded-full border-2 border-[#ADB7BE] px-5 py-2 text-xl'>Web</button>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {project_DATA.map(
                (project => <PCards
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}/>)
                )}
            </div>
      </>
  )
}

export default Projects