import React from 'react';
import "./portfolio.css";
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most recent projects</span>

        <Projects />
    </section>
  );
};

export default Portfolio;