import React from 'react'
import robotpic from '../images/robotpic.png'


export default function AboutSection() {
    return (
        <div>
            <div className="container ">
                <p className="text-center">ABOUT COMPANY</p>
                <h1 className="text-center mb-5">Your Partner for Software Innovation</h1>
                <div className="row mb-5">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                        <div className="card h-100">
                            <img src={robotpic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Experience </h5>
                                <p className="card-text">We have a great team to work with.</p>

                            </div>
                            <div className="card-footer">
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-3">
                        <div className="card h-100">
                            <img src={robotpic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">We transform businesses of most major sectors with powerful and
                                    adaptable
                                    digital
                                    solutions that satisfy the needs of today.</p>
                            </div>
                            <div className="card-footer">
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6  col-sm-12 col-12  mb-3">
                        <div className="card h-100">
                            <img src={robotpic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                            <div className="card-footer">
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12  mb-3">
                        <div className="card h-100">
                            <img src={robotpic} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                                    of
                                    the card's content.</p>
                            </div>
                            <div className="card-footer">
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
