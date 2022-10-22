import React, { useState } from 'react'

const ServiceTwo = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
          setToggleState(index);
    }

  return (
    <div className="services_content">
        <div>
            <i className="uil uil-server-connection services_icon"></i>
            <h3 className="services_title">Computer <br /> Occupation</h3>
        </div>

        <span className="services_button" onClick={() => toggleTab(2)}>
            View more 
        <i className="uil uil-arrow-right services_button-icon"></i>
        </span>

        <div className={toggleState === 2 ? "services_model active-model" : "services_model"}>
            <div className="services_model-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services_model-close"></i>

                <h3 className="services_model-title">PC Guy</h3>
                <p className="services_model-descriptions">With 8 years of personal experience I ensure to 
                perform and provide an excellent and quality of works to my clients.</p>

                <ul className="services_model-services grid">
                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I do assemble and disassemble.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I do deep cleaning.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">I do troubleshooting.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">PC build advice.</p>
                    </li>

                    <li className="services_model-service">
                        <i className="uil uil-check services_model-icon"></i>
                        <p className="services_model-info">Hardware and software installation.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default ServiceTwo;
