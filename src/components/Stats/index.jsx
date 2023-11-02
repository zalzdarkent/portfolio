import {  IoIosArrowForward  } from "react-icons/io";
import stats1 from '../../assets/images/stats-card_icon-1.png'
import stats2 from '../../assets/images/stats-card_icon-2.png'
import stats3 from '../../assets/images/stats-card_icon-3.png'
const index = () => {
  return (
    <main>
      <article className="container">
        <section className="stats" id="stats">
          <ul className="stats-list">
            <li>
              <a href="#" className="stats-card">
                <div className="card-icon">
                  <img
                    src={stats1}
                    alt="Badge icon"
                  />
                </div>
                <h2 className="h2 card-title">
                  12+ <strong>Years of Experience</strong>
                </h2>
                <IoIosArrowForward />
              </a>
            </li>
            <li>
              <a href="#" className="stats-card">
                <div className="card-icon">
                  <img
                    src={stats2}
                    alt="Checkmark icon"
                  />
                </div>
                <h2 className="h2 card-title">
                  230+ <strong>Completed Projects</strong>
                </h2>
                <IoIosArrowForward/>
              </a>
            </li>
            <li>
              <a href="#" className="stats-card">
                <div className="card-icon">
                  <img
                    src={stats3}
                    alt="Peoples rating icon"
                  />
                </div>
                <h2 className="h2 card-title">
                  95+ <strong>Happy Clients</strong>
                </h2>
                <IoIosArrowForward/>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
};

export default index;
