import React from 'react'
//import osebna from '../assets/osebna.png';
import osebna from '/vite.svg'
import { Icon } from '@iconify/react';

const Hero = () => {
  return (
    <section className="bg-stone-700 py-10">
      <div className="w-2/3 mx-auto">
        <header className="grid grid-cols-1 md:grid-cols-3 items-start">

          <figure className="md:col-span-1 pt-2 w-full max-w-[200px] justify-self-center">
            <img alt="osebna" src={osebna} className="block mx-auto border-4 border-white" />
          </figure>

          <div className="md:col-span-1 place-self-center text-center">
            <h1 className="text-white font-black text-5xl pt-2">Tomi Cigula</h1>
            <div className="text-white text-xl">Software Developer</div>
          </div>

          <aside className="md:col-span-1 text-center pt-2 place-self-center">
            <p className="text-white font-mono italic">
              "Engineering the Future, One Application at a Time."
            </p>
          </aside>

          {/* Naslov sekcije – čez celoto */}
          <h2 className="col-span-full text-center text-white leading-none mb-0 mt-0 pt-6 pb-4">
            SKILLS &amp; LANGUAGES
          </h2>

          {/* 3 stolpci v naslednji vrstici */}
          <ul className="-mt-2 md:col-span-1 text-center border-t-4 border-black-500">
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:javascript" /> JavaScript
            </li>
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:kotlin" /> Kotlin
            </li>
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:c-plusplus" /> C++
            </li>
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:react" /> React
            </li>
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:nodejs" /> Node.js
            </li>
          </ul>

          <ul className="-mt-2 md:col-span-1 text-center border-t-4 border-black-500">
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:postgresql" /> PostgreSql
            </li>
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:mysql" /> MySql
            </li>
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:git" /> Git
            </li>
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:jira" /> Jira
            </li>
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <Icon icon="logos:docker" /> Docker
            </li>
          </ul>

          <ul className="-mt-2 md:col-span-1 text-center border-t-4 border-black-500">
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <span>🇸🇮</span> <span>SLOVENIAN</span>
            </li>
            <li className="flex items-center justify-center gap-2 py-2 text-white">
              <span>🇬🇧</span> <span>ENGLISH</span>
            </li>
          </ul>
        </header>
      </div>
    </section>
  );
}

export default Hero;

