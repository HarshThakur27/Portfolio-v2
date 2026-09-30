// import React from 'react';
// import TypedText from "./TypedText";

// const Home = () => {
//   return (
//     <div>
//         <div className=" bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 sm:px-12 md:px-20 lg:px-28 py-10 h-auto flex flex-col items-center text-center lg:text-left">
//   <div className="w-full max-w-3xl">
//     <div className="text-4xl font-bold text-white">Hi!</div>

//     <div className="mt-4 text-2xl md:text-3xl font-semibold">
//       I am a <span className="role text-blue-500"><TypedText /></span>
//       <span className="typed-cursor text-gray-700" aria-hidden="true">|</span>
//     </div>

//     <p className="mt-6 text-lg md:text-xl text-gray-100 font-medium leading-relaxed">
//       I’m a <span className="text-red-600 font-semibold">Frontend Developer</span>, and this is my portfolio website.
//       Discover my journey as a <span className="text-blue-600 font-semibold">Software Developer</span> and explore my work.
//     </p>

//     <a href="harsh.pdf" download="Harsh_Resume.pdf">
//       <div className="bg-gradient-to-r from-red-500 to-red-700 w-48 text-lg font-semibold p-3 mt-6 rounded-lg text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
//         Download Resume
//       </div>
//     </a>
//   </div>

//   <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-extrabold text-gray-300 max-w-[95vw] h-32 sm:h-44 pb-8 w-full text-center lg:text-left">
//     Harsh Thakur
//   </h1>
// </div>


//         <div className=" shadow-2xl max-w-[100vw] mt-28 m-2 p-6 rounded-lg" id="projects">
//         <h1 className="text-center text-4xl sm:text-5xl font-bold text-red-500 mb-8">
//   Projects
// </h1>

// {/* Project 1 - EduConnect */}
// <div className="relative  z-0 max-w-[95vw] w-full mb-12">
//   <img
//     src="https://www.edtechreview.in/wp-content/uploads/entrepreneurial-skills-are-no-longer-optional.webp"
//     className="rounded-md w-full h-[55vh] sm:h-[65vh] lg:h-[72vh] object-cover hover:scale-105 transition duration-300"
//   />
//   <div className="absolute z-10 left-6 sm:left-10 bottom-9 sm:bottom-16 lg:bottom-28 max-w-[90%] sm:max-w-[60%] text-left">
//     <div className="flex flex-wrap gap-2">
//       <img src="HTML.png" alt="HTML" className="w-8 h-8" />
//       <img src="CSS.png" alt="CSS" className="w-8 h-8" />
//       <img src="Javascript.svg" alt="JavaScript" className="w-8 h-8" />
//       <img src="Tailwind.png" alt="Tailwind CSS" className="w-8 h-8" />
//       <img src="Redux.svg" alt="Redux" className="w-8 h-8" />
//       <img src="Vercel.svg" alt="Vercel" className="w-8 h-8" />
//     </div>
//     <h2 className="text-white font-bold text-xl lg:text3xl mt-3">EduConnect</h2>
//     <p className="text-gray-200 font-medium text-medium lg:text-lg mt-2">
//       EduConnect is a full-featured edtech website built using the MERN stack (MongoDB, Express.js, React, Node.js). The project showcases both frontend and backend development skills.
//     </p>
//     <a href="https://edu-connect-9.vercel.app/" target="_blank" rel="noopener noreferrer">
//       <button className="bg-gradient-to-r from-red-500 to-red-700 text-white font-medium px-4 py-2 rounded-md mt-4 hover:scale-105 transition">
//         Live
//       </button>
//     </a>
//   </div>
// </div>

