import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    "Communication", "Problem-Solving", "Time Management", "Team Collaboration",
    "Microsoft Office Suite", "Data Analysis", "Customer Service", "Multicultural Awareness"
  ];

  return (
    <section id="skills" className="py-16 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#0f3460] p-4 rounded-lg text-center">
            <p className="font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;