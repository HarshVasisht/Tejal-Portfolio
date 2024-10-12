import React from 'react';
import { GithubIcon, Linkedin, Mail } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import BlogPreview from './components/BlogPreview';
import Contact from './components/Contact';
import BlogPage from './components/BlogPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-4 py-8">
        {currentPage === 'home' ? (
          <>
            <About />
            <Experience />
            <Skills />
            <BlogPreview setCurrentPage={setCurrentPage} />
            <Contact />
          </>
        ) : (
          <BlogPage />
        )}
      </main>
      <footer className="bg-[#0f3460] text-center py-4 mt-8">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/tejal-singh" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/tejal-singh" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:t26tejal@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-2">&copy; 2024 Tejal Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;