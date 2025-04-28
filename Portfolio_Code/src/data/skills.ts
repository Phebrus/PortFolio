export interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'tools';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5 & CSS3', percentage: 99, category: 'frontend' },
  { name: 'JavaScript', percentage: 90, category: 'frontend' },
  { name: 'TypeScript', percentage: 65, category: 'frontend' },
  { name: 'React', percentage: 92, category: 'frontend' },
  { name: 'Angular', percentage: 80, category: 'frontend' },
  { name: 'Redux', percentage: 60, category: 'frontend' },
  { name: 'Next.js', percentage: 75, category: 'frontend' },
  { name: 'Tailwind CSS', percentage: 80, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', percentage: 70, category: 'backend' },
  { name: 'Firebase', percentage: 75, category: 'backend' },
  { name: 'MySQL', percentage: 60, category: 'backend' },
  
  // Tools
  { name: 'Git & GitHub', percentage: 90, category: 'tools' },
  { name: 'Webpack', percentage: 75, category: 'tools' },
  { name: 'Figma', percentage: 85, category: 'tools' },
];