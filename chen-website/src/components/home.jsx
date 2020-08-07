import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="root"></div>
                <title>Chen^2 Software</title>
                <div class="bio">
                    <img
                        class="myphoto"
                        src="Images/me.jpg"
                        alt="me"
                        width="400"
                        height="400"
                    />
                </div>
                <div class="bioinfo">
                    <h1 class="biotext">A Little About Me</h1>
                    <p>
                        My name is Chen Chen and I am a Honours Computer Science
                        student at McMaster University slated to graduate in
                        2020. In the meantime, I am always looking for new
                        oppurtunities to work and learn.{" "}
                    </p>
                    <h3>Field Experience</h3>
                    <ul>
                        <li>Bioinformatics</li>
                        <li>Production Line Machinery</li>
                        <li>Computer Cable and Hardware</li>
                        <li>Customer Service</li>
                        <li>Food Industry</li>
                    </ul>
                    <p>Programming is my lifestyle and music is my passion. </p>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
