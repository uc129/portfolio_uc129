
import Certifications from '../Components/Certifications/Certifications';
import Contact from '../Components/Contact/Contact';
import Education from '../Components/Education/Education';
import LandingPage from '../Components/Landing/landing';

import Layout from '../Components/Layout/layout';
import SidebarNav from '../Components/Navigation/sidebar';
import Projects from '../Components/Portfolio/Projects/projects';
import './App.css';


function App() {

  document.title = "Portfolio | Home";


  function transformScroll(event) {
    if (!event.deltaY) {
      return;
    }
    var scrollFactor = 0.4;
    var element = event.currentTarget;
    element.scrollLeft += (event.deltaY + event.deltaX) * scrollFactor;
    event.preventDefault();
  }

  var element = document.scrollingElement || document.documentElement;
  element.addEventListener('wheel', transformScroll);



  return (

    <div className='flex w-[400vw] overflow-y-hidden'>
      <SidebarNav />
      <Layout>
        <LandingPage />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </Layout>
    </div>

  );
}

export default App;
