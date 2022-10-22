import React, { useState } from 'react'

const ServiceOne = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="services_content">
        <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">Frontend <br /> Developer</h3>
        </div>

        <span className="services_button" onClick={() => toggleTab(1)}>
            View more 
        <i className="uil uil-arrow-right services_button-icon"></i>
        </span>

        <div className= {toggleState === 1 ? "services_model active-model" : "services_model"}>
            <div className="services_model-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services_model-close"></i>

                <h3 className="services_model-title">Frontend Developer</h3>
                <p className="services_model-description">Knowledgeable enough to 
                perform and provide an excellent and quality of works to my clients.</p>

                <ul className="services_model-services grid">
                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I develop the user interface.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I create Ui interactions.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">Webpage and Mobile App Development.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I do Mobile Ui interactions.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">Design and mockups of products for clients.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default ServiceOne;