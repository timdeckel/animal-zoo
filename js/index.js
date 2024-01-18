const mainMammalsList = document.querySelector(".main-mammals-list");
const mainBirdsList = document.querySelector(".main-birds-list");
const mainReptilesList = document.querySelector(".main-reptiles-list");
const mainAnimalsList = document.querySelector(".main-animals-list");
const mainAnimalMain = document.querySelector(".main-animal-main");

const createAnimalsSidebar = () => {
  //Mammals animals rendering
  const mammalsAnimals = animals.filter((animal) => animal.group == "mammals");
  const elementsMammals = `
        <h3 class="group-name">${
          mammalsAnimals[0].group.charAt(0).toUpperCase() + mammalsAnimals[0].group.slice(1)
        }</h3>
        ${mammalsAnimals
          .map((animal) => {
            return `
                    <li onclick="displayAnimalDescreption(${animal.id})" class="main-animal active-${animal.id}">${animal.name}</li>
                    `;
          })
          .join("")}
        `;
  mainMammalsList.innerHTML = elementsMammals;

  //Birds animals rendering
  const birdsAnimals = animals.filter((animal) => animal.group == "birds");
  const elementsBirds = `
        <h3 class="group-name">${
          birdsAnimals[0].group.charAt(0).toUpperCase() + birdsAnimals[0].group.slice(1)
        }</h3>
        ${birdsAnimals
          .map((animal) => {
            return `
                    <li onclick="displayAnimalDescreption(${animal.id})" class="main-animal active-${animal.id}">${animal.name}</li>
                    `;
          })
          .join("")}
        `;
  mainBirdsList.innerHTML = elementsBirds;

  //Reptile animals rendering
  const raptilesAnimals = animals.filter((animal) => animal.group == "reptile");
  const elementsRaptiles = `
        <h3 class="group-name">${
          raptilesAnimals[0].group.charAt(0).toUpperCase() + raptilesAnimals[0].group.slice(1)
        }</h3>
        ${raptilesAnimals
          .map((animal) => {
            return `
                    <li onclick="displayAnimalDescreption(${animal.id})" class="main-animal active-${animal.id}">${animal.name}</li>
                    `;
          })
          .join("")}
        `;
  mainReptilesList.innerHTML = elementsRaptiles;
};

createAnimalsSidebar();

// Function that render selected animal
const displayAnimalDescreption = (pId) => {
  const selectedAnimal = animals.filter((animal) => animal.id == pId);
  animals
    // .filter((animal) => animal.group == "mammals")
    .filter((animal) => animal.id != pId)
    .forEach((animal) => (animal.isActive = false));

  selectedAnimal[0].isActive = !selectedAnimal[0].isActive;
  if (!selectedAnimal[0].isActive) {
    mainAnimalMain.innerHTML = `
        <p class="mammals-page-message">
          Here you can find information about animals. 
        </p>
        `;
  } else {
    mainAnimalMain.innerHTML = `
              <p class="animal-description"><b>${selectedAnimal[0].name}:</b> ${selectedAnimal[0].description}</p>
        `;
  }

  const clickedElement = document.querySelector(`.active-${pId}`);
  const unClickElements = document.querySelectorAll(".main-animal");

  unClickElements.forEach((element) => {
    element.classList.remove("active-list-element");
  });
  clickedElement.classList.add("active-list-element");
};
