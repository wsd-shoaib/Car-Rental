import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-section">
          <h3>CarXpress</h3>
          <p>
            Trusted car rental service with a wide range of vehicles at
            affordable rates. Drive with comfort & confidence, anytime anywhere.
          </p>
          <div className="contact-info">
            <p>
              <FaMapMarkerAlt /> 123 Gulshan, Dhaka
            </p>
            <p>
              <FaPhoneAlt /> +880 1234 567 890
            </p>
            <p>
              <FaEnvelope /> support@carxpress.com
            </p>
          </div>
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#cars">Browse Cars</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#testimonial">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Top Services</h4>
          <ul>
            <li>Hourly Car Rental</li>
            <li>Airport Pickup</li>
            <li>Corporate Rental</li>
            <li>Luxury Cars</li>
            <li>Outstation Trips</li>
          </ul>
        </div>

        {/* Embedded Google Map */}
        <div className="footer-section">
          <h4>Our Location</h4>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.529932784333!2d90.8325468!3d22.9500174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37551fa3dc2c5073%3A0x8c10b05c78c951b0!2sRamgoti%20Road%2C%20Lakshmipur!5e0!3m2!1sen!2sbd!4v1684688542921!5m2!1sen!2sbd"
            width="100%"
            height="220px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CarXpress. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
