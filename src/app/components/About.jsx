'use client';
import { useTransition, useState } from 'react';
import Image from 'next/image';
import Tabs from './Tabs';

const tab_DATA = [
  {
    title:'Skills',
    id:'skills',
    desc: (
    <ul>
      <li>Team Work</li>
      <li>Critical Thinking</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Node.js</li>
      <li>React</li>
      <li>Git</li>
      <li>GNU/Linux</li>
      <li>Windows Server</li>
      <li>Microsoft On-Premise/Cloud-based Endpoint Management</li>
    </ul>
    )
  },
  {
    title:'Experience',
    id:'experience',
    desc: (
    <ul>
      <li>Hartlepool College of Further Education</li>
      <li>Modern IT Apprentice at NEC Software Solutions</li>
      <li>Website Developer at a Local Business</li>
    </ul>
    )
  },
  {
    title:'Certifications',
    id:'certifications',
    desc: (
    <ul>
      <li>Microsoft Cloud Fundamentals: Administering Office 365 and Intune</li>
      <li>Cybersecurity Foundations</li>
      <li>Networking Fundamentals</li>
    </ul>
    )
  },
]

const About = () => {
  const [tab, setTab] = useState('skills');
  const [Pending, sTransition] = useTransition();

  const handleTabSwitch = (id) => {
    sTransition(() => {
      setTab(id);
    });
  }
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/about.png'
          alt='about.png_500x500'
          width={500}
          height={500}
        />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am deeply passionate and enthusiastic about my work, which drives my motivation and determination. In my spare time, away from work, I have taken the time to learn more about web development as I have taken a keen and strong interest in this field. Currently working as an IT Technician I soon aim to get into the Cybersecurity Industry. I enjoy creating interactive and resposive web applications, I am currently learning JavaScript, Node.js and React. My knowledge already includes working with Git, HTML, CSS and working in GNU/Linux enviroments, deploying and maintaining web servers. My day-to-day job includes working with Windows Server, Active Directory/Azure Active Directory (AD/AAD respectively), Microsoft Intune and many other Microsoft On-premise and Cloud-based endpoint management tools/solutions.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <Tabs selectTab={()  =>  handleTabSwitch('skills')} active={tab === 'skills'}>Skills</Tabs>
            <Tabs selectTab={()  =>  handleTabSwitch('Experience')} active={tab === 'Experience'}>Experience</Tabs>
            <Tabs selectTab={()  =>  handleTabSwitch('Certifications')} active={tab === 'Certifications'}>Certifications</Tabs>
            <div className='mt-8'>{tab_DATA.find((t) => t.id === tab).desc}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
