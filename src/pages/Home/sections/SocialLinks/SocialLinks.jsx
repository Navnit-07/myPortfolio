import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
  return (
    <section className="bg-[#695aa6] py-8 mt-8 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center sm:justify-around">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h4 className="text-[#f8f9fa] font-extrabold text-lg sm:text-xl mb-2">
              Want to work with me?
            </h4>
            <p className="text-[#f8f9fa] text-sm sm:text-base font-sans">
              Always feel free to contact &amp; hire me
            </p>
          </div>

          <div className="flex gap-6 py-2 px-6 border-2 border-white rounded">
            <a
              href="https://github.com/Navnit-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl transition duration-300"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/navnit-kumar-35969729b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl transition duration-300"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/codernavank/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-2xl transition duration-300"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
