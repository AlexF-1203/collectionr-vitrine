import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CardShowcase from './components/CardShowcase';
import Recruitment from './components/Recruitment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CardShowcase />
        <About />
        <Recruitment />
      </main>
      <Footer />
    </div>
  );
}

export default App;
