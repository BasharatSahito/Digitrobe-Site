import React from 'react';
import robotpic from '../images/robotpic.png'
// import style from './Button.module.css'
export default function Hero() {
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={robotpic} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                            height="500" />
                    </div>
                    <div className="col-lg-6">
                        <span> Functional, Usability & Performance </span>
                        <h1 className="display-5 fw-bold lh-1 mb-3">INFORMATION TECHNOLOGY </h1>
                        <p className="lead">We transform businesses of most major sectors with powerful and adaptable digital
                            solutions that satisfy the needs of today. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button style={{ fontFamily: 'roboto', fontWeight: 500 }} type="button" className={`btn btn-primary px-4 me-md-2`} >Find Out More</button>
                            <button style={{ fontFamily: 'roboto' }} type="button" className="btn btn-outline-secondary px-4">Default</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
