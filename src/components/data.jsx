import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { LiaPenNibSolid } from "react-icons/lia";
import { IoCameraOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { GoDatabase } from "react-icons/go";
export const letters = [
  { char: "H", img: "images/person-img-1.jpg", rotate: "-rotate-15" },
  { char: "e", img: "images/person-img-2.jpg", rotate: "rotate-15" },
  { char: "l", img: "images/person-img-3.jpg", rotate: "-rotate-15" },
  { char: "l", img: "images/person-img-4.jpg", rotate: "rotate-15" },
  { char: "o", img: "images/person-img-5.jpg", rotate: "-rotate-15" },
];

export const professionTexts = ["a Front End", "a Back End", "a Full Stack"];

export const socialIcons = [
  { icon: <FaGithub />, href: "#" },
  { icon: <FaFacebook />, href: "#" },
  { icon: <FaLinkedin />, href: "#" },
  { icon: <FaInstagramSquare />, href: "#" },
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
      "Design is all about creating visually appealing and user-friendly interfaces. I specialize in UI/UX design, ensuring every project balances aesthetics with functionality. Using tools like Figma and Adobe XD, I craft intuitive layouts that enhance user experience. From wireframes to high-fidelity prototypes, I focus on clean, minimal, and modern designs tailored for web and mobile applications.",
    projectCount: 3,
    hoverPosition: {
      large: "bottom",
      small: "bottom",
    },
  },
  {
    icon: <IoCameraOutline />,
    title: "Photography",
    description:
      "Photography is an essential part of digital content creation, capturing high-quality visuals that enhance branding and storytelling. I have experience in portrait, landscape, and product photography, ensuring every image is edited and optimized for the web. Understanding lighting, composition, and post-processing allows me to create compelling images that elevate visual communication across various platforms.",
    projectCount: 4,
    hoverPosition: {
      large: "bottom",
      small: "bottom",
    },
  },
  {
    icon: <IoDocumentTextOutline />,
    title: "Front-End Dev",
    description:
      "Front-end development is about bringing designs to life through clean and efficient code. I specialize in HTML, CSS, and JavaScript, along with frameworks like React to build dynamic and interactive web applications. My focus is on performance, accessibility, and responsiveness, ensuring that every website functions flawlessly across all devices and screen sizes.",
    projectCount: 4,
    hoverPosition: {
      large: "bottom",
      small: "bottom",
    },
  },
  {
    icon: <MdDevices />,
    title: "RWD",
    description:
      "In today's digital world, ensuring a seamless user experience across all devices is crucial. I implement responsive design techniques using modern CSS frameworks like Tailwind CSS and Bootstrap. By employing fluid grids, flexible layouts, and media queries, I create web pages that look great and function perfectly on desktops, tablets, and smartphones.",
    projectCount: 3,
    hoverPosition: {
      large: "top",
      small: "bottom",
    },
  },
  {
    icon: <GoDatabase />,
    title: "Back-End Dev",
    description:
      "Back-end development powers the functionality behind web applications. I work with Node.js and databases like MongoDB and PostgreSQL to build secure and scalable server-side applications. Whether handling authentication, managing API requests, or optimizing database queries, I ensure data is processed efficiently and securely to support seamless front-end interactions.",
    projectCount: 3,
    hoverPosition: {
      large: "top",
      small: "bottom",
    },
  },
  {
    icon: <FaGithub />,
    title: "Git Version Control",
    description:
      "Version control is essential for modern web development, and Git is my go-to tool for managing code efficiently. I use GitHub for collaboration, handling pull requests, merging branches, and tracking project changes. Whether working solo or in a team, I ensure code is well-documented, structured, and easily maintainable through proper versioning practices.",
    projectCount: 3,
    hoverPosition: {
      large: "top",
      small: "bottom",
    },
  },
];
