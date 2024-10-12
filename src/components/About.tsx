import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 animate-fade-in">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src="./Images/Me.jpg"
          alt="Tejal Singh"
          className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-8 animate-hover"
        />
        <div>
          <p className="mb-4">
            Hello! I'm Tejal Singh, an enthusiastic and dedicated college
            student pursuing Settlement Studies at Norquest College in Edmonton,
            Alberta. With a strong foundation in English literature and a
            passion for community service, I'm on a journey to make a positive
            impact in the field of settlement and integration.
          </p>
          <p className="mb-4">
            My diverse experiences, from working as a Resource Room Assistant at
            a Newcomer Center to my role as a Barista at Starbucks, have honed
            my communication skills and ability to work effectively in
            fast-paced environments. I'm excited to leverage my skills and
            knowledge to contribute to meaningful projects and continue growing
            professionally.
          </p>
          <a
            href="TEJAL_SINGH.pdf"
            download
            className="bg-[#ff6b6b] text-white px-4 py-2 rounded hover:bg-[#ff8c8c] transition-colors duration-300 inline-block animate-pulse"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
