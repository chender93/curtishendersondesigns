import React from 'react';
import photo from "./img/about.png";

function About() {
    return (
        <div>
            <div className="card mb-3 mx-auto border-light" style={{maxWidth: "900px", backgroundColor: "#ddeeff"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={photo} alt="Curtis Henderson" className="image" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title text-info">About Me</h4>
                            <p className="card-text" style={{color: "#035E62"}}>Hello and welcome to my site. I am an accomplished IT Professional looking to expand their career and become a
                            valuable team member to a rising company as a Web Developer. The site you are enjoying currently was coded and designed by myself.
                            I am passionate go-getter with the ability to learn new tasks quickly, actively participate as a team player, and motivate others.
                            I am currently attending a coding bootcamp ran by the University of Pennsyvania and have successfully completed a Linux Systems Administration bootcamp, where I obtained my RHEL7CSA certifications.
                            Aside from my professional ambitions, I am also a Gospel recording artist. You can hear some of my latest songs on <a href="https://open.spotify.com/artist/2mfltUlJKu5rCjHyO5Hkut" target="_blank" rel="noreferrer">Spotify</a>
                             or <a href="https://music.apple.com/us/artist/curtis-henderson/1369273841" target="_blank" rel="noreferrer">Apple Music.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;