import React from "react";
import "./style.css";
import ImageLoader from "../../../Helpers/imageLoading/index";
import Header from "../../../Components/Headers";
// import Button from "../../../Components/Button";
import { motion } from "framer-motion";
import { slideToLeft, slideToRight } from "../../../Helpers/Animation";
let Desc = `I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React. I also have experience working with Html 5, CSS 3, BootStrap, Sass, Styled Components, JavaScript, JQuery, React, and Redux. Take a look at my work or get in touch! https://elmorsy.vercel.app/my`;

const AbouMe = () => {
    return (
        <div id="About" className="text-white text-center">
            <Header Name="About me" Desc={Desc} />
            <div className="flex justify-between flex-col md:flex-row">
                <motion.div
                    variants={slideToRight}
                    animate="visible"
                    initial="hidden"
                    className="w-full lg:w-6/12 rounded-lg overflow-hidden"
                >
                    <ImageLoader
                        src={"./images/left-image.jpg"}
                        className=""
                        alt=""
                    />
                </motion.div>
                <motion.div
                    variants={slideToLeft}
                    animate="visible"
                    initial="hidden"
                    className="w-full lg:w-6/12 text-left p-0 pt-3 md:p-5 space-y-4 md:space-y-7"
                >
                    <h2 className="text-3xl font-bold">Education </h2>
                    <p className="mt-7">
                        I study in Integrated Thebes Academy of Sciences
                    </p>
                    <p className="text-xs text-gray-500">Sep 2019 - Jul 2022</p>
                    {/* <Button msg={"READ MORE"} px={"6"} py={"3"} /> */}
                </motion.div>
            </div>
        </div>
    );
};
export default AbouMe;
