import React from 'react'

export default function Footer() {
  

  
  return (
  
    <>
   <footer className="footer" id="contact">
  <div className="footer-container">


    <div className="footer-section">
      <h2>About Us</h2>
      <p>We provide modern web solutions and creative designs to grow your business online.</p>
    </div>


    <div className="footer-section">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="about us">About us</a></li>
      </ul>
    </div>

    
    <div className="footer-section">
      <h2>Contact</h2>
      <p>Email: yasharjsinh495@Gmail.com</p>
      <p>Phone: +91 7016651250</p>
      <p>Address: Gujarat, India</p>
    </div>


    <div className="footer-section">
      <h2>Follow Us</h2>
      <div className="social-icons">
        <a href="#"><i className="fa-brands fa-github" ></i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdCZhbVNuoVDpKYkx1pDRQey7spXdqk9Oxg&s" height={50}/></a>
        <a href="#"><i className="fa-brands fa-upwork"></i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfDZmmVSoupyfts5jUwMlZyuG0vmETWRxiQ&s" height={50}/></a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 All Rights Reserved | Designed by <span className="name">Yashrajsinh Chavda</span></p>
  </div>
</footer>


<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</>

  )
}
