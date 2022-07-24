import React from "react";

interface SkillsProps {
  skillsData: Record<string, Array<string>>;
}

interface SkillTypeProps extends SkillsProps {
  type: string;
}

interface IndividualSkillProps {
  skillsArray: Array<string>;
}

const Skills = ({ skillsData }: SkillsProps) => {
  return (
    <>
      <h1 className="text-2xl uppercase font-bold pt-6">Skills</h1>
      <ul>
        {Object.keys(skillsData).map((type) => (
          <SkillType key={type} skillsData={skillsData} type={type} />
        ))}
      </ul>
    </>
  );
};

const IndividualSkill = ({ skillsArray }: IndividualSkillProps) => {
  return (
    <>
      {skillsArray.map((skill) => {
        return (
          <li className="mx-6 my-1 uppercase text-gray-500" key={skill}>
            {skill}
          </li>
        );
      })}
    </>
  );
};

const SkillType = ({ skillsData, type }: SkillTypeProps) => {
  return (
    <div
      key={type}
      className="py-8 border-b border-dashed border-gray-500"
    >
      <h2 className="text-xl">{type}</h2>
      <ul className="list-disc flex flex-wrap">
        <IndividualSkill skillsArray={skillsData[type]} />
      </ul>
    </div>
  );
};

export default Skills;
