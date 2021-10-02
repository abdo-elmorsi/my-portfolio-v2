import React from "react";
import "./About.css";
import ImageLoader from "../Helpers/imageLoading";
import Header from "../Helpers/Headers/header";
import Button from "../Helpers/Button";
let Desc = `I Am A Front-End Developer With More Than Two Years Of Experience. I Am
From Cairo, Egypt, And I Create Sites For Great People Around The World
To Get More And More Experiences In Developing Sites.`;

const AbouMe = () => {
  return (
    <div
      id="About"
      className="text-white text-center border-gray-500 border-b-4 pb-20"
    >
      <Header Name="About Us" Desc={Desc} />
      <div className="flex justify-between flex-col md:flex-row pb-20 border-b-2 border-gray-600">
        <div className="w-full lg:w-6/12 rounded-lg overflow-hidden">
          <ImageLoader
            src={"./images/left-image.jpg"}
            className="filter blur-sm transition duration-500 ease-in-out"
            alt=""
          />
        </div>
        <div className="w-full lg:w-6/12 text-left p-0 pt-3 md:p-5 space-y-4 md:space-y-7">
          <h2 className="text-3xl font-bold">Education</h2>
          <p className="mt-7">
            I study in Integrated Thebes Academy of Sciences
          </p>
          <p className="text-xs text-gray-500">Sep 2019 - Jul 2022</p>
          <Button msg={"READ MORE"} px={"6"} py={"3"} />
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row pt-16">
        <div className="w-full lg:w-6/12 text-left p-0 py-3 md:p-5 space-y-3 md:space-y-5">
          <h2 className="text-3xl font-bold">My Skills</h2>
          {[
            "Html5 & Css3",
            "Sass & Bootstrap",
            "Tawlind.css",
            "JavaScript & Dom/Bom",
            "Jquery & React.Js",
          ].map((item, i) => (
            <p key={i}>{item}</p>
          ))}
          <Button msg={"READ MORE"} px={"6"} />
        </div>
        <div className="w-full lg:w-6/12 rounded-lg overflow-hidden">
          <ImageLoader
            src={"./images/right-image.jpg"}
            className="filter blur-sm transition duration-500 ease-in-out"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default AbouMe;
