const mainMammalsList = document.querySelector(".main-mammals-list");
const mainBirdsList = document.querySelector(".main-birds-list");
const mainReptilesList = document.querySelector(".main-reptiles-list");
const mainAnimalsList = document.querySelector(".main-animals-list");

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
                    <li class="main-animal">${animal.name}</li>
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
        ${mammalsAnimals
          .map((animal) => {
            return `
                    <li class="main-animal">${animal.name}</li>
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
        ${mammalsAnimals
          .map((animal) => {
            return `
                    <li class="main-animal">${animal.name}</li>
                    `;
          })
          .join("")}
        `;
  mainReptilesList.innerHTML = elementsRaptiles;
};

createAnimalsSidebar();
