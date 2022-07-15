import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">short description</p>
          <p className="py-2 text-gray-600">
            bio....... Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Est consequatur sed quasi eveniet, rerum aut porro nostrum ipsa
            consequuntur obcaecati minus distinctio modi ipsam incidunt maiores
            consectetur veritatis. Dicta, placeat?
          </p>
          <p className="py-2 text-gray-600">
            Bio section 2...... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quibusdam porro similique necessitatibus nemo,
            eaque, ratione omnis ea ad repellendus sapiente blanditiis laborum
            rerum tempore ab placeat animi. Voluptatem, deleniti perferendis?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
