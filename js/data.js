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
  "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus",
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
  "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
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
  "birds",
  "Plants matter like fruit, insects and small animals like mice and lizards",
  "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
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
  "The dolphin, an intelligent and social marine mammal, inhabits warm and temperate waters worldwide. Known for its powerful fins and distinctive smile, dolphins exhibit acrobatic movements underwater and often leap playfully at the surface. They are highly social, living in groups, and communicate through various sounds and body language.",
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
  "./img/giraffe.jpeg",
  false
);

const eagle = new Animal(
  "6",
  "Eagle",
  "20 years",
  "birds",
  "Small mammals and birds",
  "The eagle, a majestic bird of prey, commands the skies with its keen vision and powerful wings. Symbolizing freedom and strength, eagles are known for their impressive hunting prowess. Their sharp talons and beaks enable them to capture a diverse range of prey, showcasing their role as apex predators.",
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
  "The snake, a fascinating reptile, slithers silently through diverse habitats across the globe. With its unique scales and limbless body, the snake has adapted to various environments, from lush jungles to arid deserts. Despite their often misunderstood reputation, snakes play a vital role in maintaining ecological balance.",
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
let animals = [
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
