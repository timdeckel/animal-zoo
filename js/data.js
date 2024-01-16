// Animal constructor function
function Animal(name, lifespan, group, food, description, length, weight, found, image) {
  this.name = name;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.description = description;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.image = image;
}

// Animal objects
const echidna = new Animal(
  "Echidna",
  "50 years",
  "mammals",
  "insects such as ants and termites, beetle larvae and worms",
  "Echidnas, also called spiny anteaters, are walking contradictions...",
  "76cm",
  "10kg",
  "Throughout Australia",
  "./img/echidna.jpeg"
);

const frillNeckedLizard = new Animal(
  "Frill-necked Lizard",
  "20 years",
  "reptile",
  "Small insects and spiders",
  "When this unique creature feels threatened, it rises on its hind legs...",
  "90cm",
  "1kg",
  "Northern Australia",
  "./img/frillNeckedLizard.jpeg"
);

const cassowary = new Animal(
  "Cassowary",
  "20 years",
  "bird",
  "Plants matter like fruit, insects and small animals like mice and lizards",
  "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors...",
  "1.7m",
  "44kg",
  "Queensland",
  "./img/cassowary.webp"
);

// More animals
const dolphin = new Animal(
  "Dolphin",
  "25 years",
  "mammals",
  "Fish and squid",
  "Dolphins are highly intelligent marine mammals and are part of the toothed whales family...",
  "3m",
  "200kg",
  "Oceans worldwide",
  "./img/dolphin.jpeg"
);

const giraffe = new Animal(
  "Giraffe",
  "25 years",
  "mammals",
  "Leaves, fruits, and flowers",
  "The giraffe is the world’s tallest land animal, and it has a long neck and legs...",
  "5.5m",
  "800kg",
  "Africa, primarily in savannas and open woodlands",
  "./img/giraffe.jpeg"
);

const eagle = new Animal(
  "Eagle",
  "20 years",
  "birds",
  "Small mammals and birds",
  "Eagles are large, powerfully built birds of prey known for their impressive size and strength...",
  "2.3m",
  "6kg",
  "Found on every continent",
  "./img/eagle.webp"
);

const penguin = new Animal(
  "Penguin",
  "20 years",
  "birds",
  "Fish and squid",
  "Penguins are flightless birds adapted for life in the water. They are excellent swimmers...",
  "1m",
  "40kg",
  "Southern Hemisphere, especially Antarctica",
  "./img/penguin.jpeg"
);

const snake = new Animal(
  "Snake",
  "15-25 years",
  "reptile",
  "Rodents, birds, and eggs",
  "Snakes are elongated, legless, carnivorous reptiles. They are found on every continent except Antarctica...",
  "Varies",
  "Varies",
  "Found worldwide in various habitats",
  "./img/snake.jpeg"
);

const turtle = new Animal(
  "Turtle",
  "80-150 years",
  "reptile",
  "Vegetation, small invertebrates, and fish",
  "Turtles are characterized by a bony or cartilaginous shell that shields them from predators...",
  "Varies",
  "Varies",
  "Found in oceans, freshwater, and on land worldwide",
  "./img/turtle.jpeg"
);

// Animals array
const animals = [
  echidna,
  frillNeckedLizard,
  cassowary,
  dolphin,
  giraffe,
  eagle,
  penguin,
  snake,
  turtle,
];

// Test: Log the animals array
console.log(animals);

// image test codu
// document.querySelector(".test").innerHTML = animals
//   .map((animal) => {
//     return `
//     <img src="${animal.image}" alt="${animal.name}">
//     `;
//   })
//   .join("");
