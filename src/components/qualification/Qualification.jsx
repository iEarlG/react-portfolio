import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
          setToggleState(index);
    }

  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My creative journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" :
                    "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icons"></i>
                    Education
                </div>
                
                <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : 
                    "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-suitcase-alt qualification_icons"></i>
                    Experience
                </div>         
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? "qualification_contents qualification_content-active" :
                    "qualification_contents"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Maranathan Christian Academy</h3>
                            <span className="qualification_subtitle">Basketball Athlete</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"> </i>
                                2015 - 2016
                            </div>
                        </div>

                        <div>
                            <span className="qualification_circle"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className="qualification_circle"></span>
                                <span className="qualification_line"></span>
                            </div>
                        <div>
                            <h3 className="qualification_title">Daniel R. Aguinaldo National High School</h3>
                            <span className="qualification_subtitle">ICT - Information Communication Technology</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"> </i>
                                2019 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">STI College Davao</h3>
                            <span className="qualification_subtitle">MAWD - Mobile Application and Web Development</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"> </i>
                                2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification_circle"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className="qualification_circle"></span>
                                
                            </div>
                        <div>
                            <h3 className="qualification_title">Soon</h3>
                            <span className="qualification_subtitle">Bachelor of Science in Computer Science</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"> </i>
                                0000 - 0000
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification_contents qualification_content-active" :
                    "qualification_contents"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Soon</h3>
                            <span className="qualification_subtitle">Soon</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"></i>
                                0000 - 0000
                            </div>
                        </div>

                        <div>
                            <span className="qualification_circle"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className="qualification_circle"></span>
                                <span className="qualification_line"></span>
                            </div>
                        <div>
                            <h3 className="qualification_title">Soon</h3>
                            <span className="qualification_subtitle">Soon</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"></i>
                                0000 - 0000
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Soon</h3>
                            <span className="qualification_subtitle">Soon</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"></i>
                                0000 - 0000
                            </div>
                        </div>

                        <div>
                            <span className="qualification_circle"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                            <div>
                                <span className="qualification_circle"></span>
                                
                            </div>
                        <div>
                            <h3 className="qualification_title">Soon</h3>
                            <span className="qualification_subtitle">Soon</span>
                            <div className="qualification_date">
                                <i className="uil uil-calendar-alt"></i>
                                0000 - 0000
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Qualification;