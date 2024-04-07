"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const NavLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Nav = () => {
  const [NavOpen, setNavOpen] = useState(false);

  return (
    <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link
          href={'/'} className='text-2xl md:text-3xl text-[#CACACA] m:text-xl rounded md:p-0 hover:text-white font-bold'>
          Nathan Kitching
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!NavOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {NavOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
};

export default Nav;