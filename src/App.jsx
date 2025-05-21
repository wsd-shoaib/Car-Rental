import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Nevbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AOS, { refresh } from "aos";
import "aos/dist/aos.css";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Cars from "./Components/Cars/Cars";
import BookAppointment from "./Components/BookAppointment/BookAppointment";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <Cars />
      <Testimonials />
      <BookAppointment />
      <Footer />
    </>
  );
}

export default App;
