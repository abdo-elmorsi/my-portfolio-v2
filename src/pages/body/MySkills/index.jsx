import React from "react";
import "./style.css";
import ImageLoader from "../../../Helpers/imageLoading";
import Header from "../../../Helpers/Headers/header";
// import Button from "../../../Helpers/Button";
import { motion } from "framer-motion";
import { slideToLeft, slideToRight } from "../../../Helpers/Animation";
let Desc = `I Am A Front-End Developer With More Than Two Years Of Experience. I Am
From Cairo, Egypt, And I Create Sites For Great People Around The World
To Get More And More Experiences In Developing Sites.`;

const AbouMe = () => {
    return (
        <div id="skills" className="text-white text-center">
            <Header Name="My Skills" Desc={Desc} />
            <div className="flex justify-between flex-col md:flex-row">
                <motion.div
                    variants={slideToRight}
                    animate="visible"
                    initial="hidden"
                    className="w-full lg:w-6/12 text-left py-3 space-y-3 md:space-y-5"
                >
                    {[
                        "Html5 & Css3",
                        "Sass & Bootstrap",
                        "Tawlind.css",
                        "JavaScript & Dom/Bom",
                        "Jquery & React.Js",
                    ].map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                    {/* <Button msg={"READ MORE"} px={"6"} /> */}
                </motion.div>
                <motion.div
                    variants={slideToLeft}
                    animate="visible"
                    initial="hidden"
                    className="w-full lg:w-6/12 rounded-lg overflow-hidden"
                >
                    <ImageLoader
                        src={"./images/right-image.jpg"}
                        className=""
                        alt=""
                    />
                </motion.div>
            </div>
        </div>
    );
};
export default AbouMe;
