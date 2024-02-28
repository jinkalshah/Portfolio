import React from "react";
import "./Components.css";
import imgf from "././image/img1.jpeg"

const About = () => {
  return (
    <div className="container-1 row" style={{ height: "100vh" }}>
      <div className="col-md-6">
      <img src={imgf} style={{float:"right", borderRadius:"50%",marginTop:"40px",border:"1px double #000"}} width="330" height="350" />
      </div>
      <div
        className="col-md-6"
        style={{ marginTop: "50px", paddingRight: "7%", fontFamily: 'cursive' }}
      >
        <h1>Hello</h1>
        <h3>Here's who i am and what I do</h3>
        <p style={{ textAlign: "justify" }}>
          I am Jinkal Shah. I have completed my B.E in
          Environment Engineering in 2020. I worked in my core field for 2 years. When i was working in Gujarat Pollution Control Board which is
          government firm, i had seen its portal/website. I got interest in it
          and slowly slowly i got interest in Web Development. So i have decided
          to switch my career in this field. I learnt HTML, CSS, Javascript,
          Bootstrap, React, Github, Netlify, etc..I have also completed MERN
          stack development training and internship from Nullclass. Now I am
          excited to start my career in this field and give my best to the
          company.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
