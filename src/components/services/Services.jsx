import React from 'react';
import ServiceOne from './ServiceOne';
import "./services.css"
import ServiceThree from './ServiceThree';
import ServiceTwo from './ServiceTwo';

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I offer</span>

        <div className="services_container container grid">
            <ServiceOne />
            <ServiceTwo />
            <ServiceThree />
        </div>
    </section>
  );
};

export default Services;
