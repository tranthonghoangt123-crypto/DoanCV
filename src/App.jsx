import React from 'react';
import './App.css';

// Import Theme Provider
import { ThemeProvider } from './context/ThemeContext';

// Import all components
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Education from './components/Education/Education';
import TechStack from './components/TechStack/TechStack';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import ThemeCustomizer from './components/ThemeCustomizer/ThemeCustomizer';

/**
 * Full Application Layout
 * 
 * Complete Portfolio/CV Website with all sections:
 * - ThemeProvider: Manages theme state and CSS variables
 * - ThemeCustomizer: UI for customizing colors and dark mode
 * - Sidebar: Navigation menu (collapsible on mobile)
 * - Home: Hero section with introduction
 * - About: Personal introduction and features
 * - TechStack: Technologies and tools proficiency
 * - Projects: Featured projects showcase
 * - WorkExperience: Timeline of work history
 * - Education: Education timeline and certificates
 * - Testimonial: Client/colleague feedback
 * - Contact: Contact form and information
 */

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Theme Customizer */}
        <ThemeCustomizer />

        <main className="main-content" id="main-content">
          {/* Hero / Home Section */}
          <section id="home">
            <Home />
          </section>

          {/* About Section */}
          <section id="about">
            <About />
          </section>

 {/* Projects Section */}
          <section id="projects">
            <Projects />
          </section>

          {/* Tech Stack Section */}
          <section id="skills">
            <TechStack />
          </section>

         
          {/* Work Experience Section */}
          <section id="experience">
            <WorkExperience />
          </section>

          {/* Education Section */}
          <section id="education">
            <Education />
          </section>

          {/* Testimonial Section */}
          <section id="testimonial">
            <Testimonial />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
