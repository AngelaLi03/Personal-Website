import React from 'react';

const Extracurriculars = () => {
  const activities = [
    {
      id: 1,
      title: "Campus First Responder Team",
      role: "Member & Communications Coordinator",
      period: "2018 - 2021",
      description: [
        "Responded to on-campus medical emergencies, provide immediate care and coordinates with local EMS.",
        "Participated in district-wide responder communication sessions across high school FR teams",
        "Monitored and provided medical coverage at community events such as international youth hockey games",
        "Trained in CPR, injury assessment, and emergency protocols, demonstrating readiness and composure in high-pressure situations."
      ],
      skills: ["First Aid", "Community Service"]
    },
    {
      id: 2,
      title: "Dance Crew",
      role: "Assistant Captain",
      period: "2023 - Present",
      description: [
        "Assisting leader for leading a team of 35 dancers in creating choreography, performing at showcases and competitions",
        "Participated in global dance competition in Japan representing Canada(sadly didn't place)",
        "Organized trip planning and fundraising workshops for competitions",
        "Responsible for running team's social media account for promotion and content sharing"
      ],
      skills: ["Leadership", "Media & Content Creation", "Organization"]
    },
    // {
    //   id: 3,
    //   title: "International Student Association",
    //   role: "Cultural Ambassador",
    //   period: "2022 - Present",
    //   description: [
    //     "Represented international students at university events",
    //     "Organized cultural exchange programs and language cafes",
    //     "Provided support and resources for new international students",
    //     "Promoted diversity and inclusion on campus"
    //   ],
    //   skills: ["Cultural Exchange", "Event Organization", "Multilingual Communication", "Student Support"]
    // },
    // {
    //   id: 4,
    //   title: "Travel Photography",
    //   role: "Hobbyist Photographer",
    //   period: "Ongoing",
    //   description: [
    //     "Documented travels across 15+ countries",
    //     "Developed skills in landscape and street photography",
    //     "Shared cultural experiences through visual storytelling",
    //     "Used photography to connect with local communities"
    //   ],
    //   skills: ["Photography", "Cultural Awareness", "Storytelling", "Adaptability"]
    // }
  ];

  return (
    <section id="extracurriculars" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Extracurricular Activities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond academics, I'm actively involved in various organizations and activities 
            that help me grow and contribute to my community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{activity.title}</h3>
                <p className="text-blue-600 font-semibold mb-1">{activity.role}</p>
                <p className="text-gray-500 text-sm">{activity.period}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {activity.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {activity.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Interests Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Interests</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-blue-600">🌍</span>
              <span className="text-gray-700">Travel</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-blue-600">📚</span>
              <span className="text-gray-700">Reading & Watching Movies</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-blue-600">🎿</span>
              <span className="text-gray-700">Snowboarding</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-blue-600">🍰</span>
              <span className="text-gray-700">Baking</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-blue-600">📸</span>
              <span className="text-gray-700">Photography</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars; 