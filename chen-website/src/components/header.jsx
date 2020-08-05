import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="header">
                    <a class="home" href="index.html">
                        Home
                    </a>
                    <a href="https://github.com/Chen2x">Github</a>
                    <a href="https://www.linkedin.com/in/2chenz/">LinkedIn</a>
                    <a href="https://drive.google.com/file/d/1W9ulbT3b12BFHN94NGQPRl8MkZSNu2XR/view?usp=sharing">
                        Resume
                    </a>
                    <a class="music" href="music.html">
                        Music
                    </a>
                    <a class="right" href="contact.html">
                        Contact
                    </a>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;
