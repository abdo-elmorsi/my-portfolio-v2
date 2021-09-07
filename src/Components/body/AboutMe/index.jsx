import React from "react";
import Header from "../header";
let Desc = `I Am A Front-End Developer With More Than Two Years Of Experience. I Am
From Cairo, Egypt, And I Create Sites For Great People Around The World
To Get More And More Experiences In Developing Sites.`;

function AbouMe() {
  return (
      <div className="text-white text-center border-gray-500 border-b-4 pb-20">
        <Header Name="About Us" Desc={Desc} />
        <div className="flex justify-between flex-col md:flex-row pb-20 border-b-2 border-gray-600">
          <div className="w-full lg:w-6/12 rounded-lg overflow-hidden">
            <img src={"./images/left-image.jpg"} alt="" />
          </div>
          <div className="w-full lg:w-6/12 text-left p-0 pt-3 md:p-5 space-y-4 md:space-y-7">
            <h2 className="text-3xl font-bold">Education</h2>
            <p className="mt-7">
              I study in Integrated Thebes Academy of Sciences
            </p>
            <p className="text-xs text-gray-500">Sep 2019 - Jul 2022</p>
            <button className="text-primary bg-white hover:text-white hover:bg-primary px-5 py-3 font-bold transition duration-300 ease-in-out">
              READ MORE
            </button>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row pt-16">
          <div className="w-full lg:w-6/12 text-left p-0 py-3 md:p-5 space-y-3 md:space-y-5">
            <h2 className="text-3xl font-bold">My Skills</h2>
            <p>Html5 & Css3</p>
            <p>Sass & Bootstrap</p>
            <p>Tawlind.css</p>
            <p>JavaScript & Dom/Bom</p>
            <p>Jquery & React.Js</p>
            <button className="text-primary bg-white hover:text-white hover:bg-primary px-5 py-3 font-bold transition duration-300 ease-in-out">
              READ MORE
            </button>
          </div>
          <div className="w-full lg:w-6/12 rounded-lg overflow-hidden">
            <img src={"./images/right-image.jpg"} alt="" />
          </div>
        </div>
      </div>
  );
}
export default AbouMe;
