import React from 'react'

export default function ServicesSection() {

    const margin = {
        marginBottom: "8px"
    }

    return (
        <div>
            <div className="container">
                <div className="row" style={{ marginBottom: "100px" }}>
                    <div className="col-xl-12">
                        <p style={margin}>OUR SERVICES </p>
                        <h1 className="mb-5">Design the Concept of Your Business Idea Now</h1>
                    </div>
                    <div className="col-xl-6">
                        <p style={margin}><strong>Web Development</strong></p>
                        <p className="mb-5">We carry more than just good coding
                            skills. Our experience makes us stand
                            out from other web development.</p>
                    </div>
                    <div className="col-xl-6">
                        <p style={margin}><strong>Mobile Development </strong></p>
                        <p className="mb-5">Create complex enterprise software,
                            ensure reliable software integration,
                            modernise your legacy system.
                        </p>
                    </div>
                    <div className="col-xl-6">
                        <p style={margin}><strong>UI/UX Design </strong></p>
                        <p className="mb-5">Design the Concept of Your Business Idea Now</p>
                    </div>
                    <div className="col-xl-6">
                        <p style={margin}><strong>QA & Testing</strong></p>
                        <p className="mb-5">Design the Concept of Your Business Idea Now</p>
                    </div>
                    <div className="col-xl-6">
                        <p style={margin}><strong>IT Counsultancy </strong></p>
                        <p className="mb-5">Design the Concept of Your Business Idea Now</p>
                    </div>
                    <div className="col-xl-6">
                        <p style={margin}><strong>Dedicated Team </strong></p>
                        <p className="mb-5">Design the Concept of Your Business Idea Now</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
