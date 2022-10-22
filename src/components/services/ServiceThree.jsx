import React, { useState } from 'react'

const ServiceThree = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
          setToggleState(index);
    }
  return (
    <div className="services_content">
        <div>
            <i className="uil uil-image-edit services_icon"></i>
            <h3 className="services_title">Visual <br /> Editor</h3>
        </div>

        <span className="services_button" onClick={() => toggleTab(3)}>View more 
        <i className="uil uil-arrow-right services_button-icon"></i>
        </span>

        <div className={toggleState === 3 ? "services_model active-model" : "services_model"}>
            <div className="services_model-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services_model-close"></i>

                <h3 className="services_model-title">Visual Editor</h3>
                <p className="services_model-description">Knowledgeable enough to 
                perform and provide an excellent and quality of works to my clients.</p>

                <ul className="services_model-services grid">
                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I edit content vlogs.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I edit gaming contents.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I do social media flyers.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I can do social media handler.</p>
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

export default ServiceThree;