
import React from 'react'
import { useRef } from 'react';



export default function Hero() {
  const footerRef = useRef(null);
   const handlectaClick = () => {
    console.log("CTA button clicked");
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
    

    }
    

    

  return (
    
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>proffesional front-end developer</h1>
                <p className="p1"> Showcase the professional front-end developed showcase key portfolio and 
          continue the scrolling and join the me with foam members.</p>
          <button className="cta-button" onClick={handlectaClick}>conatct now</button>
           {/* Place footer outside the hero section */}
      <footer ref={footerRef} id="footer">
      
      </footer>
            </div>
        </section>
  )
}


