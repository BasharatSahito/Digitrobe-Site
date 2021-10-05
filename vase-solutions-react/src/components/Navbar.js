import React from 'react'
import styles from './Navbar.module.css'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <div className="container">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <a className={`nav-link active fw-bold ${styles.nav_line}`} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className={`nav-link fw-bold ${styles.nav_line}`} href="/">About Us</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className={`nav-link fw-bold ${styles.nav_line}`} href="/">Services</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className={`nav-link fw-bold ${styles.nav_line}`} href="/">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}
