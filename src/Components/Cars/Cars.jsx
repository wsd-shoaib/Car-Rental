import "./Cars.css";

const carsData = [
  {
    id: 1,
    name: "Toyota Corolla",
    price: "$40/day",
    image: "assets/hq720.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    price: "$45/day",
    image: "assets/Honda_Civic_Type_R_(FK;_France)_front_view.jpg",
  },
  {
    id: 3,
    name: "BMW X5",
    price: "$90/day",
    image: "assets/2025-BMW-X5-Edition-25-Jahre-6.jpg",
  },
  {
    id: 4,
    name: "Tesla Model 3",
    price: "$100/day",
    image: "assets/tesla-model-3-2.jpg",
  },
];

const Cars = () => {
  return (
    <div className="cars-section" id="cars">
      <h2 className="section-title">Available Cars</h2>
      <div className="cars-grid">
        {carsData.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h4>{car.name}</h4>
            <p>{car.price}</p>
            <a href="#booking" className="book-btn text-decoration-none">
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
