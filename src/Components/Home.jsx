import React from "react";
import "./Components.css"
import scancode from "./image/qrcode.png"
import skill from "./image/skill.svg"
import html from "./image/html5-with-wordmark-color.svg"
import css from "./image/css.svg"
import js from "./image/javascript-seeklogo.com.svg"
import bootstrap from "./image/bootstrap.svg"
import react from "./image/react.svg"
import github from "./image/git.svg"
import mongodb from "./image/mongodb.svg"
import nodejs from "./image/nodejs-1.svg"
import arrow from "./image/arrow.svg"

const Home = () => {
  return (

    <div className="container-1 row">
      <div className="col-md-4">
        <div className="img">
      <img style={{marginLeft:"25%",marginTop:"10px"}} src={skill} width="150" height="150" /><br/>
      <img style={{marginLeft:"10%"}} title="HTML" src={html} width="50" height="50" />
      <img style={{marginLeft:"40%", marginTop:"10px"}} title="CSS" src={css} width="70" height="70" /><br/>
      <img style={{marginLeft:"35%", marginTop:"10px"}} title="JavaScript" src={js} width="50" height="50" /><br/>
      <img style={{marginLeft:"5%", marginTop:"10px"}} title="Bootstrap" src={bootstrap} width="90" height="50" />
      <img style={{marginLeft:"30%"}} title="React" src={react} width="100" height="50" /><br/>
      <img style={{marginLeft:"35%", marginTop:"10px"}} title="GitHub" src={github} width="100" height="50" /><br/>
      <img style={{marginLeft:"10%", marginTop:"10px"}} title="NodeJS" src={nodejs} width="70" height="50" />
      <img style={{marginLeft:"30%"}} src={mongodb} title="MongoDB" width="100" height="100" />
        </div>

      </div>
    <div className="container-details col-md-4">
      <div className="text">

      <h6>&lt;html&gt;</h6>
      <h6>&lt;body&gt;</h6>
      <h6>&lt;h1&gt;</h6>
      <h1>Hii, <br />
      I am Jinkal,<br/>
      Emerging Web Developer
      </h1>
      <h6>&lt;/h1&gt;</h6>
      <h6>&lt;p&gt;</h6>
      <h5>Frontend Developer</h5>
      <h6>&lt;/p&gt;</h6>
      <h6>&lt;/body&gt;</h6>
      <h6>&lt;/html&gt;</h6>
      </div>
    </div>
    <div className="col-md-4 link">
      <h3>Let's connect on Linkedin</h3>
      <img style={{marginLeft:"30%"}} src={arrow} width="50" height="50" /><br/>
    <a target="blank" href="https://www.linkedin.com/in/jinkal-shah-2423b9135/"><img src={scancode} width="150" height="150" /></a>
    </div>
    </div>
  );
};

export default Home;
