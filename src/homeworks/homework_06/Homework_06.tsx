import { v4 } from "uuid";
import "./styles.css";
// const cars = [
//   { brand: "BMW", price: 20000, isDiesel: true },
//   { brand: "Mercedes", price: 22000, isDiesel: false },
//   { brand: "Porshe", price: 50000, isDiesel: true },
//   { brand: "Nissan", price: 25000, isDiesel: false },
//   { brand: "Audi", price: 50000, isDiesel: true },
// ];

function Homework_06() {
  interface Car {
    image: string;
    brand: string;
    price: number;
    isDiesel: boolean;
  }

  const cars: Car[] = [
    {
      image: "https://kimuracars.com/ifiles/cars_logos/bmw.jpg",
      brand: "BMW",
      price: 20000,
      isDiesel: true,
    },
    {
      image: "https://kimuracars.com/ifiles/cars_logos/mercedes-benz.jpg",
      brand: "Mercedes",
      price: 22000,
      isDiesel: false,
    },
    {
      image: "https://kimuracars.com/ifiles/cars_logos/porsche.jpg",
      brand: "Porshe",
      price: 50000,
      isDiesel: true,
    },
    {
      image: "https://kimuracars.com/ifiles/articles/046/nissan-2s.jpg",
      brand: "Nissan",
      price: 25000,
      isDiesel: false,
    },
    {
      image: "https://kimuracars.com/ifiles/cars_logos/audi.jpg",
      brand: "Audi",
      price: 50000,
      isDiesel: true,
    },
  ];
  const carCards = cars.map((cars: Car) => {
    return (
      <div className="auto_card" key={v4()}>
        <div className="img">
          <img src={cars.image} />
        </div>
        <div className="info">
          <p> Brand: {cars.brand} </p>
          <p>Price: {cars.price} </p>
          <p> Engine: {cars.isDiesel ? "Disel" : "noDisel"}</p>
        </div>
      </div>
    );
  });
  return <div className="homework_06_wrapper">{carCards}</div>;
}
export default Homework_06;
