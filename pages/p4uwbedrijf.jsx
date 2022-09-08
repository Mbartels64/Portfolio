import React from 'react';
import Image from 'next/image';
import p4uwbedrijfImg from '../public/assets/projects/p4uwbedrijf.jpeg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Restaurant = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={p4uwbedrijfImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Restaurant Site</h2>
          <h3>NextJS / Tailwind.CSS / MongoDB</h3>
          <h4 className="text-sm tracking-widest font-thin">
            WORK IN PROGRESS!!
          </h4>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Project
          </p>
          <h2 className="py-4">Overview</h2>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            atque minima provident impedit aperiam iusto eius repudiandae fuga
            corporis ipsa non, ullam nemo temporibus cumque? Ea aliquam
            exercitationem optio cumque.
          </p>
          <a
            href="https://p4uwbedrijf2.vercel.app/"
            target={'_blank'}
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/Mbartels64/p4uwbedrijf2"
            target={'_blank'}
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind.CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Framer Motion
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Restaurant;
