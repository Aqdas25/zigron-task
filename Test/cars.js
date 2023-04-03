import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";

chai.should();
chai.use(chaiHttp);

describe("Cars API", () => {
  // Test the GET route
  describe("GET /cars", () => {
    it("It should GET all the cars", (done) => {
      chai
        .request(app)
        .get("/cars")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.not.be.eq(0); // assuming there are two cars in the initial array
          done();
        });
    });
  });
  // Test the POST route
  describe("POST /cars", () => {
    it("It should POST a new car", (done) => {
      const car = {
        Car: "Civic",
        PersonName: "Ali",
        lat: 31.5204,
        long: 74.3587,
      };
      chai
        .request(app)
        .post("/cars")
        .send(car)
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.a("string");
          res.text.should.contain(
            `Accident Occured of ${car.PersonName} added to the database`
          );
          done();
        });
    });
  });
});
