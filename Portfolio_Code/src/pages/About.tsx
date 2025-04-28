import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Download, Mail } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import SkillBar from '../components/ui/SkillBar';
import { skills } from '../data/skills';

const About: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  
  return (
    <>
      <Section
        title="About Me"
        subtitle="Get to know more about me and my background"
        className="pt-36"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden h-full">
              <img 
                src="https://images.pexels.com/photos/4064826/pexels-photo-4064826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="John Doe - Frontend Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Frontend Developer based in Rustavi, Georgia
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hello! I'm Saba, a passionate frontend developer with 5 years of experience building modern web applications. I specialize in creating engaging, responsive user interfaces with a focus on performance and accessibility.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in web development started during my Computer Science degree at GAU, where I discovered my passion for creating beautiful and functional user experiences. Since then, I've worked with startups and established companies to bring their digital products to life.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <span className="text-2xl font-bold text-primary">5+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Years of Experience</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <span className="text-2xl font-bold text-primary">40+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <span className="text-2xl font-bold text-primary">30+</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Happy Clients</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                as="a"
                href="/Saba_Sherazadishvili_Resume.pdf"
                download
                icon={<Download size={20} />}
              >
                Download Resume
              </Button>
              
              <Button 
                as={NavLink}
                to="/contact"
                variant="outline"
                icon={<Mail size={20} />}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section
        title="My Skills"
        subtitle="Technical skills and technologies I work with"
        className="bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Frontend Development
            </h3>
            
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Backend Development
            </h3>
            
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
              Tools & Technologies
            </h3>
            
            {toolsSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </motion.div>
        </div>
      </Section>
      
      <Section
        title="Experience & Education"
        subtitle="My professional journey and academic background"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-8 text-gray-800 dark:text-white">
              Work Experience
            </h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
              <div className="relative pl-8">
                <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary"></span>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-primary">2022</span>
                  <h4 className="text-lg font-bold mt-1 mb-2 text-gray-800 dark:text-white">Junior Frontend Developer</h4>
                  <h5 className="text-gray-600 dark:text-gray-400 mb-3">Local Start-up</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Leading the frontend development team, architecting scalable React applications, and implementing modern web technologies to improve user experience.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary"></span>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-primary">2021 - 2022</span>
                  <h4 className="text-lg font-bold mt-1 mb-2 text-gray-800 dark:text-white">Frontend Developer</h4>
                  <h5 className="text-gray-600 dark:text-gray-400 mb-3">WebSpark Solutions</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed responsive web applications using React, optimized performance, and collaborated with UX designers to implement engaging user interfaces.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary"></span>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-primary">2019 - 2020</span>
                  <h4 className="text-lg font-bold mt-1 mb-2 text-gray-800 dark:text-white">Junior Web Developer</h4>
                  <h5 className="text-gray-600 dark:text-gray-400 mb-3">Digital Creations Agency</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built and maintained client websites, implemented responsive designs, and assisted in UX improvements across multiple projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-8 text-gray-800 dark:text-white">
              Education
            </h3>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
            <div className="relative pl-8">
                <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary"></span>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <span className="text-sm font-medium text-primary">2021</span>
                <h4 className="text-lg font-bold mt-1 mb-2 text-gray-800 dark:text-white">Certified Front-End Developer</h4>
                 <h5 className="text-gray-600 dark:text-gray-400 mb-3">FreeCodeCamp</h5>
                <p className="text-gray-700 dark:text-gray-300">
                Completed professional certification focused on modern web development, React.js, responsive design, and best practices.
                 </p>
               </div>
              </div>

              
              <div className="relative pl-8">
                <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary"></span>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-primary">2022</span>
                  <h4 className="text-lg font-bold mt-1 mb-2 text-gray-800 dark:text-white">Frontend Web Development Certification</h4>
                  <h5 className="text-gray-600 dark:text-gray-400 mb-3">Frontend Masters</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    Advanced React patterns, state management, and modern CSS techniques. Completed all practical projects with distinction.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary"></span>
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-primary">2022</span>
                  <h4 className="text-lg font-bold mt-1 mb-2 text-gray-800 dark:text-white">UI/UX Design Foundations</h4>
                  <h5 className="text-gray-600 dark:text-gray-400 mb-3">Design+Code</h5>
                  <p className="text-gray-700 dark:text-gray-300">
                    User-centered design principles, prototyping, and interaction design for web and mobile applications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default About;