import React from "react";
import NavLink from "../NavLink";

function Details() {
  return (
    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <div
        id="details"
        className="lg:max-h-[500px] flex flex-col sm:flex-row sm:overflow-hidden justify-center max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 p-12 rounded-2xl text-white"
      >
        <iframe
          className="w-full border: 1px solid rgba(0, 0, 0, 0.1); mr-4 lg:w-[500px] h-[400px] sm:w-[500px] h-[400px] border rounded-2xl sm:mb-0"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3JNmDeIdKdLb2SUu7jwZkQ%2FDesignFast-%255BFigma-Library%255D%3Ftype%3Ddesign%26node-id%3D19%253A1905%26mode%3Ddesign%26t%3DYA658wRrzPSf0jVB-1"
          allowfullscreen
        ></iframe>
        <p className="text-black ml-4 mt-5">
          <span className="text-gray-800 text-3xl font-extrabold sm:text-4xl flex mb-10">
            🌟 Components
          </span>
          <ul className="text-gray-500">
            <li className="p-2">
              Get better at designing components <br /> that converts
            </li>
            <li className="p-2">
              ✔️ 150+ Figma design components to quickly build 1000+ <br />{" "}
              landing pages
            </li>
            <li className="p-2">✔️ Easy prototyping</li>
            <li className="p-2">✔️ Animate your designs</li>
            <li className="p-2">✔️ Pre-designed components</li>
          </ul>
        </p>
      </div>
      {/* <div> */}
        {/* <NavLink
          href="https://buy.stripe.com/dR6bLR9Mg1vvcMweV7"
          className="flex w-[150px] items-center mx-auto p-1 h-12 justify-center inline-block font-medium text-md text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-white active:bg-white hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover: ring ring-transparent ring-offset-2 transition"
        >
          $29 (one-time)
        </NavLink> */}

        {/* <span className="flex mx-auto w-90 p-1 h-20 justify-center items-center text-md font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ml-1">
        SPECIAL 40% OFF <span className="line-through text-black ml-1 mr-1">$49</span> $29
      </span> */}
        <div
          id="details"
          className="lg:max-h-[500px] flex flex-col sm:flex-row sm:overflow-hidden justify-center max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 p-12 rounded-2xl text-white mt-1"
        >
          <p className="text-black mr-5 mt-5">
            <span className="text-gray-800 text-3xl font-extrabold sm:text-4xl flex mb-10">
              🎨 Landing Pages
            </span>
            <ul className="text-gray-500">
              <li className="p-2">
                Build Intuitive Landing Pages {" "} <br />that converts
              </li>
              <li className="p-2">
                ✔️ 15+ Pre-designed {" "}
                templates
              </li>
              <li className="p-2">✔️ 100+ Landing Page Components</li>
              <li className="p-2">✔️ Graphic elements to elevate your page</li>             
              <li className="p-2">✔️ Easy to Edit</li>
            </ul>
          </p>
          <iframe
            className="w-full border: 1px solid rgba(0, 0, 0, 0.1); mr-4 lg:w-[500px] h-[400px] sm:w-[500px] h-[400px] border rounded-2xl sm:mb-0"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3JNmDeIdKdLb2SUu7jwZkQ%2FDesignFast-%255BFigma-Library%255D%3Ftype%3Ddesign%26node-id%3D12%253A225%26mode%3Ddesign%26t%3DhGvWVOeM3wUYSp65-1"
            allowfullscreen
          ></iframe>
        </div>
        <div
        id="details"
        className="lg:max-h-[500px] flex flex-col sm:flex-row sm:overflow-hidden justify-center max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 p-12 rounded-2xl text-white"
      >
        {/* <img
            src="/nav2.png"
            alt="Designfast logo"
            className="mr-24 lg: w-[500px] h-[400px] border rounded-lg"
        />   */}
        <iframe
          className="w-full border: 1px solid rgba(0, 0, 0, 0.1); mr-4 lg:w-[500px] h-[400px] sm:w-[500px] h-[400px] border rounded-2xl sm:mb-0"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3JNmDeIdKdLb2SUu7jwZkQ%2FDesignFast-%255BFigma-Library%255D%3Ftype%3Ddesign%26node-id%3D22%253A1079%26mode%3Ddesign%26t%3DhGvWVOeM3wUYSp65-1"
          allowfullscreen
        ></iframe>
        <p className="text-black ml-4 mt-5">
          <span className="text-gray-800 text-3xl font-extrabold sm:text-4xl flex mb-10">
            🌐 Web Apps
          </span>
          <ul className="text-gray-500">
            <li className="p-2">
              Design web apps with good design <br /> & UX
            </li>
            <li className="p-2">✔️ 150+ Web App Components</li>
            <li className="p-2">
              ✔️ 10+ best-designed indie <br />{" "}
              landing pages 
            </li>
            
            <li className="p-2">✔️ simplified interfaces</li>
            <li className="p-2">✔️ colors & better typeface</li>
          </ul>
        </p>
      </div>
     
    </div>
  );
}

export default Details;
