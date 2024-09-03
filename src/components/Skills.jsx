import React from 'react';

const Skills = ({ skillsRef }) => {
  const frontendTechnologies = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React.js"];
  const backendTechnologies = ["Node.js","Express.js", "MongoDB", "MySQL"];
  const programmingLanguages = ["Python", "Java", "C++"];
  const tools = ["Git", "GitHub", "Canva"];
  
  const machineLearningTechnologies = ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "OpenCV"];
  const aiConcepts = ["Neural Networks", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "Deep Learning"];
  

  const skillCategories = [
    { title: "Frontend Technologies", skills: frontendTechnologies },
    { title: "Backend Technologies", skills: backendTechnologies },
    { title: "Programming Languages", skills: programmingLanguages },
    { title: "Tools", skills: tools },
    { title: "Machine Learning Technologies", skills: machineLearningTechnologies },
    { title: "AI Concepts", skills: aiConcepts },
  ];
  
  return (
    <div ref={skillsRef} className="flex flex-col items-center justify-center gap-20 px-10 py-36 ">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl font-bold">My Skills</h1>
        <p className="lg:text-xl text-gray-500">
          Here are some of the technologies I'm proficient in.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-5xl">
        {skillCategories.map((category, index) => (
          <div key={index} className="p-5 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <ul className="list-disc pl-5">
              {category.skills.map((skill, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
