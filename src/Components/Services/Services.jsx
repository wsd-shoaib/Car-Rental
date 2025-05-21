import React from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaStreetView } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import "./Services.css";

const servicesData = [
  {
    icon: <IoPricetagsOutline className="card-icon" />,
    title: "Best Price",
    desc: "We provide the best pricing packages for all our car rental services.",
  },
  {
    icon: <FaStreetView className="card-icon" />,
    title: "Fast & Safe",
    desc: "Experience fast and secure car rentals with top-rated drivers.",
  },
  {
    icon: <FaScrewdriverWrench className="card-icon" />,
    title: "Experienced Drivers",
    desc: "Our drivers are trained, certified, and have years of experience.",
  },
];

const Services = () => {
  return (
    <section className="service-area" id="services">
      <div className="service-header">
        <h2>Why Choose Us</h2>
        <p>Here’s why our car rental service stands out from the rest.</p>
      </div>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div className="card" key={index}>
            {service.icon}
            <h5>{service.title}</h5>
            <p>{service.desc}</p>
            <span className="learn-more">Learn more</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
