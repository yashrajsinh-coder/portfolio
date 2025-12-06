import logo from './logo.svg';
import './App.css';
import Navbar from './componetes/Navbar';
import Hero from './componetes/Hero';
import Service from './componetes/Service';
import Work from './componetes/Work';
import Intro from './componetes/Intro';
import Footer from './componetes/Footer';



  
function App() {
  return (
<>

    <div className="portfolio"/>
  
      <Navbar  title="yasharjsinh chavda"/>
      <Hero/>
      <Service/>
      <Work/>
      <Intro/>
      <Footer/>
      
  
    
    </>
  );
}

export default App;