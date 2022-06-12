import React from 'react';
import reactlogo from "../images/react-icon-small.png"

export default function Navbar() {

    return (<nav>
        <a className="App-link" href="https://reactjs.org">
            <img src={reactlogo} alt="reactlogo" className="nav--icon" />
        </a>
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
    )


}