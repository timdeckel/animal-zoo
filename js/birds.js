const birdAnimalsList = document.querySelector(".birds-list");
const birdsMain = document.querySelector(".birds-main");

let isActive = false;

// Function that prints incoming data into html elements
const displayAnimal = (pId) => {
  const selectedAnimal = animals.filter((animal) => animal.id == pId);
  animals
    .filter((animal) => animal.group == "birds")
    .filter((animal) => animal.id != pId)
    .forEach((animal) => (animal.isActive = false));
  selectedAnimal[0].isActive = !selectedAnimal[0].isActive;

  if (!selectedAnimal[0].isActive) {
    birdsMain.innerHTML = `
        <p class="birds-page-message">
        Here you can find information about birds. Please select the animal you want to examine from the menu on the left.
        </p>
        `;
  } else {
    birdsMain.innerHTML = `
          <div class="card">
            <img
              class="card-img"
              src="${selectedAnimal[0].image}"
              alt="${selectedAnimal[0].name}"
            />
            <div class="card-body">
              <p class="animal-description"><b>Definition:</b> ${
                selectedAnimal[0].description.length <= 200
                  ? selectedAnimal[0].description
                  : selectedAnimal[0].description.substring(0, 200) + "..."
              }</p>
            </div>
            <div class="card-footer">
              <p class="img-owner"><b>Lifespan:</b> ${selectedAnimal[0].lifespan}</p>
              <p class="img-owner-insta"><b>Food</b>  ${selectedAnimal[0].food}</p>
              <p class="img-owner-total-photos"><b>Lengt:</b> ${selectedAnimal[0].length}</p>
              <p class="img-info"><b>Weight: </b>  ${selectedAnimal[0].weight}</p>
              <p class="img-info"><b>Found: </b>  ${selectedAnimal[0].found}</p>
            </div>
          </div>
        `;
  }
  const clickedElement = document.querySelector(`.active-${pId}`);
  const unClickElements = document.querySelectorAll(".birds-animal-li");

  unClickElements.forEach((element) => {
    element.classList.remove("active-list-element");
  });
  clickedElement.classList.add("active-list-element");
};

const createBirdsSideBar = () => {
  const birdsAnimal = animals.filter((animal) => animal.group == "birds");

  birdAnimalsList.innerHTML = birdsAnimal
    .map((animal) => {
      return `
        
          <li onclick="displayAnimal(${animal.id})" class="birds-animal-li active-${animal.id}">${animal.name}</li>
        
        `;
    })
    .join("");
};

createBirdsSideBar();
