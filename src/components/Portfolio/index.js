// import React, { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
// import AnimatedLetters from '../AnimatedLetters';
// import './index.scss';

// const Portfolio = () => {
//   const [letterClass, setLetterClass] = useState('text-animate');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLetterClass('text-animate-hover');
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <div className="container portfolio-page">
//         <div className="text-zone">
//           <h1>
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={'My Experience'.split('')}
//               idx={15}
//             />
//           </h1>
//           <div className="experience-container">
//             {/* --- Experience Item 1 --- */}
//             <div className="experience-item">
//               <h3 className="job-title">Senior Software Engineer</h3>
//               <h4 className="company-details">
//                 Tech Solutions Inc. | Jan 2022 - Present
//               </h4>
//               <ul>
//                 <li>
//                   Led the development of scalable web applications using React,
//                   Node.js, and GraphQL.
//                 </li>
//                 <li>
//                   Mentored a team of 4 junior developers and enforced
//                   best practices in software engineering.
//                 </li>
//                  <li>
//                   Collaborated with product managers and designers to translate
//                   requirements into technical solutions.
//                 </li>
//               </ul>
//             </div>

//             {/* --- Experience Item 2 --- */}
//             <div className="experience-item">
//               <h3 className="job-title">Mid-Level Frontend Developer</h3>
//               <h4 className="company-details">
//                 Innovate Web Co. | Jun 2019 - Dec 2021
//               </h4>
//               <ul>
//                 <li>
//                   Developed features for high-traffic websites using Angular and Vue.js.
//                 </li>
//                 <li>
//                   Improved website performance by optimizing assets, reducing load times by 30%.
//                 </li>
//                  <li>
//                   Worked with the QA team to identify and resolve bugs.
//                 </li>
//               </ul>
//             </div>

//             {/* --- Experience Item 3 --- */}
//             <div className="experience-item">
//               <h3 className="job-title">Junior Developer</h3>
//               <h4 className="company-details">
//                 Digital Starters LLC | May 2018 - May 2019
//               </h4>
//               <ul>
//                 <li>
//                   Assisted in the development of client websites using HTML, CSS, and jQuery.
//                 </li>
//                 <li>
//                   Gained experience with Git and agile development methodologies.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Loader type="pacman" />
//     </>
//   );
// };

// export default Portfolio;
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
          <div className="experience-container">
            {/* --- Experience Item 1 --- */}
            <div className="experience-item">
              <h3 className="job-title">UI Specialist</h3>
              <h4 className="company-details">
                Yash Technologies | Aug 2022 - Aug 2024
              </h4>
              <ul>
                <li>
                  Developed responsive SPAs using React.js, Next.js, & Tailwind CSS, consuming RESTful APIs and collaborating with backend (Node.js/Express) teams.
                </li>
                <li>
                  Wrote comprehensive unit tests for React components using Jest following TDD practices, improving service reliability and achieving a 15% increase in code coverage.
                </li>
                 <li>
                  Led the integration of advanced data visualization components, architecting and building reusable frontend component libraries to enhance user engagement.
                </li>
                 <li>
                  Enhanced application accessibility by implementing WCAG standards and ensured robust cross-browser compatibility, resulting in a 30% increase in usability.
                </li>
                <li>
                  Engineered and implemented sophisticated state management solutions (e.g., Redux, Context API) for complex SPAs, significantly improving data flow consistency.
                </li>
                <li>
                  Drove client-side performance improvements via code splitting and lazy loading, significantly cutting initial load times and enhancing application responsiveness.
                </li>
              </ul>
            </div>

            {/* --- Experience Item 2 --- */}
            <div className="experience-item">
              <h3 className="job-title">UI Developer</h3>
              <h4 className="company-details">
                Msys Technologies | Feb 2021 - Aug 2022
              </h4>
              <ul>
                <li>
                  Engineered 15+ reusable, responsive UI components using React.js and TypeScript, implementing robust state management with Redux which slashed code duplication by 25%.
                </li>
                <li>
                  Played a pivotal role in a 12-member cross-functional Agile/Scrum team, utilizing tools like JIRA for effective task tracking and contributing to on-time delivery of major feature releases.
                </li>
                 <li>
                  Partnered strategically with Node.js backend developers to co-design API contracts and integrate RESTful APIs, ensuring optimal data flow.
                </li>
                 <li>
                  Actively drove software quality by contributing to sprint planning, conducting rigorous code reviews, and leveraging CI/CD pipelines (Webpack, Git).
                </li>
                <li>
                  Translated complex UI/UX design specifications and Figma mockups into pixel-perfect, interactive React.js applications.
                </li>
              </ul>
            </div>

            {/* --- Experience Item 3 --- */}
            <div className="experience-item">
              <h3 className="job-title">UI Developer Intern</h3>
              <h4 className="company-details">
                Msys Technologies | Feb 2020 - Jan 2021
              </h4>
              <ul>
                <li>
                  Developed and optimized frontend components for performance, achieving a 15% improvement in average page load speed and successfully integrating APIs.
                </li>
                <li>
                  Collaborated with UX/UI teams, translating over 10+ Figma designs into responsive and dynamic web interfaces using React.js and TypeScript.
                </li>
                <li>
                  Assisted senior developers in unit testing for React components, gaining hands-on experience in modern frontend development and testing practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;