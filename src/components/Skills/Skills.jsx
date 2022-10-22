import React from 'react';
import Edit from './Edit';
import Editing from './Editing';
import Frontend from './Frontend';
import "./skills.css";


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My expertise level</span>

        <div className="skills_container container grid">
            <Frontend />
            <Edit />
            <Editing />
        </div>
    </section>
  );
};

export default Skills;