// {/* Project 2 - SpiceUp */}
// <div className="relative z-0 max-w-[95vw] w-full">
//   <img
//     src="Screenshot (33).png"
//     className="rounded-md w-full h-[55vh] sm:h-[65vh] lg:h-[72vh] object-cover hover:scale-105 transition duration-300"
//   />
//   <div className="absolute z-10 left-6 sm:left-10 bottom-10 sm:bottom-16 lg:bottom-28 max-w-[90%] sm:max-w-[60%] text-left">
//     <div className="flex flex-wrap gap-2">
//       <img src="HTML.png" alt="HTML" className="w-8 h-8" />
//       <img src="CSS.png" alt="CSS" className="w-8 h-8" />
//       <img src="Javascript.svg" alt="JavaScript" className="w-8 h-8" />
//       <img src="Tailwind.png" alt="Tailwind CSS" className="w-8 h-8" />
//       <img src="Redux.svg" alt="Redux" className="w-8 h-8" />
//       <img src="Vercel.svg" alt="Vercel" className="w-8 h-8" />
//     </div>
//     <h2 className="text-yellow-300 font-bold text-xl lg:text3xl mt-3">SpiceUp</h2>
//     <p className="text-white font-medium text-medium lg:text-lg mt-2">
//       SpiceUp is a React app with Tailwind CSS for discovering and exploring recipes. Search for recipes, view detailed instructions, and enjoy a modern UI.
//     </p>
//     <a href="https://spice-up-two.vercel.app/" target="_blank" rel="noopener noreferrer">
//       <button className="bg-gradient-to-r from-red-500 to-red-700 text-white font-medium px-4 py-2 rounded-md mt-4 hover:scale-105 transition">
//         Live
//       </button>
//     </a>
//   </div>
// </div>


// <div class="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6">
//     <div class="max-w-7xl w-full px-6 md:px-12 lg:px-24">
//         <h2 class="text-6xl md:text-7xl font-bold text-red-500 leading-tight text-center md:text-left">
//             {/* <span class="text-[120px] md:text-[150px] font-extrabold">Me</span> and */}
//             <br/>
//             <span class="text-gray-200">About me</span>
//         </h2>

//         <div class="mt-10 text-lg space-y-6 text-center md:text-left">
//             <p class="leading-relaxed">
//                 👋 Hello! I'm <span class="font-bold text-red-400">Harsh Thakur</span>, a passionate Frontend Developer with expertise in 
//                 <strong class="text-yellow-400">React.js, JavaScript, Context API, Redux, Tailwind CSS, HTML5, REST APIs, JSON, and Postman</strong>. 
//                 I specialize in crafting dynamic, responsive, and interactive web applications that bring ideas to life.
//             </p>

//             <p class="leading-relaxed">
//                 🚀 Beyond frontend development, I have a basic foundation in backend technologies like 
//                 <strong class="text-blue-400">Express.js</strong> and <strong class="text-green-400">MongoDB</strong>, allowing me to contribute effectively to full-stack applications. 
//                 I'm proficient in deployment platforms like <strong class="text-purple-400">Vercel</strong> and <strong class="text-gray-400">Render</strong>, and I use 
//                 <strong class="text-orange-400"> Git</strong> and <strong class="text-gray-300">GitHub</strong> for seamless project management and collaboration.
//             </p>

//             <p class="leading-relaxed">
//                 💡 Passionate about innovation and continuous learning, I thrive on tackling challenging projects that 
//                 push creative boundaries and deliver impactful digital solutions. Let’s connect and create something amazing together!
//             </p>
//         </div>
//     </div>
// </div>


// <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
//   {/* Title Section */}
//   <div className="text-center mb-12">
//     <h2 className="text-5xl font-bold text-white">
//       <span className="text-[100px] text-red-500">Me</span> and <br /> My Tech Stack
//     </h2>
//     <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
//       A passionate Frontend Developer with expertise in modern web technologies, crafting interactive and dynamic web experiences.
//     </p>
//   </div>

