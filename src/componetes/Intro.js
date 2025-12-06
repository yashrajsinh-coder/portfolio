import React from 'react'

export default function Intro(props) {
   
  return (
   <section className="Intro-content" id="about us">
    <div className="Intro">
    <div className="Intro-container">
    
      <h2 className="Intro-title">Yashrajsinh Chavda</h2>
    <p className="Intro-subtitle">A Professional Front-End Developer<br/>Passionate Intro creating innovative digital solutions that transform businesses and enhance user experiences through cutting-edge technology and strategic thinking.</p>


   
    
    <div className="stats">
      <div className="stat-box">
        <span className="number">5+</span>
        <span className="label">Projects Completed</span>
      </div>

      <div className="stat-box">
        <span className="number">2+</span>
        <span className="label">Happy Clients</span>
      </div>

      <div className="stat-box">
        <span className="number">1+</span>
        <span className="label">Years Experience</span>
      </div>
    </div>
        <div className="skill-container">
        <h2> skills</h2>
        <p>Proficient in modern web technologies and development frameworks.</p>
        <div className="skill-grid">
        <div className="skill-card">
          <h3>web development</h3>
          <ul>
            <li>front-end</li>
            <li>back-end</li>
          </ul>
          </div>
          <div className="skill-card">
            <h3>digital marketing</h3>
            <ul>
              <li>seo</li>
              <li>google ads</li>
              <li>leads genearation</li>
            </ul>
          </div>
          <div  className="skill-card">
            <h3>ai automation</h3>
            <ul>
              <li>ai agent</li>
              <li>ai chatbot</li>
              <li>ai tools use </li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>framework</h3>
            <ul>
              <li>react.js</li>
              <li>next.js</li>
              <li>django</li>
            </ul>
          </div>
          </div>
          </div>
          </div>
          </div>
  </section>
  )
}
