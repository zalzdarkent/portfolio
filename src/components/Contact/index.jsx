const index = () => {
  return (
    <main>
      <article className="container">
        <section className="contact" id="contact">
          <div className="contact-content section-content">
            <p className="section-subtitle">Contact</p>
            <h2 className="h3 section-title">
              Have You Any Project? Please Drop a Message
            </h2>
            <p className="section-text">
              Get in touch and let me know how i can help. Fill out the form and
              i’ll be in touch as soon as possible.
            </p>
            <ul className="contact-list">
              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <ion-icon name="location-outline" />
                </div>
                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Address:</h3>
                  <address className="contact-info">
                    941 Saqrqorish Road, alandalos, grnata, wa 47122-4194
                  </address>
                </div>
              </li>
              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <ion-icon name="call-outline" />
                </div>
                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Phone:</h3>
                  <a href="tel:01234567789" className="contact-info">
                    (01) 234 567 789
                  </a>
                  <a href="tel:09765432200" className="contact-info">
                    (09) 765 432 200
                  </a>
                </div>
              </li>
              <li className="contact-list-item">
                <div className="contact-item-icon">
                  <ion-icon name="mail-outline" />
                </div>
                <div className="wrapper">
                  <h3 className="h4 contact-item-title">Email:</h3>
                  <a href="mailto:info@jack.com" className="contact-info">
                    info@jack.com
                  </a>
                  <a href="mailto:support@jack.com" className="contact-info">
                    support@jack.com
                  </a>
                </div>
              </li>
              <li>
                <ul className="contac-social-list">
                  <li>
                    <a href="#" className="contact-social-link">
                      <div className="tooltip">Facebook</div>
                      <ion-icon name="logo-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="contact-social-link">
                      <div className="tooltip">Twitter</div>
                      <ion-icon name="logo-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="contact-social-link">
                      <div className="tooltip">Linkedin</div>
                      <ion-icon name="logo-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="contact-social-link">
                      <div className="tooltip">Youtube</div>
                      <ion-icon name="logo-youtube" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form
            action="client/client.php"
            method="post"
            className="contact-form"
          >
            <div className="form-wrapper">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="e.g John Doe"
                  className="input-field"
                />
                <ion-icon name="person-circle" />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="e.g johndoe@mail.com"
                  className="input-field"
                />
                <ion-icon name="mail" />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <div className="input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  placeholder="Phone Number"
                  className="input-field"
                />
                <ion-icon name="call" />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <div className="input-wrapper">
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Write message..."
                  className="input-field"
                  defaultValue={""}
                />
                <ion-icon name="chatbubbles" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </section>
      </article>
    </main>
  );
};

export default index;
