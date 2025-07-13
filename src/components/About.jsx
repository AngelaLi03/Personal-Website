import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I'm Angela Li — a 4th-year Computer Science undergraduate passionate about building innovative solutions across the full technology stack. 
            My experience ranges from full-stack development during my internship to game development and AI/ML research. 
            With a self-driven mindset and strong curiosity, I bring diverse perspectives to every project and am always excited to take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
