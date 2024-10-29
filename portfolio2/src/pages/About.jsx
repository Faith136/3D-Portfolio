/* eslint-disable react/no-unescaped-entities */
//import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMessage } from "react-icons/ai";
import Heading from "./Heading";


const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="A brief explanation about myself."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
                       As a passionate web developer, I thrive on creating web applications that provide engaging user experiences. My academic background in web development has equipped me with the necessary skills to succeed in the industry, and I am eager to apply what I've
                    learned to real-world projects. In addition to my expertise in web development, I am also experienced in networking, as a technical support.
         </p>{" "}
        <br />
        <p>
                    I am eagerly anticipating the opportunity to work with you. Kindly send me an email at the address provided in the contact section. Thank you very much.
        </p>
        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <AiFillMessage className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="primary-btn">
            Download Resume
          </a>
          <a href="../" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;