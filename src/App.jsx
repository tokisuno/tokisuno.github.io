import { useState } from 'react';
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Specs from './components/Specs';
import Footer from './components/Footer';

const App = () => {
  const home = "home";
  const about = "about";
  const contact = "contact";
  const specs = "specs";

  const [currentPage, setCurrentPage] = useState(home);

  const renderPage = () => {
    switch(currentPage) {
      case home:
        return <Home />;
      case about:
        return <About />
      case contact:
        return <Contact />
      case specs:
        return <Specs />
    }
  }

  const handleHome = () => {
    setCurrentPage(home);
  }
  const handleContact = () => {
    setCurrentPage(contact);
  }
  const handleAbout = () => {
    setCurrentPage(about)
  }
  const handleSpecs = () => {
    setCurrentPage(specs);
  }


  return (
    <div className="real-root">
      <div className="container">
        <button onClick={handleHome}>home</button>
        <button onClick={handleAbout}>about</button>
        <button onClick={handleContact}>contact</button>
        <button onClick={handleSpecs}>specs</button>
        {renderPage()}
      </div>
      <Footer />
    </div>
  )
}

export default App
