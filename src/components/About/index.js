import React from 'react'
import profileImage from "../../assets/profile/profile.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <img src={profileImage} className="my-2" alt="cover" />
      <div>
        <p>
        Hello! My name is Lawrence Yuen and welcome to my website. I recently graduated in 2020 from UC Irvine with a Bachelor's in anthropology.
        I enjoy learning to code during my free time and have started UC Berkeley's Coding Bootcamp.
        </p>
      </div>
    </section>
  )
}

export default About;