const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { id: 1, text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: 2, text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: 3, text: "Designs", imgPath: "/images/designs.svg" },
  { id: 4, text: "Code", imgPath: "/images/code.svg" },
  { id: 5, text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: 6, text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: 7, text: "Designs", imgPath: "/images/designs.svg" },
  { id: 8, text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/logo-1.png",
  },
  {
    imgPath: "/images/logos/logo-2.png",
  },
  {
    imgPath: "/images/logos/logo-3.png",
  },
  {
    imgPath: "/images/logos/logo-4.png",
  },
  {
    imgPath: "/images/logos/logo-5.png",
  },
  {
    imgPath: "/images/logos/logo-6.png",
  },
  {
    imgPath: "/images/logos/logo-7.png",
  },
  {
    imgPath: "/images/logos/logo-8.png",
  },
  {
    imgPath: "/images/logos/logo-9.png",
  },
  {
    imgPath: "/images/logos/logo-10.png",
  },
  {
    imgPath: "/images/logos/logo-11.png",
  },
  {
    imgPath: "/images/logos/logo-12.png",
  },
  {
    imgPath: "/images/logos/logo-13.png",
  },
  {
    imgPath: "/images/logos/logo-14.png",
  },
  {
    imgPath: "/images/logos/logo-15.png",
  },
  {
    imgPath: "/images/logos/logo-16.png",
  },
  {
    imgPath: "/images/logos/logo-17.png",
  },
  {
    imgPath: "/images/logos/logo-18.png",
  },
  {
    imgPath: "/images/logos/logo-19.png",
  },
  {
    imgPath: "/images/logos/logo-20.png",
  },
  {
    imgPath: "/images/logos/logo-21.png",
  },
  {
    imgPath: "/images/logos/logo-22.png",
  },
  {
    imgPath: "/images/logos/logo-23.png",
  },
  {
    imgPath: "/images/logos/logo-24.png",
  },
  {
    imgPath: "/images/logos/logo-25.png",
  },
  {
    imgPath: "/images/logos/logo-26.png",
  },
  {
    imgPath: "/images/logos/logo-27.png",
  },
  {
    imgPath: "/images/logos/logo-28.png",
  },
  {
    imgPath: "/images/logos/logo-29.png",
  },
  {
    imgPath: "/images/logos/logo-30.png",
  },
  {
    imgPath: "/images/logos/logo-31.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];
const expCardsMine = [
  {
    review:
      "At 10 Decoders, Siva contributed to building efficient, user-friendly, and scalable web solutions with a strong focus on frontend quality and performance.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Software Developer",
    date: "10 Decoders | [Add Start Date] - [Add End Date or Present]",
    responsibilities: [
      "Designed and developed interactive web interfaces using React.js, JavaScript, HTML, and CSS.",
      "Integrated frontend applications with backend APIs and improved performance, responsiveness, and maintainability.",
      "Collaborated with developers and stakeholders to translate requirements into practical software solutions.",
    ],
  },
  {
    review:
      "Through freelance projects, Siva delivered tailored web solutions while managing development, communication, and project execution independently.",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "Freelance Developer",
    date: "[Add Start Date] - Present",
    responsibilities: [
      "Developed custom websites and web applications for clients across different domains.",
      "Implemented UI improvements, feature development, debugging, and deployment workflows.",
      "Managed project requirements independently and ensured timely delivery of client-focused solutions.",
    ],
  },
  {
    review:
      "At Kingston University, Siva advanced his expertise in data science through academic training and project-based work in analytics, machine learning, and intelligent systems.",
    imgPath: "/images/logo6.png",
    logoPath: "/images/logo6.png",
    title: "MSc Data Science",
    date: "Kingston University London | [Add Start Date] - [Add End Date or Present]",
    responsibilities: [
      "Built knowledge in machine learning, data analytics, statistical methods, and data visualization.",
      "Completed projects using Python, Pandas, NumPy, scikit-learn, and related tools for solving data-driven problems.",
      "Applied data science concepts to practical case studies, research tasks, and real-world analytical challenges.",
    ],
  },
];
const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expCardsMine,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
