import Link from "next/link";
import React from "react";
import Typed from "react-typed";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <div>
            <h1 className="py-4 text-gray-700">
              Hi, I&#39;m
              <span>
                <Typed
                  className="text-[#5651e5] ml-2"
                  strings={["Mike", "Bartels"]}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </span>
            </h1>
          </div>
          <h1 className="py-2 text-gray-700">A Junior Software Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&#39;m a student who is following a Associates degree software
            engineering at Zuyd Hogeschool based in Heerlen, Limburg.
            <span className="underline mx-1">
              <a href="/resume">see resume.</a>
            </span>
            currently im working on projects to boost my portfolio and gain more
            knowledge and learn different languages
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/mike-bartels-b21805109/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/Mbartels64">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:info@mikebartels.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
