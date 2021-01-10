import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h3 className="nav-item main-name">CURTIS HENDERSON</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a data-testid="about" className="nav-link active" aria-current="page" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a data-testid="projects" className="nav-link active" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="https://docs.google.com/document/d/1KEJ08JK2DL0Dp5sxDnwiw0E1P_7AOnN5s_D6BJ81Dvc/edit?usp=sharing">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;