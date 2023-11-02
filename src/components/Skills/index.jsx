import html from '../../assets/images/html5.png'
import css from '../../assets/images/css3.png'
import js from '../../assets/images/javascript.png'
import ts from '../../assets/images/typescript.png'
import jquery from '../../assets/images/jquery.png'
import bootstrap from '../../assets/images/bootstrap.png'
import react from '../../assets/images/react.png'
import git from '../../assets/images/git.png'
import sass from '../../assets/images/sass.png'
import npm from '../../assets/images/npm.png'
import cmd from '../../assets/images/command.png'
import vscode from '../../assets/images/vs-code.png'
import trello from '../../assets/images/trello.png'
import clickup from '../../assets/images/clickup.png'
import slack from '../../assets/images/slack.png'
import ps from '../../assets/images/photoshop.png'
import xd from '../../assets/images/adobe-xd.png'


const index = () => {
  return (
    <main>
      <article className="container">
        <section className="skills" id="skills">
          <div className="skills-content section-content">
            <p className="section-subtitle">My skills</p>
            <h2 className="h3 section-title">
              What My Programming Skills Included?
            </h2>
            <p className="section-text">
              I develop simple, intuitive and responsive user interface that
              helps users get things done with less effort and time with those
              technologies.
            </p>
            <div className="skills-toggle" data-toggle-box>
              <button className="toggle-btn active" data-toggle-btn>
                Skills
              </button>
              <button className="toggle-btn" data-toggle-btn>
                Tools
              </button>
            </div>
          </div>
          <div className="skills-box" data-skills-box>
            <ul className="skills-list">
              <li>
                <div className="skill-card">
                  <div className="tooltip">HTML5</div>
                  <div className="card-icon">
                    <img src={html} alt="HTML5 logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">CSS3</div>
                  <div className="card-icon">
                    <img src={css} alt="CSS3 logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">JavaScript</div>
                  <div className="card-icon">
                    <img
                      src={js}
                      alt="JavaScript logo"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">TypeScript</div>
                  <div className="card-icon">
                    <img
                      src={ts}
                      alt="TypeScript logo"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">jQuery</div>
                  <div className="card-icon">
                    <img src={jquery} alt="jQuery logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Bootstrap</div>
                  <div className="card-icon">
                    <img
                      src={bootstrap}
                      alt="Bootstrap logo"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">React</div>
                  <div className="card-icon">
                    <img src={react} alt="React logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">SASS</div>
                  <div className="card-icon">
                    <img src={sass} alt="SASS logo" />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="tools-list">
              <li>
                <div className="skill-card">
                  <div className="tooltip">Git</div>
                  <div className="card-icon">
                    <img src={git} alt="Git logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Npm</div>
                  <div className="card-icon">
                    <img src={npm} alt="Npm logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Command Line</div>
                  <div className="card-icon">
                    <img
                      src={cmd}
                      alt="Command Line logo"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">VS Code</div>
                  <div className="card-icon">
                    <img src={vscode} alt="VS Code logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Trello</div>
                  <div className="card-icon">
                    <img src={trello} alt="Trello logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">ClickUp</div>
                  <div className="card-icon">
                    <img src={clickup} alt="ClickUp logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Slack</div>
                  <div className="card-icon">
                    <img src={slack} alt="Slack logo" />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Photoshop</div>
                  <div className="card-icon">
                    <img
                      src={ps}
                      alt="Photoshop logo"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="skill-card">
                  <div className="tooltip">Adobe XD</div>
                  <div className="card-icon">
                    <img
                      src={xd}
                      alt="Adobe XD logo"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
};

export default index;
