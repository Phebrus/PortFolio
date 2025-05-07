import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-inter mb-4 text-primary">
              Saba<span className="text-gray-800 dark:text-white"> Sherazadishvili</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Frontend developer crafting clean & responsive UIs.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/saba-sherazadishvili-4823b4275/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:saba.sherazadishvili2004@gmail.com" 
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-inter mb-4 text-gray-800 dark:text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Home
              </NavLink>
              <NavLink to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Projects
              </NavLink>
              <NavLink to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                About
              </NavLink>
              <NavLink to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Contact
              </NavLink>
              <a href="/Saba_Sherazadishvili_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Resume
              </a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-inter mb-4 text-gray-800 dark:text-white">Contact</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">saba.sherazadishvili2004@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-400">Rustavi, Georgia</p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Saba Sherazadishvili. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;