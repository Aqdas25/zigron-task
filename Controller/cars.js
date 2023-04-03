// Cars Array
const cars = [
  {
    Car: "Corolla",
    PersonName: "Ayesha",
    lat: 33.6844,
    long: 73.0479,
  },
  {
    Car: "Mehran",
    PersonName: "Sana",
    lat: 39.6844,
    long: 74.0479,
  },
];

// function to get all Cars
export const getCars = (req, res) => {
  res.send(cars);
};

// function to post a new data
export const create = (req, res) => {
  const car = req.body;
  cars.push(car);
  res.send(`Accident Occured of ${car.PersonName} added to the database`);
};
