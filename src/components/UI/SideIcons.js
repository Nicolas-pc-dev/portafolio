import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SideIcons = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[20rem] left-0">
      <ul>
        <li className="w-[160px] h-[4rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2] rounded-tr-md text-[#fff]">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-5"
            href="https://www.linkedin.com/in/nicolaspe%C3%B1a-dev/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[4rem] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1f1e1e] text-[#fff] rounded-br-md">
          <a
            className="flex justify-between items-center w-full text-gray-300 ml-5"
            href="https://github.com/Nicolas-pc-dev"
            rel="noreferrer"
            target="_blank"
          >
            Git-Hub <FaGithub size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideIcons;