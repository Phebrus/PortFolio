import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Section from '../components/ui/Section';
import ContactForm from '../components/ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Section
        title="Contact Me"
        subtitle="Have a project in mind or just want to chat? I'd love to hear from you!"
        className="pt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Let's Talk
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Whether you have a question, want to discuss a potential project, or just want to say hello, feel free to reach out. I'm always open to new opportunities and collaborations.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:saba.sherazadishvili2004@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    saba.sherazadishvili2004@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-gray-800 dark:text-white">Phone</h4>
                  <a href="tel:+11234567890" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    +(995) 592-07-48-12
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-primary/10 text-primary mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                   Rustavi, Georgia
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                Find me on
              </h4>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/saba-sherazadishvili-4823b4275/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/10 dark:hover:text-primary transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send a Message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Contact;