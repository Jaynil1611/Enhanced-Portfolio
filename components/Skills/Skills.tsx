import React from "react";

const Skills = ({ skillsObject }: any) => {
  return (
    <>
      <h1 className="text-2xl uppercase font-bold py-8">Skills</h1>
      <ul>
        {Object.keys(skillsObject).map((skillType) => (
          <SkillType
            key={skillType}
            skillsObject={skillsObject}
            skillType={skillType}
          />
        ))}
      </ul>
    </>
  );
};

const IndividualSkill = ({ skillsArray }) => {
  return (
    <>
      {skillsArray.map((skill) => {
        return (
          <li className="mx-6" key={skill}>
            {skill}
          </li>
        );
      })}
    </>
  );
};

const SkillType = ({ skillsObject, skillType }) => {
  return (
    <div key={skillType} className="ml-4 py-4">
      <h2 className="text-lg">{skillType}</h2>
      <ul className="list-disc flex">
        <IndividualSkill skillsArray={skillsObject[skillType]} />
      </ul>
    </div>
  );
};

export default Skills;
