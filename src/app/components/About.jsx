'use client';
import { useTransition, useState } from 'react';
import Image from 'next/image';
import Tabs from './Tabs';

const tab_DATA = [
  {
    title:'Skills',
    id:'skills',
    desc: (
    <ul className='list-disc pl-2'>
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
    <ul className='list-disc pl-2'>
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
    <ul className='list-disc pl-2'>
      <li><a href='https://www.linkedin.com/learning/certificates/8ea9114130c1223a80a89d81456148c2c3197b85cfba60f4ce265992626515a9'>Microsoft Cloud Fundamentals: Administering Office 365 and Intune</a></li>
      <li><a href="https://www.linkedin.com/learning/certificates/a929848ee6bfabe63871eb40baa10fb1a8ba82d56cdc80b72f91153fd356473f?accountId=84863210&u=84863210&success=true&authUUID=yf274LeXTgiEbRZoeXwfng%3D%3D">Cybersecurity Foundations</a></li>
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
          src='/images/about.jpg'
          alt='about.png_500x500'
          width={500}
          height={500}
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am deeply passionate and enthusiastic about my work, which drives my motivation and determination. In my spare time, away from work, I have taken the time to learn more about web development as I have taken a keen and strong interest in this field. Currently working as an IT Technician I soon aim to get into the Cybersecurity Industry. I enjoy creating interactive and resposive web applications.
          </p>
          <div className='flex flex-row justify-start mt-6'>
            <Tabs selectTab={()  =>  handleTabSwitch('skills')} active={tab === 'skills'}>Skills</Tabs>
            <Tabs selectTab={()  =>  handleTabSwitch('experience')} active={tab === 'experience'}>Experience</Tabs>
            <Tabs selectTab={()  =>  handleTabSwitch('certifications')} active={tab === 'certifications'}>Certifications</Tabs>
          </div>
          <div className='mt-4'>{tab_DATA.find((t) => t.id === tab).desc}</div>
        </div>
      </div>
    </section>
  )
}

export default About;
