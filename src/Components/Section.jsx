import React from "react";
import homeImg from "../assets/homeImg-removebg-preview.png"
import { AiOutlineGithub} from "react-icons/ai";
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';


export default function Section() {

    return <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center items-center">
        <div className="md:w-1/2 flex flex-col overflow-hidden">
            <h1 className="text-white text-6xl font-section-font ">
                <span className="hii block"> Hi  </span>
                <span className="karthika block"> I'm karthika</span>   
                <p className="mernstack block text-lg m-2  text-black font-extrabold"> I'm a MERN STACK DEVELOPER</p>
            </h1>
            <div className="flex py-9">
                <a href="mailto:karthikakg2903@gmail.com" target="_blank" className=" pr-5  hover:text-white">< AiFillMail size={40} /></a>
                <a href="https://github.com/karthika2903" target="_blank" className="pr-5 hover:text-white">< AiOutlineGithub size={40} /></a>
                <a href="https://www.linkedin.com/in/karthikak03/" target="_blank" className="hover:text-white">< AiFillLinkedin size={40} /></a>
            </div>
        </div>
        <img className=" md:w-1/4 " src={homeImg} alt="home"></img>

    </section>
};
