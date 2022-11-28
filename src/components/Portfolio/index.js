import Loader from 'react-loaders'
import './index.scss'

const Portfolio = () => {
  return (
    <>
      <div className="container contact-page">
        <h2 style={{ color: '#ffd700' }}>Work Experience</h2>

        <ul className="timeline">
          <li style={{ marginLeft: '10%', width: '40%' }}>
            {/* <div className="timeline-badge">
            <a>
              <i class="fa fa-circle" id=""></i>
            </a>
          </div> */}
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>UI Developer - MERCK [ consultant]</h4>
              </div>
              <div className="timeline-body">
                <ul style={{ padding: '0 40px' }}>
                  <li>[ consultant ] UI Developer at Merck Group</li>
                  <li>
                    Skills: scss · Jest · Bootstrap · SASS · JavaScript · HTML5
                    · React.js · Redux.js · Cascading Style Sheets (CSS) ·
                    TypeScript
                  </li>
                </ul>
              </div>
              <div className="timeline-footer">
                <p className="text-right">OCTOBER 2014 - PRESENT</p>
              </div>
            </div>
          </li>

          <li
            className="timeline-inverted"
            style={{ marginRight: '5%', width: '45%', marginTop: '113px' }}
          >
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Web Developer - Msys Technologies</h4>
              </div>
              <div className="timeline-body">
                <ul style={{ padding: '0 40px' }}>
                  <li>
                    Developing trading Application via emerging Front-End
                    Technologies such as React.js, Redux, Typescript,
                    JavaScript, HTML, CSS, Jira, Git, Redux
                  </li>
                  <li>
                    Collaborated with teammates to deliver valuable features
                    following coding standards, testing and deploying.
                  </li>
                  <li>
                    Developing trading Application via emerging Front-End
                    Technologies such as React.js, Redux, Typescript,
                    JavaScript, HTML, CSS, Jira, Git,
                  </li>
                  <li>
                    Collaborated with teammates to deliver valuable features
                    following coding standards, testing and deploying. Skills:
                    HTML · Jira · Agile Methodologies · JavaScript · React.js ·
                    Cascading Style Sheets (CSS) · Python (Programming Language)
                    · TypeScript · Git ·
                  </li>
                </ul>
              </div>
              <div className="timeline-footer">
                <p className="text-right">Feb 2021 - Aug 2022 · 1 yr 7 mos</p>
              </div>
            </div>
          </li>

          <li style={{ marginLeft: '10%', width: '40%', marginTop: '90px' }}>
            {/* <div className="timeline-badge">
            <a>
              <i className="fa fa-circle" id=""></i>
            </a>
          </div> */}
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Web Developer Intern - Msys Technologies</h4>
              </div>
              <div className="timeline-body">
                <p>
                  Developed user interfaces with modern JavaScript frameworks
                  like React.js and JavaScript, HTML5, CSS3.
                </p>

                <ul style={{ padding: '0 40px' }}>
                  <li>
                    Utilized final semester internship program, which enables
                    final semester students to do internship before graduation.
                  </li>
                  {/* <li>
                  Maintained and continually enhanced intranet web sites without
                  management supervision. Refreshed the looks and recreated some
                  of the training web sites, since old technology was used and
                  outdated data was implemented.
                </li>
                <li>Wrote and published weekly newsletters action updates.</li> */}
                </ul>
              </div>
              <div className="timeline-footer">
                <p className="text-right">Sep 2020 - Feb 2021 · 6 mos</p>
              </div>
            </div>
          </li>

          <li className="clearfix no-float"></li>
        </ul>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
