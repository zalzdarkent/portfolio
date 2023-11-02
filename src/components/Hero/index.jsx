import HeroBanner from '../../assets/images/hero-banner.png'
import HeroBannerMd from '../../assets/images/hero-banner-md.png'
import HeroBannerSm from '../../assets/images/hero-banner-sm.png'

const index = () => {
  return (
    <main>
      <article className="container">
        <section className="hero" id="home">
          <figure className="hero-banner">
            <picture>
              <source
                srcSet={HeroBanner}
                media="(min-width: 768px)"
              />
              <source
                srcSet={HeroBannerMd}
                media="(min-width: 500px)"
              />
              <img
                src={HeroBannerSm}
                alt="A man in a blue shirt with a happy expression"
                className="w-100"
              />
            </picture>
          </figure>
          <div className="hero-content">
            <h2 className="h2 hero-title">
              We Design &amp; Build Creative Products
            </h2>
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
          </div>
          <ul className="hero-social-list">
            <li>
              <a href="#" className="hero-social-link">
                <ion-icon name="logo-facebook" />
                <div className="tooltip">Facebook</div>
              </a>
            </li>
            <li>
              <a href="#" className="hero-social-link">
                <ion-icon name="logo-twitter" />
                <div className="tooltip">Twitter</div>
              </a>
            </li>
            <li>
              <a href="#" className="hero-social-link">
                <ion-icon name="logo-linkedin" />
                <div className="tooltip">Linkedin</div>
              </a>
            </li>
          </ul>
          <a href="#stats" className="scroll-down">
            Scroll
          </a>
        </section>
      </article>
    </main>
  );
};

export default index;
