import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Task from './components/Task';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/header.css';
import './styles/hero.css';
import './styles/feature.css';
import './styles/task.css';
import './styles/contact.css';
import './styles/footer.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <Task />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