//   {/* Tech Stack Grid */}
//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
//     {[
//       { name: "HTML", src: "HTML.png" },
//       { name: "CSS", src: "CSS.png" },
//       { name: "JavaScript", src: "Javascript.svg" },
//       { name: "React.js", src: "React.png" },
//       { name: "Node.js", src: "NodeJs.svg" },
//       { name: "Redux", src: "Redux.svg" },
//       { name: "Tailwind CSS", src: "Tailwind.png" },
//       { name: "Git", src: "Git.svg" },
//       { name: "GitHub", src: "Github.svg" },
//       { name: "MongoDB", src: "MongoDB.svg" },
//       { name: "Vercel", src: "Vercel.svg" },
//     ].map((tech, index) => (
//       <div key={index} className="flex flex-col items-center bg-gray-800 bg-opacity-80 p-4 rounded-2xl shadow-xl transform transition-transform hover:scale-105 hover:bg-opacity-100">
//         <img src={tech.src} alt={tech.name} className="w-20 md:w-24 h-auto" />
//         <p className="mt-3 text-white font-semibold text-lg">{tech.name}</p>
//       </div>
//     ))}
//   </div>
// </div>

//         </div>

        
            
//         <div className="w-screen h-screen flex flex-col mt-20 justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 p-10">
//   <h1 className="font-extrabold text-white text-6xl mb-10  bg-gradient-to-r from-blue-400 to-purple-500  bg-clip-text">
//     Education
//   </h1>
//   <div className="bg-white/10 backdrop-blur-lg border border-white/20 w-5/6 p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center">
//     <img 
//       src="https://www.theindianwire.com/wp-content/uploads/2021/07/ignou.jpg" 
//       className="w-full md:w-1/2 rounded-2xl shadow-lg"
//       alt="IGNOU logo"
//     />
//     <div className="mt-4 md:mt-0 md:ml-12 text-white">
//       <h2 className="text-3xl font-bold">Bachelor of Computer Applications</h2>
//       <p className="text-gray-300 mt-2 text-xl">Aug 2021 – Sep 2024</p>
//       <p className="mt-5 text-gray-300 text-lg leading-relaxed">
//         Completed 6 semesters with a focus on  
//         <span className="text-blue-400 font-semibold"> Computer Networks</span>,  
//         <span className="text-purple-400 font-semibold"> Database Management</span>, and  
//         <span className="text-pink-400 font-semibold"> Software Engineering</span>.
//       </p>
//     </div>
//   </div>
// </div>
     

//      <div className="w-screen min-h-screen mt-20 flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 p-10">
//   <h1 className="text-5xl font-extrabold text-white mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//     Certifications
//   </h1>

//   <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//     {/* J.P. Morgan Certification */}
//     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
//       <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="Certification Icon" className="w-16 mb-4"/>
//       <h3 className="text-2xl font-bold text-center">J.P. Morgan Software Engineering Virtual Experience</h3>
//       <p className="text-gray-300 text-lg mt-2">Forage - September 2024</p>
//       <ul className="text-gray-400 mt-4 text-sm list-disc list-inside">
//         <li>Set up a local dev environment.</li>
//         <li>Fixed broken files in the repository.</li>
//         <li>Used Perspective to generate a live graph.</li>
//       </ul>
//       <a href="https://drive.google.com/file/d/1YdBBg3AIcCBmvgrBPV-CtfHvZh5v2-Iy/view" 
//         className="mt-4 text-blue-400 hover:underline font-medium">
//         View Certification
//       </a>
//     </div>

//     {/* Skyscanner Certification */}
//     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
//       <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="Certification Icon" className="w-16 mb-4"/>
//       <h3 className="text-2xl font-bold text-center">Skyscanner Front-End Software Engineering Virtual Experience</h3>
//       <p className="text-gray-300 text-lg mt-2">Forage - September 2024</p>
//       <ul className="text-gray-400 mt-4 text-sm list-disc list-inside">
//         <li>Completed job simulation as a front-end engineer.</li>
//         <li>Developed a web app using React & Backpack.</li>
//         <li>Created a travel date picker UI.</li>
//       </ul>
//       <a href="https://drive.google.com/file/d/1vIZX5-Ys6F4-LUtmFI-197q9IneFXNQK/view" 
//         className="mt-4 text-blue-400 hover:underline font-medium">
//         View Certification
//       </a>
//     </div>

