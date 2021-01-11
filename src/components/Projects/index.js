import React from 'react';
import passthepage from './img/Pass the Page.gif';
import petpurrfect from './img/PetPurrfect.gif';
import passwordgen from './img/Password Generator.gif';
import weathercheck from './img/Weather Check App.gif';
import notetakr from './img/NoteTakr.gif';
import ezsale from './img/EZ-sale-ing.gif';
import github from './img/github-logo.png';
import browser from './img/browser-logo.png';

function Projects(){
    return(
<div>
  <div className="row row-cols-1 row-cols-md-3 g-5 mx-auto p-5">
    <div className="col animate__animated animate__pulse">
      <div className="card text-info">
        <img src={passthepage} className="card-img-top" alt="Pass the Page Project" />
        <div className="card-body">
          <h5 className="card-title">Pass the Page</h5>
          <p className="card-text">Pass the Page allows users to create stories from all types of genres and to collaborate with other users to write the next hit novel safely from home!
            <a href="https://passthepage.herokuapp.com/">
              <img src={browser} alt="browser icon" />
            </a>
            <a href="https://github.com/CFsylvester/pass-the-page">
              <img src={github} alt="github icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col animate__animated animate__pulse">
      <div className="card text-primary">
        <img src={petpurrfect} className="card-img-top" alt="PetPurrfect Project" />
        <div className="card-body">
          <h5 className="card-title">PetPurrfect</h5>
          <p className="card-text">Pet Purrfect is an app that allows a user to search through a list of cat breeds, returning a cute picture and pertinent info about said breed, the app also contains a search function for available adoptable cats in the user’s area!
            <a href="https://bmralph87.github.io/cats">
              <img src={browser} alt="browser icon" />
            </a>
            <a href="https://github.com/bmralph87/cats">
              <img src={github} alt="github icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col animate__animated animate__pulse">
      <div className="card text-info">
        <img src={passwordgen} className="card-img-top" alt="Password Generator Project" />
        <div className="card-body">
          <h5 className="card-title">Password Generator</h5>
          <p className="card-text">A front-end application that allows users to create a secure password at random with desired specifications.
            <a href="https://chender93.github.io/password-generator">
              <img src={browser} alt="browser icon"/>
            </a>
            <a href="https://github.com/chender93/password-generator">
              <img src={github} alt="github icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col animate__animated animate__pulse">
      <div className="card text-primary">
        <img src={weathercheck} className="card-img-top" alt="Weather Check Project" />
        <div className="card-body">
          <h5 className="card-title">Weather Check App</h5>
          <p className="card-text">A weather application that will display the current weather conditions along with a 5-day forecast for a selected city. As the user make searches, their saved cities will appear in a list that they can refer to if needed.
            <a href="https://chender93.github.io/weather-dashboard/">
              <img src={browser} alt="browser icon" />
            </a>
            <a href="https://github.com/chender93/weather-dashboard">
              <img src={github} alt="github icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col animate__animated animate__pulse">
      <div className="card text-info">
        <img src={notetakr} className="card-img-top" alt="NoteTakr Project" />
        <div className="card-body">
          <h5 className="card-title">NoteTakr</h5>
          <p className="card-text">Allows a user to create, save, and delete notes at their discretion. The app will save your notes for later reference.
            <a href="https://hidden-coast-30424.herokuapp.com/">
              <img src={browser} alt="browser icon" />
            </a>
            <a href="https://github.com/chender93/noteTakr">
              <img src={github} alt="github icon"/>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col animate__animated animate__pulse">
      <div className="card text-primary">
        <img src={ezsale} className="card-img-top" alt="EZ-sale-ing Project" />
        <div className="card-body">
          <h5 className="card-title">EZ-sale-ing Express App</h5>
          <p className="card-text">A Node.js app that can be utlized for retail stores that need back-end routes set up.
            <a href="http://www.youtube.com/watch?v=stFWfEPitxQ">
              <img src={browser} alt="browser icon"/>
            </a>
            <a href="https://github.com/chender93/ez-sale-ing">
              <img src={github} alt="github icon" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Projects;
