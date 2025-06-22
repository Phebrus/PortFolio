import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';
import SkillBar from '../components/ui/SkillBar';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

const Home: React.FC = () => {
  const featuredProjects = projects.slice(0, 3);
  const frontendSkills = skills.filter(skill => skill.category === 'frontend').slice(0, 4);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4">
                Frontend Developer
              </span>
              <h1 className="mb-6 text-gray-900 dark:text-white">
                Hi, I'm Saba Sherazadishvili
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
              <a href="/Contact">I build React apps that are fast, clean, and focused on user experience. I solve real problems for real users.
               Interested in working together? Let’s talk.</a> 
              </p>
              <div className="flex flex-wrap gap-4">
              <Button 
  as={NavLink} 
  to="/projects"
  icon={<ArrowRight size={20} />}
>
  View My Work
</Button>

<Button 
  variant="outline"
  as="a"
  href="/Saba-Sherazadishvili-Resume.pdf"
  download
  icon={<Download size={20} />}
>
  Download Resume
</Button>
              </div>
              
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-96 md:h-auto"
            >
              <div className="bg-primary/5 dark:bg-primary/10 rounded-3xl overflow-hidden h-full">
                <img 
                  src="https://images.pexels.com/photos/4064826/pexels-photo-4064826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Saba Sherazadishvili - Frontend Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Preview Section */}
      <Section
        title="My Skills"
        subtitle="Here are some of my core technical skills and proficiencies"
        className="bg-gray-50 dark:bg-gray-900/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
              >
                <SkillBar name={skill.name} percentage={skill.percentage} />
              </motion.div>
            ))}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <NavLink 
                to="/about" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View all skills <ArrowRight size={18} className="ml-1" />
              </NavLink>
            </motion.div>
          </div>
          
          <motion.div
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Why Choose Me?</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Strong focus on performance optimization and accessibility</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Experience with modern frameworks and libraries</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Clean, maintainable, and well-documented code</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Collaborative approach and excellent communication</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Passion for staying updated with industry trends</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>
      
      {/* Featured Projects */}
      <Section
        title="Featured Projects"
        subtitle="Check out some of my latest work"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button as={NavLink} to="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </Section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5 dark:bg-primary/10">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Ready to bring your ideas to life?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-700 dark:text-gray-300">
              Let's collaborate and create something amazing together!
            </p>
            <Button as={NavLink} to="/contact" size="lg">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;