//     {/* MERN Stack Development */}
//     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
//       <img src="https://img.icons8.com/color/96/000000/certificate.png" alt="Certification Icon" className="w-16 mb-4"/>
//       <h3 className="text-2xl font-bold text-center">MERN Stack Development</h3>
//       <p className="text-gray-300 text-lg mt-2">CodeHelp</p>
//       <ul className="text-gray-400 mt-4 text-sm list-disc list-inside">
//         <li>Trained in MongoDB, Express.js, React, and Node.js.</li>
//         <li>Built & deployed full-stack applications.</li>
//       </ul>
//       <a href="https://drive.google.com/file/d/1FhUeJbc8Bbn4ci0Oea9MyVjSi16Ejfsz/view" 
//         className="mt-4 text-blue-400 hover:underline font-medium">
//         View Certification
//       </a>
//     </div>
//   </div>
// </div>
      

//       <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-800 p-10" id="contactme">
//   <h1 className="text-6xl font-extrabold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//     Contact Me
//   </h1>
//   <p className="text-gray-300 text-xl text-center mb-10">
//     If you'd like to get in touch,<br /> feel free to reach out through any of the platforms below!
//   </p>

//   <div className="w-full max-w-4xl grid md:grid-cols-3 gap-6">
//     {/* LinkedIn */}
//     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
//       <a href="https://www.linkedin.com/in/harsh-thakur-543572249" target="_blank" className="flex flex-col items-center">
//         <img src="https://img.icons8.com/color/96/000000/linkedin.png" alt="LinkedIn Icon" className="w-16 mb-4 hover:scale-110 transition-all"/>
//         <span className="text-lg font-medium">LinkedIn</span>
//       </a>
//     </div>

//     {/* GitHub */}
//     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
//       <a href="https://github.com/HarshThakur27" target="_blank" className="flex flex-col items-center">
//         <img src="https://img.icons8.com/color/96/000000/github.png" alt="GitHub Icon" className="w-16 mb-4 hover:scale-110 transition-all"/>
//         <span className="text-lg font-medium">GitHub</span>
//       </a>
//     </div>

//     {/* Email */}
//     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition-all duration-300">
//       <a href="mailto:harsh273003@gmail.com" className="flex flex-col items-center">
//         <img src="https://img.icons8.com/color/96/000000/email.png" alt="Email Icon" className="w-16 mb-4 hover:scale-110 transition-all"/>
//         <span className="text-lg font-medium">Email</span>
//       </a>
//     </div>
//   </div>
// </div>

//        <footer className="w-full bg-gray-900 text-white py-6">
//   <div className="container mx-auto flex flex-col items-center">
//     <h2 className="text-2xl font-semibold tracking-wide text-gray-300 hover:text-white transition-all">
//       Harsh Thakur
//     </h2>
//   </div>

//   <div className="w-full mt-4 text-center border-t border-gray-700 pt-4">
//     <p className="text-gray-400">&copy; 2025 Harsh Thakur. All rights reserved.</p>
//   </div>
// </footer>



        
//     </div>
    
//   )
// }

// export default Home;


















