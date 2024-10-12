import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 animate-slide-in">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-8">
        <div className="bg-[#0f3460] p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Resource Room Assistant</h3>
          <p className="text-[#ff6b6b]">Newcomer Center, Edmonton, Alberta</p>
          <p className="text-sm">September 2024 - Present</p>
          <ul className="list-disc list-inside mt-4">
            <li>Assist clients with document services and resume editing</li>
            <li>Navigate job posting websites and assist with online applications</li>
            <li>Provide support for newcomers with primary forms and information</li>
          </ul>
        </div>
        <div className="bg-[#0f3460] p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Barista</h3>
          <p className="text-[#ff6b6b]">Starbucks, Edmonton, Alberta</p>
          <p className="text-sm">October 2023 - Present</p>
          <ul className="list-disc list-inside mt-4">
            <li>Provide exceptional customer service and craft high-quality beverages</li>
            <li>Operate equipment with precision and maintain a clean workspace</li>
            <li>Collaborate with team members to achieve store goals</li>
          </ul>
        </div>
        <div className="bg-[#0f3460] p-6 rounded-lg">
          <h3 className="text-xl font-semibold">Settlement Studies WIL Experience</h3>
          <p className="text-[#ff6b6b]">Give a Shirt Society, Edmonton, Alberta</p>
          <p className="text-sm">January 2024 - April 2024</p>
          <ul className="list-disc list-inside mt-4">
            <li>Utilized Excel for data analysis and report creation</li>
            <li>Assisted in developing marketing strategies and content curation</li>
            <li>Collaborated on settlement study initiatives and presentations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;