import React from "react";
import Image from "next/image";
import nortfaceImg from "../public/assets/jobs/northface.png";
import fossilImg from "../public/assets/jobs/fossil.png";
import jackImg from "../public/assets/jobs/jackjones.png";
import ckImg from "../public/assets/jobs/ck.webp";

const Jobs = () => {
  return (
    <div className="w-full lg:h-screen p-2 py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Resume
        </p>
        <h2 className="py-4">Job Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nortfaceImg} alt="" width="98px" height="98px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="py-2">The North Face </h2>
                <h3>Sales Associate</h3>
                <h3>Fulltime 38 hours</h3>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>jul. 2021 - feb 2022</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>Roermond, Limburg, Nederland</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={fossilImg} alt="" width="98px" height="98px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="py-2">Fossil Group</h2>
                <h3>Sales Associate</h3>
                <h3>Parttime 32 hours</h3>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>mei 2019 - jul. 2021</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>Maastricht, Limburg, Nederland</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jackImg} alt="" width="98px" height="98px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="py-2">Jack & Jones</h2>
                <h3>Sales Associate</h3>
                <h3>Parttime 32 hours</h3>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>feb. 2019 - mei 2019</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>Roermond, Limburg, Nederland</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ckImg} alt="" width="98px" height="98px" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="py-2">Calvin Klein</h2>
                <h3>Sales Associate</h3>
                <h3>Parttime 24 hours</h3>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>mei 2018 - mei 2019 </p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>Roermond, Limburg, Nederland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
