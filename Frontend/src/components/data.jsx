import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { LiaPenNibSolid } from "react-icons/lia";
import { IoCameraOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiAdobelightroom } from "react-icons/si";

import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";
export const letters = [
  { char: "H", img: "images/person-img-1.jpg", rotate: "-rotate-15" },
  { char: "e", img: "images/person-img-2.jpg", rotate: "rotate-15" },
  { char: "l", img: "images/person-img-3.jpg", rotate: "-rotate-15" },
  { char: "l", img: "images/person-img-4.jpg", rotate: "rotate-15" },
  { char: "o", img: "images/person-img-5.jpg", rotate: "-rotate-15" },
];

export const professionTexts = ["a Front End", "a Back End", "a Full Stack"];

export const socialIcons = [
  { icon: <FaGithub />, href: "https://github.com/AnwarMohammadi2001" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/anwar.lashkari.5/" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/anwar-mohammadi/",
  },
  { icon: <FaWhatsapp />, href: "https://wa.me/93772387935" },
];

export const aboutText = `Mohammad Anwar is a passionate and highly skilled front-end web developer with a strong commitment to building modern, responsive, and visually appealing web applications. With a solid foundation in front-end technologies such as HTML, CSS, JavaScript, React, and Tailwind CSS, he specializes in crafting seamless digital experiences that blend performance, aesthetics, and functionality.
Anwar's dedication to creating dynamic and interactive user interfaces is evident in his meticulous approach to every project. Whether developing complex components or designing smooth navigation, he ensures that every detail aligns with the best practices of UI/UX design. His expertise in responsive design allows him to deliver intuitive and user-friendly websites that perform flawlessly across all devices and screen sizes.
Driven by a desire to push the boundaries of web development, Anwar continuously hones his skills and explores emerging technologies to stay ahead of industry trends. His ability to transform creative ideas into robust, scalable solutions makes him a valuable asset to any development team. From building single-page applications to enhancing website performance, Anwar's passion for coding and dedication to excellence shine through in every project.
Beyond his technical abilities, Anwar is a proactive learner and an enthusiastic contributor to the developer community. He enjoys collaborating with fellow developers, sharing insights, and contributing to open-source projects. His commitment to professional growth and innovation motivates him to tackle challenges with creativity and precision, consistently delivering high-quality solutions that meet client expectations.
For Anwar, web development is more than just a profession—it's a passion that drives him to create impactful digital experiences. Whether designing a sleek portfolio, building a feature-rich web application, or optimizing performance, he approaches every challenge with enthusiasm, determination, and a keen eye for detail. Anwar's goal is to build exceptional web solutions that not only meet client needs but also elevate the standard of modern web development..`;
export const skillCards = [
  {
    icon: <LiaPenNibSolid />,
    title: "Design",
    description:
      "Design is all about creating visually appealing and user-friendly interfaces. I specialize in UI/UX design, ensuring every project balances aesthetics with functionality. Using tools like Figma and Adobe XD, I craft intuitive layouts that enhance user experience.",
    tools: [
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "Adobe XD", icon: <SiAdobexd />, color: "#FF61F6" },
      { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
    ],
    hoverPosition: { large: "bottom", small: "bottom" },
  },
  {
    icon: <IoCameraOutline />,
    title: "UI/UX",
    description:
      "Photography is an essential part of digital content creation, capturing high-quality visuals that enhance branding and storytelling. I have experience in portrait, landscape, and product photography.",
    tools: [
      { name: "Camera", icon: <IoCameraOutline />, color: "#4B5563" },
      { name: "Lightroom", icon: <SiAdobelightroom />, color: "#31A8FF" },
      { name: "Photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
    ],
    hoverPosition: { large: "bottom", small: "bottom" },
  },
  {
    icon: <IoDocumentTextOutline />,
    title: "Front-End Dev",
    description:
      "Front-end development is about bringing designs to life through clean and efficient code. I specialize in HTML, CSS, JavaScript, and frameworks like React to build dynamic applications.",
    tools: [
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    ],
    hoverPosition: { large: "bottom", small: "bottom" },
  },
  {
    icon: <MdDevices />,
    title: "RWD",
    description:
      "Responsive design ensures a seamless user experience across all devices. I use fluid grids, media queries, and modern frameworks for adaptability.",
    tools: [
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
      { name: "CSS Grid/Flexbox", icon: <FaCss3Alt />, color: "#1572B6" },
    ],
    hoverPosition: { large: "top", small: "bottom" },
  },
  {
    icon: <GoDatabase />,
    title: "Back-End Dev",
    description:
      "Back-end development powers the functionality behind web applications. I use Node.js and databases like MongoDB and PostgreSQL to build secure and scalable apps.",
    tools: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    ],
    hoverPosition: { large: "top", small: "bottom" },
  },
  {
    icon: <FaGithub />,
    title: "Git Version Control",
    description:
      "Version control is essential for collaboration. I use Git and GitHub for pull requests, merging, and tracking project changes.",
    tools: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    ],
    hoverPosition: { large: "top", small: "bottom" },
  },
];
