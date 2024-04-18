import Car from "./car.js";
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

// Hello route
fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

// Car creation route
fastify.post("/car", (request, reply) => {
  const { year, price, color, brand } = request.body;

  // Create a new car object
  const car = new Car(year, price, color, brand);

  // Send the car object as a response
  reply.send(car);
});

// Pet creation route
// This route is supposed to have an error while creating a pet because the Pet class is not imported
fastify.post("/pet", (request, reply) => {
  const { name, breed, age } = request.body;

  // Create a new pet object
  const pet = new Pet(name, brand, age);

  // Send the pet object as a response
  reply.send(pet);
});

// Run the server!
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) throw err;
  // Server is now listening on ${address}
});
