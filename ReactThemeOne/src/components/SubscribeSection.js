import React from 'react'

export default function SubscribeSection() {
    return (
        <div>
            <div className="container" style={{ backgroundColor: "#DFD7F9", padding: "125px", borderRadius: "100px 30px 30px" }}>
                <h3 className="text-center mb-5">Subscribe to get information, latest news and other interesting offers
                    about Cobham</h3>
                <div className="d-flex justify-content-center flex-lg-row flex-column">
                    <div className="me-lg-4 me-0 me-lg-3">
                        <input type="email" className="form-control d-inline-block me-3"
                            style={{ lineHeight: "2.4", paddingRight: "130px" }} aria-describedby="emailHelp"
                            placeholder="Enter email" />
                    </div>
                    <div className="text-center mt-lg-0 mt-3">
                        <button type="button" className="btn btn-primary border-0" style={{ lineHeight: "2.5" }}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
