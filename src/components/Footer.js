import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Thanks for viewing our project!</h2>
            <p>This project was created by Chihiro Niki, Maddox Krape, Matthew Kim, and Georgia Bradley.</p>
            <ul className="actions">
                <li><Link to="/" className="button">Go Home</Link></li>
            </ul>
        </section>
        <p className="copyright">Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
