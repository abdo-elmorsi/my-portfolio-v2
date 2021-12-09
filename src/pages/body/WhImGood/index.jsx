import React from "react";
import Header from "../../../Helpers/Headers/header";
import Box from "./Box";
import "./Box.css";
let Desc = `I Am A Front-End Developer With More Than Two Years Of Experience. I Am
From Cairo, Egypt, And I Create Sites For Great People Around The World
To Get Mor`;
let data = [
  {
    id: 1,
    Icon: "./images/second-white-icon.png",
    IconT: "./images/second-main-icon.png",
    Name: "Front-End Developer",
    Desc: "Do you need a front-end developer? I'm here. I know CSS SASS BOOTSTRAP for front end design, I also know JS REACT-JS JQUERY for front end development.",
  },
  {
    id: 2,
    Icon: "./images/first-white-icon.png",
    IconT: "./images/first-main-icon.png",
    Name: "Psd To Html",
    Desc: "I've done over twenty PSD to HTML_CSS_JS, and they've been very responsive. Call me to order. I will give you a review, until you are satisfied. I can also create an e-commerce website",
  },
  {
    id: 3,
    Icon: "./images/third-white-icon.png",
    IconT: "./images/third-main-icon.png",
    Name: "Easy Customize",
    Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, tenetur. Optio labore architecto nostrum, eligendi vero cupiditate doloremque id",
  },
  {
    id: 4,
    Icon: "./images/fourth-white-icon.png",
    IconT: "./images/fourth-main-icon.png",
    Name: "Admin Dashboard",
    Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, tenetur. Optio labore architecto nostrum, eligendi vero cupiditate doloremque id",
  },
];
function WhImGood() {
  return (
    <div
      id="What"
      className="text-white text-center"
    >
      <Header Name="What I’m good at?" Desc={Desc} />
      <div className="flex justify-around flex-wrap">
        <Box data={data} />
      </div>
    </div>
  );
}
export default WhImGood;
