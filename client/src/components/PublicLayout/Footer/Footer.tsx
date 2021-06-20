import { Link } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
//Components
import SocialIcon from './SocialIcon';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <section className="footer-subscription">
        <h3>Subscribe to our newsletter for the best deals possible</h3>
        <small>You can unsubscribe at any time.</small>
        <form>
          <input
            className="subscribe-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <button>Subscribe</button>
        </form>
      </section>

      <section className="social-media">
        <div className="social-icons">
          <SocialIcon
            url="https://www.facebook.com/"
            icon={<FaFacebookSquare />}
          />
          <SocialIcon
            url="https://www.instagram.com/"
            icon={<FaInstagramSquare />}
          />
          <SocialIcon
            url="https://www.youtube.com/"
            icon={<FaYoutubeSquare />}
          />
          <SocialIcon
            url="https://www.twitter.com/"
            icon={<FaTwitterSquare />}
          />
        </div>
      </section>

      <section className="footer-links">
        <div className="footer-link-items">
          <h2>Shopping</h2>
          <Link to="/">How to buy</Link>
          <Link to="/">Payment Terms</Link>
          <Link to="/">Shipping Costs and Delivery Times</Link>
          <Link to="/">Parcel tracking</Link>
          <Link to="/">Warranty</Link>
        </div>
        <div className="footer-link-items">
          <h2>Contact Us</h2>
          <Link to="/">Contact</Link>
          <Link to="/">Support</Link>
          <p>Phone: 123456789</p>
          <p>
            Email: <a href="mailto:">guitarstore@guitarstore.com</a>
          </p>
        </div>

        <div className="footer-link-items">
          <h2>About Us</h2>
          <Link to="/">Who we are</Link>
          <Link to="/">Terms and Conditions</Link>
          <Link to="/">Carrier</Link>
          <Link to="/">Affiliate</Link>
        </div>
      </section>

      <small>GuitarStore &copy; 2021</small>
      <br />
      <small>
        This is a project site for my portfolio only. The pictures are the
        property of Muziker.hu
      </small>
    </footer>
  );
};

export default Footer;
