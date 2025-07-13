import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "2D RPG Game",
      description: "Built a custom 2D game engine using C++ and OpenGL, featuring sprite rendering, collision detection, and basic physics simulation.",
      technologies: ["C++", "OpenGL", "Game Development"],
      image: "/project-game-engine.jpg",
      github: "https://github.com/AngelaLi03/Games-of-Throne",
      live: "https://youtu.be/4JgAWVdJBeU?si=wZQf9B-B436YYSB3"
    },
    {
      id: 2,
      title: "MARL Research-Based Project",
      description: "Improved baseline algorithm in a reinforcement learning environment where multiple AI agents collaborate and compete in a simulated environment.",
      technologies: ["Python", "Reinforcement Learning"],
      image: "/project-rl-simulator.jpg",
      github: "https://github.com/AngelaLi03/MARL-Research-Hok",
      live: "https://github.com/AngelaLi03/MARL-Research-Hok/blob/main/Mini_Hok%20Project%20Report.pdf"
    },
    {
      id: 3,
      title: "Campus Navigator",
      description: "A full-stack real-time web application that allows users to navigate campus building info and find the shortest path between any buildings on a campus map.",
      technologies: ["Typescript", "JavaScript", "Vue"],
      image: "/project-portfolio.jpg",
      github: "https://github.com/AngelaLi03/Campus-Navigator",
      live: "https://www.youtube.com/watch?v=-y3nFR0cfig"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Some of the projects I've worked on, spans from full-stack development, 
            NLP, MARL, Game Development, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-4xl text-gray-400 font-bold">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
