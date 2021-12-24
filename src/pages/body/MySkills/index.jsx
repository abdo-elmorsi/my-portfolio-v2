import React from "react";
import "./style.css";
import ImageLoader from "../../../Helpers/imageLoading/index";
import Header from "../../../Components/Headers";
// import Button from "../../../Helpers/Button";
import { motion } from "framer-motion";
import { slideToLeft, slideToRight } from "../../../Helpers/Animation";
// let Desc = `I Am A Front-End Developer With More Than Two Years Of Experience. I Am
// From Cairo, Egypt, And I Create Sites For Great People Around The World
// To Get More And More Experiences In Developing Sites.`;

const AbouMe = () => {
    return (
        <div id="skills" className="text-white text-center">
            <Header Name="My Skills" />
            <div className="flex justify-between flex-col md:flex-row">
                <motion.div
                    variants={slideToRight}
                    animate="visible"
                    initial="hidden"
                    className="flex flex-wrap w-full lg:w-6/12 py-3"
                >
                    {[
                        "Html5 & Css3",
                        "Sass",
                        "Bootstrap.Css & Tawlind.Css",
                        "Git & Github/GitLab",
                        "JavaScript & Dom/Bom",
                        "Jquery & React.Js",
                        "Redux & Redux Toolkit",
                        "Next.js",
                    ].map((item, i) => (
                        <span
                            className={`w-6/12 lg:w-full mb-3 text-lg
                            ${i === 0 && " text-blue-300"}
                            ${i === 1 && " text-blue-400"}
                            ${i === 2 && " text-blue-300"}
                            ${i === 3 && " text-yellow-300"}
                            ${i === 4 && " text-blue-300"}
                            ${i === 5 && " text-blue-400"}
                            ${i === 6 && " text-blue-300"}
                            ${i === 7 && " text-blue-400"}
                            `}
                            key={i}
                        >
                            {item}
                        </span>
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
