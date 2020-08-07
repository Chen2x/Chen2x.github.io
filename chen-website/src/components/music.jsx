import React, { Component } from "react";

class Music extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <img
                        class="musicphoto"
                        src="Images/music.jpg"
                        alt="me on guitar"
                        width="100%"
                        height="100%"
                    />
                </div>
                <div class="bio">
                    <iframe
                        src="https://open.spotify.com/embed/artist/7xoylHrgXDB5lNd2Sgo2Ql"
                        width="300"
                        height="380"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
                <div class="musicinfo">
                    <h1 class="biotext">
                        My Music &nbsp&nbsp&nbsp
                        {/* <iframe
                            src="https://open.spotify.com/follow/1/?uri=spotify:artist:7xoylHrgXDB5lNd2Sgo2Ql&size=detail&theme=light"
                            width="300"
                            height="56"
                            scrolling="no"
                            frameborder="0"
                            style="border:none; overflow:hidden;"
                            allowtransparency="true"
                        ></iframe> */}
                    </h1>
                    One of my favourite things to do is writing and recording
                    music.
                    {/* <br>
                        I am the lead singer, guitarist, bass, and producer for
                        the band{" "}
                        <a href="https://open.spotify.com/artist/7xoylHrgXDB5lNd2Sgo2Ql?si=QvIlNPS-SAqdlHeS1cRUFw">
                            UltraViolet Catastrophe
                        </a>
                        .{" "}
                    </br> */}
                    {/* <div>
                    <br>
                        It is like my own meditation or therapy. I often get
                        more insight into myself and my thoughts that might not
                        be at the forefront of my mind when writing. While I
                        can't say I am particular to a specific instrument, I am
                        proficient at singing, guitar, bass, flute, and piano
                        .{" "}
                    </br>
                    </div> */}
                </div>
            </React.Fragment>
        );
    }
}
export default Music;