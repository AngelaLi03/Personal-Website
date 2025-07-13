import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Optum",
      period: "Jan-Aug 2023",
      description: [
        "Built UI features and backend services with Node.js and Express; supported CI/CD pipelines and deployments via Jenkins and GCP",
        "Conducted full-cycle QA testing (release + regression), ensuring 98% pass rate and timely deployment",
        "Developed automation scripts and coordinated with overseas teams to improve workflow efficiency",
        "Integrated Pendo analytics for customer tracking and created test suites for analytics feature validation",
      ],
      technologies: ["Javascript", "React", "Node.js", "SQL", "Jenkins", "GCP"]
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey includes internships, research positions, and teaching roles 
            that have shaped my technical skills and professional growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="mb-12">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Timeline */}
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-12 bg-gray-300 mx-auto mt-2"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{experience.company}</p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 sm:mt-0">{experience.period}</span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 