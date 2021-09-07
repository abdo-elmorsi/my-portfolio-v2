import React, { useState, useEffect } from "react"
import { IoClose } from 'react-icons/io5';
import "./style.css"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
function Sidbar() {
	const [Menu, setMenu] = useState(false);
	let fun = () => window.innerWidth < 768 ? setMenu(false) : setMenu(true)
	useEffect(() => {
		fun();
		window.onresize = () => fun();
	}, []);
	return (
		<div className="w-10/12 md:w-4/12 lg:w-2/12 h-screen fixed overflow-y-auto">
			<div onClick={() => setMenu(!Menu)} className=" absolute top-0 left-0 z-0 flex justify-center md:hidden items-center w-12 h-12 bg-white text-primary cursor-pointer"><FiMenu /></div>
			<div className={`bg-primary text-center text-white min-h-screen pt-0 md:pt-10 md:block ${Menu ? "" : "transform -translate-x-full opacity-0"} transition duration-700 z-10 relative`}>
				<div onClick={() => setMenu(!Menu)} className="flex justify-center md:hidden bg-white py-5 text-2xl text-primary cursor-pointer"><IoClose /></div>
				<div className="mb-8 mt-10 md:mt-0 w-4/12 mx-auto rounded-full overflow-hidden">
					<img className="w-full h-full" src={"./images/author-image.jpg"} alt="" />
				</div>
				<h2 className="text-3xl font-bold">Abdo Elmorsy</h2>
				<span className="text-xs">Front End Developer</span>
				<ul className="px-5 mt-8 lg:mt-16 flex flex-col">
					<li className="active py-5 border-t-2 border-white font-bold text-pase hover:bg-white hover:text-primary cursor-pointer">About Me</li>
					<li className="py-5 border-t-2 border-white font-bold text-pase hover:bg-white hover:text-primary cursor-pointer">What i'm good at</li>
					<li className="py-5 border-t-2 border-white font-bold text-pase hover:bg-white hover:text-primary cursor-pointer">My Work</li>
					<li className="py-5 border-b-2 border-t-2 border-white font-bold text-pase hover:bg-white hover:text-primary cursor-pointer">Contact Us</li>
				</ul>
				<ul className="px-10 my-7 flex justify-between">
					<li className="flex items-center font-bold text-pase rounded-md bg-primary p-3 hover:bg-white hover:text-primary cursor-pointer"><FaFacebookF /></li>
					<li className="flex items-center font-bold text-pase rounded-md bg-primary p-3 hover:bg-white hover:text-primary cursor-pointer"><FaTwitter /></li>
					<li className="flex items-center font-bold text-pase rounded-md bg-primary p-3 hover:bg-white hover:text-primary cursor-pointer"><FaLinkedinIn /></li>
					<li className="flex items-center font-bold text-pase rounded-md bg-primary p-3 hover:bg-white hover:text-primary cursor-pointer"><FaWhatsapp /></li>
				</ul>
				<footer className="border-secondary border-t-2 py-10 mb-30">
					<p className="text-sm">Copyright 2021 Abdo Ahmed</p>
				</footer>
			</div>
		</div>
	)
}
export default Sidbar