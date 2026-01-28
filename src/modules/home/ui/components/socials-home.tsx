"use client";

import { CiMail } from "react-icons/ci";
import { FaGithub, FaXTwitter, FaLinkedin, FaKaggle, FaYoutube, FaSpotify, FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export const SocialsHome = () => {
  return (
    <div className="flex gap-6 pt-4">
      <a href="mailto:Ayushmaan06@gmail.com" className="transition-transform hover:text-primary hover:rotate-15"><CiMail size={28} /></a>
      <a href="https://github.com/Ayushmaan06" target="_blank" className="transition-transform hover:text-primary hover:rotate-15"><FaGithub size={28} /></a>
      <a href="https://x.com/Ayushmaan06" target="_blank" className="transition-transform hover:text-primary hover:rotate-15"><FaXTwitter size={28} /></a>
      <a href="https://linkedin.com/in/Ayushmaan06" target="_blank" className="transition-transform hover:text-primary hover:rotate-15"><FaLinkedin size={28} /></a>
      <a href="https://kaggle.com/Ayushmaan06" target="_blank" className="transition-transform hover:text-primary hover:rotate-15"><FaKaggle size={28} /></a>
      <a href="https://leetcode.com/Ayushmaan06" target="_blank" className="transition-transform hover:text-primary hover:rotate-15"><SiLeetcode size={28} /></a>
      <a href="https://youtube.com/@vedthetank" target="_blank" className="transition-transform hover:text-primary hover:rotate-15"><FaYoutube size={28} /></a>
      <a href="https://spotify.com/user/Ayushmaan06" target="_blank" className="transition-transform hover:text-primary hover:rotate-15"><FaSpotify size={28} /></a>
      <a href="https://medium.com/@Ayushmaan06" target="_blank" className="transition-transform hover:text-primary hover:rotate-15"><FaMedium size={28} /></a>
    </div>
  );
};