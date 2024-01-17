// Animal constructor function
function Animal(
  id,
  name,
  lifespan,
  group,
  food,
  description,
  length,
  weight,
  found,
  image,
  isActive
) {
  this.id = id;
  this.name = name;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.description = description;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.image = image;
  this.isActive = isActive;
}

// Animal objects
const echidna = new Animal(
  "1",
  "Echidna",
  "50 years",
  "mammals",
  "insects such as ants and termites, beetle larvae and worms",
  "Echidnas, also called spiny anteaters, are walking contradictions...",
  "76cm",
  "10kg",
  "Throughout Australia",
  "./img/echidna.jpeg",
  false
);

const frillNeckedLizard = new Animal(
  "2",
  "Frill-necked Lizard",
  "20 years",
  "reptile",
  "Small insects and spiders",
  "When this unique creature feels threatened, it rises on its hind legs...",
  "90cm",
  "1kg",
  "Northern Australia",
  "./img/frillNeckedLizard.jpeg",
  false
);

const cassowary = new Animal(
  "3",
  "Cassowary",
  "20 years",
  "bird",
  "Plants matter like fruit, insects and small animals like mice and lizards",
  "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors...",
  "1.7m",
  "44kg",
  "Queensland",
  "./img/cassowary.webp",
  false
);

// More animals
const dolphin = new Animal(
  "4",
  "Dolphin",
  "25 years",
  "mammals",
  "Fish and squid",
  "Dolphins are highly intelligent marine mammals and are part of the toothed whales family...",
  "3m",
  "200kg",
  "Oceans worldwide",
  "./img/dolphin.jpeg",
  false
);

const giraffe = new Animal(
  "5",
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
  "6",
  "Eagle",
  "20 years",
  "birds",
  "Small mammals and birds",
  "Eagles are large, powerfully built birds of prey known for their impressive size and strength...",
  "2.3m",
  "6kg",
  "Found on every continent",
  "./img/eagle.webp",
  false
);

const penguin = new Animal(
  "7",
  "Penguin",
  "20 years",
  "birds",
  "Fish and squid",
  "Penguins are flightless birds adapted for life in the water. They are excellent swimmers...",
  "1m",
  "40kg",
  "Southern Hemisphere, especially Antarctica",
  "./img/penguin.jpeg",
  false
);

const snake = new Animal(
  "8",
  "Snake",
  "15-25 years",
  "reptile",
  "Rodents, birds, and eggs",
  "Snakes are elongated, legless, carnivorous reptiles. They are found on every continent except Antarctica...",
  "Varies",
  "Varies",
  "Found worldwide in various habitats",
  "./img/snake.jpeg",
  false
);

const turtle = new Animal(
  "9",
  "Turtle",
  "80-150 years",
  "reptile",
  "Vegetation, small invertebrates, and fish",
  "Turtles are characterized by a bony or cartilaginous shell that shields them from predators...",
  "Varies",
  "Varies",
  "Found in oceans, freshwater, and on land worldwide",
  "./img/turtle.jpeg",
  false
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
