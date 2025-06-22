import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import projectsData from './data.json';

// const Projects = () => {
//   const [letterClass, setLetterClass] = useState('text-animate');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLetterClass('text-animate-hover');
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const renderProjects = (projects) => {
//     return (
//       <div className="projects-grid">
//         {projects.map((proj) => (
//           <div key={proj.id} className="project-card">
//             <div className="project-image-container">
//               <img src={proj.image} alt={proj.title} className="project-image" />
//             </div>
//             <div className="project-content">
//               <h3 className="project-title">{proj.title}</h3>
//               <div className="project-tags">
//                 {proj.tags.map((tag, i) => (
//                   <span key={i} className="tag">{tag}</span>
//                 ))}
//               </div>
//               <p className="project-description">{proj.description}</p>
//               <div className="project-links">
//                 <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="project-button">
//                   <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
//                 </a>
//                 <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button">
//                   <FontAwesomeIcon icon={faGithub} /> GitHub
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <>
//       <div className="container projects-page">
//         <div className="text-zone">
//           <h1>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={'My Projects'.split('')}
//               idx={15}
//             />
//           </h1>
//           {renderProjects(projectsData)}
//         </div>
//       </div>
//       <Loader type="pacman" />
//     </>
//   );
// };

// export default Projects;

// import React, { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
// import AnimatedLetters from '../AnimatedLetters';
// import './index.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  const renderProjects = (projects) => {
    return (
      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <div className="project-image-container">
              <img src={proj.image} alt={proj.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{proj.title}</h3>
              <div className="project-tags">
                {proj.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <p className="project-description">{proj.description}</p>
              <div className="project-links">
                <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                </a>
                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'My Experience'.split('')}
              idx={15}
            />
          </h1>
          {renderProjects(projectsData)}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;