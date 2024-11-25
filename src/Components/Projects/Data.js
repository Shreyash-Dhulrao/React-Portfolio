import Project1 from '../../Images/Projects/Project 1.jpg'
import Project2 from '../../Images/Projects/VideoCall.png'
import React from '../../Icons/Social/React.png'
import Firebase from '../../Icons/Social/Firebase.png'
import Tailwind from '../../Icons/Social/Tailwind.png'

const projects = [
    {
        id: 1,
        name: "Alpha Type",
        icons: [React, Firebase, Tailwind],
        description: "Alpha Type is your go-to platform to improve typing speed and accuracy. Whether you're a beginner or looking to refine your skills, Alpha Type provides personalized exercises and progress tracking to help you type faster and more efficiently.",
        image: Project1,
        link: 'https://alphatype.vercel.app/',
        github: "https://github.com/Shreyash-Dhulrao/Alpha-Type"
        
    },
    {
        id: 2,
        name: "Video Calling App",
        icons: [React, Tailwind],
        description: "Developed a feature-rich, real-time video calling web application using ZEGOCLOUD, ensuring high-quality audio and video streaming.Implemented responsive design for seamless user experience across devices and optimized application performance to handle multiple concurrent users.",
        image: Project2,
        link: 'https://zegocloudvcall.vercel.app/',
        github: "https://github.com/Shreyash-Dhulrao/Video-Calling"

    },
]

export default projects