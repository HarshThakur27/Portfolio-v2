import React from 'react';
import TypedText from "./TypedText";

const Home = () => {
  return (
    <div>
        <div className="mt-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 sm:px-12 md:px-20 lg:px-28 py-10 h-auto flex flex-col items-center text-center lg:text-left">
  <div className="w-full max-w-3xl">
    <div className="text-4xl font-bold text-white">Hi!</div>

    <div className="mt-4 text-2xl md:text-3xl font-semibold">
      I am a <span className="role text-blue-500"><TypedText /></span>
      <span className="typed-cursor text-gray-700" aria-hidden="true">|</span>
    </div>

    <p className="mt-6 text-lg md:text-xl text-gray-100 font-medium leading-relaxed">
      I’m a <span className="text-red-600 font-semibold">Frontend Developer</span>, and this is my portfolio website.
      Discover my journey as a <span className="text-blue-600 font-semibold">Software Developer</span> and explore my work.
    </p>

    <a href="hr2.pdf" download="Harsh_Resume.pdf">
      <div className="bg-gradient-to-r from-red-500 to-red-700 w-48 text-lg font-semibold p-3 mt-6 rounded-lg text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        Download Resume
      </div>
    </a>
  </div>

  <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold text-gray-300 max-w-[95vw] h-32 sm:h-44 pb-8 w-full text-center lg:text-left">
    Harsh Thakur
  </h1>
</div>


        <div className=" shadow-2xl max-w-[100vw] mt-28 m-2 p-6 rounded-lg" id="projects">
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-red-500 mb-8">
  Projects
</h1>

{/* Project 1 - EduConnect */}
<div className="relative  z-0 max-w-[95vw] w-full mb-12">
  <img
    src="https://www.edtechreview.in/wp-content/uploads/entrepreneurial-skills-are-no-longer-optional.webp"
    className="rounded-md w-full h-[55vh] sm:h-[65vh] lg:h-[72vh] object-cover hover:scale-105 transition duration-300"
  />
  <div className="absolute z-10 left-6 sm:left-10 bottom-9 sm:bottom-16 lg:bottom-28 max-w-[90%] sm:max-w-[60%] text-left">
    <div className="flex flex-wrap gap-2">
      <img src="HTML.png" alt="HTML" className="w-8 h-8" />
      <img src="CSS.png" alt="CSS" className="w-8 h-8" />
      <img src="Javascript.svg" alt="JavaScript" className="w-8 h-8" />
      <img src="Tailwind.png" alt="Tailwind CSS" className="w-8 h-8" />
      <img src="Redux.svg" alt="Redux" className="w-8 h-8" />
      <img src="Vercel.svg" alt="Vercel" className="w-8 h-8" />
    </div>
    <h2 className="text-white font-bold text-xl lg:text3xl mt-3">EduConnect</h2>
    <p className="text-gray-200 font-medium text-medium lg:text-lg mt-2">
      EduConnect is a full-featured edtech website built using the MERN stack (MongoDB, Express.js, React, Node.js). The project showcases both frontend and backend development skills.
    </p>
    <a href="https://edu-connect-9.vercel.app/" target="_blank" rel="noopener noreferrer">
      <button className="bg-gradient-to-r from-red-500 to-red-700 text-white font-medium px-4 py-2 rounded-md mt-4 hover:scale-105 transition">
        Live
      </button>
    </a>
  </div>
</div>

{/* Project 2 - SpiceUp */}
<div className="relative z-0 max-w-[95vw] w-full">
  <img
    src="Screenshot (33).png"
    className="rounded-md w-full h-[55vh] sm:h-[65vh] lg:h-[72vh] object-cover hover:scale-105 transition duration-300"
  />
  <div className="absolute z-10 left-6 sm:left-10 bottom-10 sm:bottom-16 lg:bottom-28 max-w-[90%] sm:max-w-[60%] text-left">
    <div className="flex flex-wrap gap-2">
      <img src="HTML.png" alt="HTML" className="w-8 h-8" />
      <img src="CSS.png" alt="CSS" className="w-8 h-8" />
      <img src="Javascript.svg" alt="JavaScript" className="w-8 h-8" />
      <img src="Tailwind.png" alt="Tailwind CSS" className="w-8 h-8" />
      <img src="Redux.svg" alt="Redux" className="w-8 h-8" />
      <img src="Vercel.svg" alt="Vercel" className="w-8 h-8" />
    </div>
    <h2 className="text-yellow-300 font-bold text-xl lg:text3xl mt-3">SpiceUp</h2>
    <p className="text-white font-medium text-medium lg:text-lg mt-2">
      SpiceUp is a React app with Tailwind CSS for discovering and exploring recipes. Search for recipes, view detailed instructions, and enjoy a modern UI.
    </p>
    <a href="https://spice-up-two.vercel.app/" target="_blank" rel="noopener noreferrer">
      <button className="bg-gradient-to-r from-red-500 to-red-700 text-white font-medium px-4 py-2 rounded-md mt-4 hover:scale-105 transition">
        Live
      </button>
    </a>
  </div>
</div>


<div class="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
    <div class="max-w-7xl w-full px-6 md:px-12 lg:px-24">
        <h2 class="text-6xl md:text-7xl font-bold text-red-500 leading-tight text-center md:text-left">
            {/* <span class="text-[120px] md:text-[150px] font-extrabold">Me</span> and */}
            <br/>
            <span class="text-gray-200">About me</span>
        </h2>

        <div class="mt-10 text-lg space-y-6 text-center md:text-left">
            <p class="leading-relaxed">
                👋 Hello! I'm <span class="font-bold text-red-400">Harsh Thakur</span>, a passionate Frontend Developer with expertise in 
                <strong class="text-yellow-400">React.js, JavaScript, Context API, Redux, Tailwind CSS, HTML5, REST APIs, JSON, and Postman</strong>. 
                I specialize in crafting dynamic, responsive, and interactive web applications that bring ideas to life.
            </p>

            <p class="leading-relaxed">
                🚀 Beyond frontend development, I have a basic foundation in backend technologies like 
                <strong class="text-blue-400">Express.js</strong> and <strong class="text-green-400">MongoDB</strong>, allowing me to contribute effectively to full-stack applications. 
                I'm proficient in deployment platforms like <strong class="text-purple-400">Vercel</strong> and <strong class="text-gray-400">Render</strong>, and I use 
                <strong class="text-orange-400"> Git</strong> and <strong class="text-gray-300">GitHub</strong> for seamless project management and collaboration.
            </p>

            <p class="leading-relaxed">
                💡 Passionate about innovation and continuous learning, I thrive on tackling challenging projects that 
                push creative boundaries and deliver impactful digital solutions. Let’s connect and create something amazing together!
            </p>
        </div>
    </div>
</div>


<div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
  {/* Title Section */}
  <div className="text-center mb-12">
    <h2 className="text-5xl font-bold text-white">
      <span className="text-[100px] text-red-500">Me</span> and <br /> My Tech Stack
    </h2>
    <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
      A passionate Frontend Developer with expertise in modern web technologies, crafting interactive and dynamic web experiences.
    </p>
  </div>

  {/* Tech Stack Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
    {[
      { name: "HTML", src: "HTML.png" },
      { name: "CSS", src: "CSS.png" },
      { name: "JavaScript", src: "Javascript.svg" },
      { name: "React.js", src: "React.png" },
      { name: "Node.js", src: "NodeJs.svg" },
      { name: "Redux", src: "Redux.svg" },
      { name: "Tailwind CSS", src: "Tailwind.png" },
      { name: "Git", src: "Git.svg" },
      { name: "GitHub", src: "Github.svg" },
      { name: "MongoDB", src: "MongoDB.svg" },
      { name: "Vercel", src: "Vercel.svg" },
    ].map((tech, index) => (
      <div key={index} className="flex flex-col items-center bg-gray-800 bg-opacity-80 p-4 rounded-2xl shadow-xl transform transition-transform hover:scale-105 hover:bg-opacity-100">
        <img src={tech.src} alt={tech.name} className="w-20 md:w-24 h-auto" />
        <p className="mt-3 text-white font-semibold text-lg">{tech.name}</p>
      </div>
    ))}
  </div>
</div>

        </div>

        
            
        <div className="w-screen h-screen flex flex-col mt-20 justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 p-10">
  <h1 className="font-extrabold text-white text-6xl mb-10  bg-gradient-to-r from-blue-400 to-purple-500  bg-clip-text">
    Education
  </h1>
  <div className="bg-white/10 backdrop-blur-lg border border-white/20 w-5/6 p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center">
    <img 
      src="https://www.theindianwire.com/wp-content/uploads/2021/07/ignou.jpg" 
      className="w-full md:w-1/2 rounded-2xl shadow-lg"
      alt="IGNOU logo"
    />
    <div className="mt-4 md:mt-0 md:ml-12 text-white">
      <h2 className="text-3xl font-bold">Bachelor of Computer Applications</h2>
      <p className="text-gray-300 mt-2 text-xl">Aug 2021 – Sep 2024</p>
      <p className="mt-5 text-gray-300 text-lg leading-relaxed">
        Completed 6 semesters with a focus on  
        <span className="text-blue-400 font-semibold"> Computer Networks</span>,  
        <span className="text-purple-400 font-semibold"> Database Management</span>, and  
        <span className="text-pink-400 font-semibold"> Software Engineering</span>.
      </p>
    </div>
  </div>
</div>
     

     <div className="w-screen min-h-screen mt-20 flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 p-10">
  <h1 className="text-5xl font-extrabold text-white mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
    Certifications
  </h1>

  <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* J.P. Morgan Certification */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
      <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="Certification Icon" className="w-16 mb-4"/>
      <h3 className="text-2xl font-bold text-center">J.P. Morgan Software Engineering Virtual Experience</h3>
      <p className="text-gray-300 text-lg mt-2">Forage - September 2024</p>
      <ul className="text-gray-400 mt-4 text-sm list-disc list-inside">
        <li>Set up a local dev environment.</li>
        <li>Fixed broken files in the repository.</li>
        <li>Used Perspective to generate a live graph.</li>
      </ul>
      <a href="https://drive.google.com/file/d/1YdBBg3AIcCBmvgrBPV-CtfHvZh5v2-Iy/view" 
        className="mt-4 text-blue-400 hover:underline font-medium">
        View Certification
      </a>
    </div>

    {/* Skyscanner Certification */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
      <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="Certification Icon" className="w-16 mb-4"/>
      <h3 className="text-2xl font-bold text-center">Skyscanner Front-End Software Engineering Virtual Experience</h3>
      <p className="text-gray-300 text-lg mt-2">Forage - September 2024</p>
      <ul className="text-gray-400 mt-4 text-sm list-disc list-inside">
        <li>Completed job simulation as a front-end engineer.</li>
        <li>Developed a web app using React & Backpack.</li>
        <li>Created a travel date picker UI.</li>
      </ul>
      <a href="https://drive.google.com/file/d/1vIZX5-Ys6F4-LUtmFI-197q9IneFXNQK/view" 
        className="mt-4 text-blue-400 hover:underline font-medium">
        View Certification
      </a>
    </div>

    {/* MERN Stack Development */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
      <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="Certification Icon" className="w-16 mb-4"/>
      <h3 className="text-2xl font-bold text-center">MERN Stack Development</h3>
      <p className="text-gray-300 text-lg mt-2">CodeHelp</p>
      <ul className="text-gray-400 mt-4 text-sm list-disc list-inside">
        <li>Trained in MongoDB, Express.js, React, and Node.js.</li>
        <li>Built & deployed full-stack applications.</li>
      </ul>
      <a href="https://drive.google.com/file/d/1FhUeJbc8Bbn4ci0Oea9MyVjSi16Ejfsz/view" 
        className="mt-4 text-blue-400 hover:underline font-medium">
        View Certification
      </a>
    </div>
  </div>
</div>
      

      <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 p-10" id="contactme">
  <h1 className="text-6xl font-extrabold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
    Contact Me
  </h1>
  <p className="text-gray-300 text-xl text-center mb-10">
    If you'd like to get in touch,<br /> feel free to reach out through any of the platforms below!
  </p>

  <div className="w-full max-w-4xl grid md:grid-cols-3 gap-6">
    {/* LinkedIn */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
      <a href="https://www.linkedin.com/in/harsh-thakur-543572249" target="_blank" className="flex flex-col items-center">
        <img src="https://img.icons8.com/color/96/000000/linkedin.png" alt="LinkedIn Icon" className="w-16 mb-4 hover:scale-110 transition-all"/>
        <span className="text-lg font-medium">LinkedIn</span>
      </a>
    </div>

    {/* GitHub */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
      <a href="https://github.com/HarshThakur27" target="_blank" className="flex flex-col items-center">
        <img src="https://img.icons8.com/color/96/000000/github.png" alt="GitHub Icon" className="w-16 mb-4 hover:scale-110 transition-all"/>
        <span className="text-lg font-medium">GitHub</span>
      </a>
    </div>

    {/* Email */}
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
      <a href="mailto:harsh273003@gmail.com" className="flex flex-col items-center">
        <img src="https://img.icons8.com/color/96/000000/email.png" alt="Email Icon" className="w-16 mb-4 hover:scale-110 transition-all"/>
        <span className="text-lg font-medium">Email</span>
      </a>
    </div>
  </div>
</div>

       <footer className="w-full bg-gray-900 text-white py-6">
  <div className="container mx-auto flex flex-col items-center">
    <h2 className="text-2xl font-semibold tracking-wide text-gray-300 hover:text-white transition-all">
      Harsh Thakur
    </h2>
  </div>

  <div className="w-full mt-4 text-center border-t border-gray-700 pt-4">
    <p className="text-gray-400">&copy; 2025 Harsh Thakur. All rights reserved.</p>
  </div>
</footer>



        
    </div>
    
  )
}

export default Home;