import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Card mouse glow
    const cards = document.querySelectorAll(".card");

    const handlePointerMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();

      card.style.setProperty("--x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    cards.forEach((card) => {
      card.addEventListener("pointermove", handlePointerMove);
    });

    // Reveal animation
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("in");
      });
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        observer.disconnect();

        cards.forEach((card) => {
          card.removeEventListener("pointermove", handlePointerMove);
        });
      };
    }

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("pointermove", handlePointerMove);
      });
    };
  }, []);

  const VERONICA_LIVE = "https://veronica-ai-three.vercel.app/";

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="in">
          <a className="logo" href="#top">
            Harsh Thakur<span className="grad">.</span>
          </a>

          <ul>
            <li className="hide">
              <a href="#work">Work</a>
            </li>

            <li className="hide">
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#skills">Stack</a>
            </li>

            <li>
              <a className="hire" href="#contact">
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero" id="top">
        <div className="wrap grid">
          <div>
            <div className="pill">
              <span className="dot"></span>
              Open to GenAI &amp; agentic AI roles
            </div>

            <div className="eyebrow">Harsh Thakur</div>

            <h1>
              I build <span className="grad">AI agents</span> people actually
              use.
            </h1>

            <p className="lead">
              Full-stack engineer turning LLMs into real products: RAG
              pipelines, tool-using agents and polished React / Next.js
              interfaces, shipped end to end.
            </p>

            <div className="btns">
              <a
                className="btn p"
                href={VERONICA_LIVE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Veronica live ↗
              </a>

              <a className="btn" href="#contact">
                Let's talk
              </a>
            </div>

            <div className="stats">
              <div>
                <b>1.5+</b>
                <span>years building</span>
              </div>

              <div>
                <b>2</b>
                <span>professional roles</span>
              </div>

              <div>
                <b>RAG · Agents</b>
                <span>my focus</span>
              </div>
            </div>
          </div>

          {/* Veronica Chat */}
          <div className="chat" aria-hidden="true">
            <div className="chat-h">
              <div className="av">V</div>

              <div>
                Veronica
                <small>agentic assistant</small>
              </div>
            </div>

            <div className="msg u m1">
              Find the latest on RAG evals and email me a summary.
            </div>

            <div className="trace m2">
              <span>✓ guardrail</span>
              <span>✓ web search</span>
              <span>✓ RAG retrieve</span>
              <span>✓ email sent</span>
            </div>

            <div className="msg v m3">
              Done. I searched, cross-checked your notes, and sent the summary
              to your inbox.
            </div>
          </div>
        </div>

        {/* Tech Marquee */}
        <div className="marq" aria-hidden="true">
          <div className="track">
            <span>LangChain</span>
            <span>LangGraph</span>
            <span>RAG</span>
            <span>ChromaDB</span>
            <span>FastAPI</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Groq</span>
            <span>MCP</span>
            <span>MongoDB</span>
            <span>LangSmith</span>
            <span>React</span>

            <span>LangChain</span>
            <span>LangGraph</span>
            <span>RAG</span>
            <span>ChromaDB</span>
            <span>FastAPI</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Groq</span>
            <span>MCP</span>
            <span>MongoDB</span>
            <span>LangSmith</span>
            <span>React</span>
          </div>
        </div>
      </header>

      {/* Projects */}
      <section id="work">
        <div className="wrap">
          <div className="eyebrow reveal">Selected work</div>

          <h2 className="reveal">Projects</h2>

          <p className="sub reveal">
            One flagship AI build, and the frontend projects that got me here.
          </p>

          {/* Veronica */}
          <div className="card feat reveal">
            <div>
              <span className="badge">FLAGSHIP · LIVE</span>

              <h3>Veronica</h3>

              <p>
                A full-stack AI assistant that combines RAG over documents,
                live web search and email sending. A deterministic guardrail
                runs before the agent, so blocked requests never cost an LLM
                call.
              </p>

              <ul className="tags">
                <li>FastAPI</li>
                <li>LangChain</li>
                <li>Groq</li>
                <li>ChromaDB</li>
                <li>HF Embeddings</li>
                <li>Tavily</li>
                <li>MongoDB Atlas</li>
                <li>Next.js</li>
                <li>TypeScript</li>
              </ul>

              <div className="btns">
                <a
                  className="btn p"
                  href={VERONICA_LIVE}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live demo ↗
                </a>
              </div>
            </div>

            {/* Veronica Architecture */}
            <div className="pipe" aria-label="Veronica architecture">
              <div className="node">
                <i>01</i>

                <div>
                  Next.js chat UI
                  <small>Vercel</small>
                </div>
              </div>

              <div className="ln"></div>

              <div className="node hl">
                <i>02</i>

                <div>
                  Guardrail → agent
                  <small>FastAPI · Railway</small>
                </div>
              </div>

              <div className="ln"></div>

              <div className="node">
                <i>03</i>

                <div>
                  RAG · Web search · Email
                  <small>ChromaDB · Tavily</small>
                </div>
              </div>

              <div className="ln"></div>

              <div className="node">
                <i>04</i>

                <div>
                  Chat memory
                  <small>MongoDB Atlas</small>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="g2">
            <div className="card reveal">
              <h3>EduConnect</h3>

              <p>
                Full-featured edtech platform built on the MERN stack with
                Redux state management.
              </p>

              <ul className="tags">
                <li>React</li>
                <li>Node</li>
                <li>MongoDB</li>
                <li>Redux</li>
              </ul>

              <a
                className="link grad"
                href="https://edu-connect-9.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site →
              </a>
            </div>

            <div className="card reveal">
              <h3>SpiceUp</h3>

              <p>
                Recipe discovery app with search, detailed instructions and a
                clean Tailwind UI.
              </p>

              <ul className="tags">
                <li>React</li>
                <li>Tailwind</li>
                <li>REST API</li>
              </ul>

              <a
                className="link grad"
                href="https://spice-up-two.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="wrap">
          <div className="eyebrow reveal">Experience</div>

          <h2 className="reveal">Where I've worked</h2>

          <p className="sub reveal">
            Production frontend experience, now pointed at AI.
          </p>

          <div className="tl">
            <div className="job card reveal">
              <div className="d">DEC 2025 — JUN 2026</div>

              <h3>UI Developer (Consultant)</h3>

              <div className="o">Ratna Sagar P Ltd</div>

              <ul>
                <li>
                  Built and maintained interfaces as part of the UI team.
                </li>

                <li>
                  Used a vectorless, PageIndex-style RAG approach to extract
                  structured JSON from textbook content.
                </li>
              </ul>
            </div>

            <div className="job card reveal">
              <div className="d">JAN 2025 — MAY 2025</div>

              <h3>React Developer Intern</h3>

              <div className="o">TheGoodGameTheory</div>

              <ul>
                <li>Shipped React features in a production codebase.</li>
              </ul>
            </div>

            <div className="job card reveal">
              <div className="d">JUN 2026 — JUN 2028</div>

              <h3>MCA, IGNOU</h3>

              <div className="o">
                Currently pursuing · after a BCA from IGNOU (2021 – 2024)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="wrap">
          <div className="eyebrow reveal">Stack</div>

          <h2 className="reveal">Tools I work with</h2>

          <p className="sub reveal">From the model call to the pixel.</p>

          <div className="skills">
            <div className="card reveal">
              <h3 className="grad">AI / GenAI</h3>

              <ul className="tags">
                <li>LangChain</li>
                <li>LangGraph</li>
                <li>RAG</li>
                <li>ChromaDB</li>
                <li>LangSmith</li>
                <li>MCP</li>
                <li>Groq</li>
                <li>OpenAI</li>
                <li>Anthropic</li>
                <li>Google</li>
              </ul>
            </div>

            <div className="card reveal">
              <h3 className="grad">Backend</h3>

              <ul className="tags">
                <li>Python</li>
                <li>FastAPI</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Prisma</li>
              </ul>
            </div>

            <div className="card reveal">
              <h3 className="grad">Frontend</h3>

              <ul className="tags">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Redux Toolkit</li>
                <li>Tailwind</li>
              </ul>
            </div>

            <div className="card reveal">
              <h3 className="grad">Deploy</h3>

              <ul className="tags">
                <li>Vercel</li>
                <li>Railway</li>
                <li>Render</li>
                <li>Git / GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="wrap">
          <div className="cta reveal">
            <div className="eyebrow">Contact</div>

            <h2>
              Building with LLMs? <span className="grad">Let's talk.</span>
            </h2>

            <p className="sub">
              I'm looking for GenAI and agentic AI engineering roles where I
              can own features from model call to UI.
            </p>

            <div className="btns">
              <a className="btn p" href="mailto:virsh333@gmail.com">
                Email me
              </a>

              <a
                className="btn"
                href="https://www.linkedin.com/in/harsh-thakur-543572249"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="btn"
                href="https://github.com/HarshThakur27"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>© 2026 Harsh Thakur</footer>
    </>
  );
}

export default Home;
