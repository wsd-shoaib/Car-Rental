import "./Hero.css";

const Hero = ({ theme }) => {
  return (
    <section id="home">
      <div className="hero-area">
        <div className="banner" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src={
              theme === "dark"
                ? "./assets/Tuning-Car-PNG-Photo.png"
                : "./assets/purepng.com-mclaren-650s-gt3-yellow-race-carcarvehicletransportmclarenrace-car-961524644630j4tgq.png"
            }
            alt=""
          />
        </div>
        <div className="hero-title" data-aos="fade-up" data-aos-duration="1100">
          <h5>Effortless</h5>
          <h1>Car Rental</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ullam
            magnam blanditiis minima consequuntur culpa. Lorem ipsum dolor sit
            amet.
          </p>
          <button className="me-2">
            <a href="#booking">Get Started</a>
          </button>
          <button>
            <a href="#services"> View Services</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
