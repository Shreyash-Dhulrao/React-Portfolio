import React from 'react';
import Photo from '../../Images/Photo.png'
import Web from '../../Images/Web.png'
import vscode from '../../Icons/Vscode.png'
import Github from '../../Icons/Github.png'
import Tailwind from '../../Icons/Tailwind.png'
import Figma from '../../Icons/Figma.jpeg'
import Fonts from '../../Icons/Google fonts.png'
import Firebase from '../../Icons/Firebase.png'
import Photoshop from '../../Icons/Photoshop 1.png'
import Illustrator from '../../Icons/Illustrator.png'
import canon from '../../Icons/Canon80d.png'
import Computer from '../../Icons/Computer.svg?react'

const photoApps = [
    {
        name: "Photoshop",
        icon: Photoshop
    },
    {
        name: "Illustrator",
        icon: Illustrator
    },
    {
        name: "Canon EOS 80D",
        icon: canon
    },
]

const webApps = [
    {
        name: "vscode",
        icon: vscode
    },
    {
        name: "Tailwind CSS",
        icon: Tailwind
    },
    {
        name: "Github",
        icon: Github
    },
    {
        name: "Firebase",
        icon: Firebase
    },
    {
        name: "Google Fonts",
        icon: Fonts
    },
    {
        name: "Figma",
        icon: Figma
    },

]
const Profile = () => {
  return (
    <div className="flex items-center justify-center flex-col text-zinc-900 dark:text-white md:px-8 px-3 space-y-0">
      
      {/* Introduction Section */}
      <div className="w-full  flex flex-col items-center md:my-0 my-5">
        <div className="md:w-6/12 w-11/12">
          <Computer className="w-full h-auto" />
        </div>
        <div className="bg-violet-500 px-6  md:px-28 py-10 text-white text-center rounded-lg shadow-md">
          <h2 className="font-semibold md:text-2xl text-lg md:mb-4 mb-2">Hi there! I’m Shreyash Dhulrao. Welcome to my Profile</h2>
          <p className="font-light md:text-sm text-xs font-Petit ">
            I am a Frontend Developer specializing in React JS, crafting dynamic and responsive user interfaces with a focus on performance and usability. Utilizing Tailwind CSS for aesthetics, I ensure a seamless user experience. My expertise extends to Firebase for realtime data management and authentication, enabling scalable web applications.
          </p>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-around w-full md:max-w-6xl md:gap-0 gap-5 ">
        {/* Web Development Card */}
        <div className="bg-zinc-50 shadow-md dark:bg-zinc-900 p-8 md:rounded-bl-3xl md:rounded-none rounded-xl md:border-e dark:border-zinc-700 border-zinc-300 w-full md:w-1/2 flex flex-col md:gap-5 gap-3 items-center">
          <img src={Web} alt="Web Development Icon" className="w-24 h-24  " />
          <h2 className="font-semibold text-xl text-center text-zinc-800 dark:text-white">Web Development</h2>
          <p className="text-center md:text-lg text-sm text-zinc-700 dark:text-zinc-400">
            I like to code things from scratch and enjoy bringing ideas to life in the browser.
          </p>
          <div className="w-full text-center">
            <h4 className="font-semibold text-lg text-violet-500 mt-4">Languages</h4>
            <p className="text-zinc-600 md:text-lg text-sm dark:text-zinc-400">HTML, CSS, JavaScript, Git, GitHub, React JS</p>
          </div>
          <div className="w-full text-center mt-4">
            <h4 className="font-semibold text-lg text-violet-500">Dev Tools</h4>
            <div className="flex flex-wrap justify-center md:mt-2 mt-5 gap-3 ">
              {webApps.map((item, index) => (
                <div key={index} className="flex flex-col items-center transition duration-300 group md:w-1/8 w-1/4 ">
                  <img src={item.icon} alt={item.name} className="md:w-10  md:h-10 w-8 h-8 md:rounded-lg rounded-md transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-medium md:block hidden text-zinc-600 dark:text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-2">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photography Card */}
        <div className="bg-zinc-50 shadow-md dark:bg-zinc-900 p-8 w-full md:w-1/2 md:rounded-br-3xl md:rounded-none rounded-xl flex flex-col md:gap-5 gap-3 items-center">
          <img src={Photo} alt="Photography Icon" className="w-24 h-24" />
          <h2 className="font-semibold text-xl text-center text-zinc-800 dark:text-white">Photography</h2>
          <p className="text-center text-zinc-700 dark:text-zinc-400 md:text-lg text-sm">
            I capture moments with artful simplicity, bringing stories to life through my lens.
          </p>
          <div className="w-full text-center">
            <h4 className="font-semibold text-lg text-violet-500 mt-4">Knowledge</h4>
            <p className="text-zinc-600 md:text-lg text-sm dark:text-zinc-400">Aperture, Shutter Speed, ISO, Mode, Image Editing</p>
          </div>
          <div className="w-full text-center mt-4">
            <h4 className="font-semibold text-lg text-violet-500">Dev Tools</h4>
            <div className="flex flex-wrap justify-center mt-2 gap-4">
              {photoApps.map((item, index) => (
                <div key={index} className="flex flex-col items-center transition duration-300 group w-1/4">
                  <img src={item.icon} alt={item.name} className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110" />
                  <p className="font-medium md:block hidden text-zinc-600 dark:text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-2">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
