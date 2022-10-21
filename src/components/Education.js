import React from 'react';
import "./css/education.css";
import Navbar from './Navbar';

export default function Education() {
    return (
        <>
            <Navbar />

            <div className='education-comp'>
                <h1>Education</h1>
                <div className='education'>
                    <div className='edu-card'>
                        <div className='ecard'>
                            <div className='spans'>
                                <span>2020-2024</span>
                                <span>CGPA : 8.76</span>
                            </div>
                            <h2>Indore Institute of Science and Technology</h2>
                            <p>Bachelors of Technology </p>
                        </div>
                        <div className='ecard'>
                            <div className='spans'>
                                <span>2019-2020</span>
                                <span>Score : 73%</span>
                            </div>
                            <h2>Maa Jinwani Public School</h2>
                            <p>Class 12th</p>
                        </div>
                        <div className='ecard'>
                            <div className='spans'>
                                <span>2017-2018</span>
                                <span>Score : 77.6%</span>
                            </div>
                            <h2>Maa Jinwani Public School</h2>
                            <p>Class 10th</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
