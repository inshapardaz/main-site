import React from "react";
import { API_KEY } from "env";
//----------------------------------------------
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page.</p>
            {API_KEY}
        </div>
    );
};

export default About;
