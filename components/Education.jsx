import React from "react";
import Image from "next/image";
import zuydImg from "../public/assets/education/zuyd.png";
import nhaImg from "../public/assets/education/nha.png";
import vistaImg from "../public/assets/education/vista.png";
import emmaImg from "../public/assets/education/emma.jpeg";

const Education = () => {
  return (
    <div className="w-full lg:h-screen p-2 py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4">Education</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={zuydImg} alt="" width="98px" height="98px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="py-2">Software Engineering</h3>
                <p className="text-md tracking-widest uppercase">
                  Zuyd Hogeschool
                </p>
                <p>Associate Degree</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>sep. 2022 - present</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>Heerlen, Limburg, Nederland</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nhaImg} alt="" width="98px" height="98px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="py-2">Software Developer</h3>
                <p className="text-md tracking-widest uppercase">
                  NHA Oppleidingen
                </p>
                <p>Cursus</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>feb.2022 - Heden</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>Heerlen, Limburg, Nederland</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={vistaImg} alt="" width="98px" height="98px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="py-2">Manager Retail</h3>
                <p className="text-md tracking-widest uppercase">
                  Vista College
                </p>
                <p>MBO 4</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>sep. 2019 - feb.2022</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>Heerlen, Limburg, Nederland</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={emmaImg} alt="" width="98px" height="98px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="py-2">Richting ICT</h3>
                <p className="text-md tracking-widest uppercase">
                  Emma College
                </p>
                <p>VMBO Kader</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>sep. 2013 - jul. 2017</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>Heerlen, Limburg, Nederland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
