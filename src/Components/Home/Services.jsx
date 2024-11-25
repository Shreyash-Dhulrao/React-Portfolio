import React from 'react';
import WebDes from '../../Icons/WebDes.svg?react'
import WebDev from '../../Icons/WebDev.svg?react'
import Image from '../../Icons/Image.svg?react'

const Card = ({ icon, title, description}) => {
  return (
    <div className="dark:bg-zinc-900 bg-zinc-50 dark:text-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 lg:max-w-sm  md:w-4/5 w-full">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-700 dark-text-white flex items-center justify-center rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-zinc-400 md:text-lg text-sm mt-4">{description}</p>
    </div>
  );
};

const CardGrid = () => {
  const cardData = [
    {
      icon: <WebDes className="w-6 h-6" />,
      title: "Web Designer",
      description: "I believe that a well-designed website is more than just a pretty face. It's a powerful tool that can help you connect with your audience and achieve your business objectives. I'll help to design websites that are both visually stunning and functionally effective.",
    },
    {
      icon: <WebDev className="w-6 h-6" />,
      title: "Web Developer",
      description: "Partner with you to understand your unique business needs and develop tailored web applications. From concept to deployment, I'm dedicated to delivering exceptional results that exceed your expectations.",
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Image Editor",
      description: "Transform your images into stunning works of art with my expert image editing skills. I specialize in [specific techniques, e.g., retouching, color correction, compositing] to deliver pixel-perfect results.",
    }
  ];

  return (
    <div className="md:relative">
      <div className="md:block hidden absolute top-0 left-0 w-full h-1/2 bg-violet-500"></div>
      <div className="md:relative z-10 md:pt-14 pb-8 md:px-0 px-5">
        <div className="text-center dark:text-white md:mb-8 mb-3 ">
          <h1 className='font-semibold text-4xl text-center tracking-wide'>Services</h1>
        </div>
        <div className="flex flex-wrap  justify-center md:gap-8 gap-4 md:p-4  ">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
