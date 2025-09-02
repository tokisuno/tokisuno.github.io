import { useState } from 'react';
import Home from './components/Home';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Tech from './components/Tech';
import Nav from './components/Nav';

const App = () => {
  const home = "home";
  const about = "about";
  const contact = "contact";
  const tech = "tech";

  const [currentPage, setCurrentPage] = useState(home);

  const renderPage = () => {
    switch(currentPage) {
      case home:
        return <Home />;
      case about:
        return <About />
      case contact:
        return <Contact />
      case tech:
        return <Tech/>
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
    setCurrentPage(tech);
  }

  return (
    <div>
    <Nav home={handleHome} about={handleAbout} contact={handleContact} specs={handleSpecs} />
    <div className="content"> {renderPage()} </div>
    </div>
  )
}

export default App
