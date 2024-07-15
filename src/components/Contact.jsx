import tg from "@i/tgg.svg";
import facebook from "@i/facebook.svg";
import insta from "@i/insta.svg";
function Contact() {
  return (
    <section id="contact">
      <div className="contact__content">
        <div className="contact__info">
          <h2 className="section__title">Panto</h2>
          <p className="section__info">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
        <div className="contact__extra">
        <div className="services">
          <h3 className="services__title">Services</h3>
          <p className="services__info">Email Marketing</p>
          <p className="services__info">Campaigns</p>
          <p className="services__info">Branding</p>
        </div>
        <div className="follow">
          <h3 className="follow__title">Follow Us</h3>
          <div class="footer__item">
            <img src={tg} alt="" />
            <p className="text">Telegram</p>
          </div>
          <div class="footer__item">
            <img src={facebook} alt="" />
            <p className="text">Facebook</p>
          </div>
          <div class="footer__item">
            <img src={insta} alt="" />
            <p className="text">Instagram</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
