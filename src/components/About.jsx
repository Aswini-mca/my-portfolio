import React from 'react'
import myPic from '../Assets/Aswini-pic1.jpeg'
import '../css/About.css'

function About() {
  return (
    <div>
      <div className='about-container'>
        <img className='p-4' id='about-pic' src={myPic} alt='...' />
        <div>
          <h1 className='container p-4'>About Me</h1>
          <p>A passionate and dedicated professional with a Master's in Computer Applications (M.C.A) from Bharathidasan University, Trichy.
            I graduated in 2014 with an impressive academic record, achieving a remarkable score of 81.</p>
          <p>My journey into the world of technology began at Bon Secours College For Women, Thanjavur, where I completed my B.C.A. in 2012 with an outstanding score of 85.
            Notably, I secured the 1st rank in the rank holders exam for BCA, highlighting my commitment to academic excellence.</p>
          <p>Driven by a thirst for knowledge, I undertook a Full Stack Developer course on the MERN stack with GUVI GEEK NETWORK in 2023.</p>
          <p>My skills includes Html, Css, Javascript, React, NodeJs, Bootstrap, MaterialUi,    Mongodb...</p>
          <p>Apart from coding I like to hear Music, drawing and Art work.</p>
          <p>I Know English, Tamil, and Sowrashtra languages.</p>
          <p>I am now eagerly seeking opportunities to apply my knowledge and skills in a challenging and collaborative environment. Let's build something incredible together!</p>
        </div>
      </div>
    </div>
  )
}

export default About