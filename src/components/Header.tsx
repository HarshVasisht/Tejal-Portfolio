import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, setCurrentPage }) => {
  return (
    <header className="bg-[#0f3460] py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tejal Singh</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" onClick={() => setCurrentPage('home')} className="hover:text-[#ff6b6b]">Home</a></li>
            <li><a href="#about" className="hover:text-[#ff6b6b]">About</a></li>
            <li><a href="#experience" className="hover:text-[#ff6b6b]">Experience</a></li>
            <li><a href="#skills" className="hover:text-[#ff6b6b]">Skills</a></li>
            <li><a href="#" onClick={() => setCurrentPage('blog')} className="hover:text-[#ff6b6b]">Blog</a></li>
            <li><a href="#contact" className="hover:text-[#ff6b6b]">Contact</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#" onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="hover:text-[#ff6b6b]">Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ff6b6b]">About</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ff6b6b]">Experience</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ff6b6b]">Skills</a></li>
            <li><a href="#" onClick={() => { setCurrentPage('blog'); setIsMenuOpen(false); }} className="hover:text-[#ff6b6b]">Blog</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ff6b6b]">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;