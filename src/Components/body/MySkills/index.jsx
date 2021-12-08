import React from "react";
import "./style.css";
import ImageLoader from "../Helpers/imageLoading";
import Header from "../Helpers/Headers/header";
import Button from "../Helpers/Button";
let Desc = `I Am A Front-End Developer With More Than Two Years Of Experience. I Am
From Cairo, Egypt, And I Create Sites For Great People Around The World
To Get More And More Experiences In Developing Sites.`;

const AbouMe = () => {
    return (
        <div id="skills" className="text-white text-center">
            <Header Name="My Skills" Desc={Desc} />
            <div className="flex justify-between flex-col md:flex-row">
                <div className="w-full lg:w-6/12 text-left p-0 py-3 md:p-5 space-y-3 md:space-y-5">
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
                <div className="w-full md:w-6/12 rounded-lg overflow-hidden">
                    <ImageLoader
                        src={"./images/right-image.jpg"}
                        className=""
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
export default AbouMe;
