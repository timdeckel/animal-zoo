const mammalAnimalsList = document.querySelector(".mammal-animals-list");
const mammalsMain = document.querySelector(".mammals-main");
// const mammalsSidebar = document.querySelector(".mammals-sidebar")s

let isActive = false;

// Function that prints incoming data into html elements
const displayAnimal = (pId) => {
  isActive = !isActive;
  if (!isActive) {
    mammalsMain.innerHTML = `
        <p class="mammals-page-message">
          Here you can find information about mammals. Please select the animal you want to examine
          from the menu on the left.
        </p>
        `;
  } else {
    const selectedAnimal = animals.filter((animal) => animal.id == pId);
    console.log(selectedAnimal[0].name);
    mammalsMain.innerHTML = `
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
              <p class="img-owner-total-photos"><b>Lengt: ${selectedAnimal[0].length}}</p>
              <p class="img-info"><b>Weight: </b>  ${selectedAnimal[0].weight}</p>
              <p class="img-info"><b>Found: </b>  ${selectedAnimal[0].found}</p>
            </div>
          </div>
        `;
  }
};

const createMammalsSideBar = () => {
  const mammalAnimal = animals.filter((animal) => animal.group == "mammals");

  mammalAnimalsList.innerHTML = mammalAnimal
    .map((animal) => {
      return `
        
          <li onclick="displayAnimal(${animal.id})" class="mammal-animal">${animal.name}</li>
        
        `;
    })
    .join("");
};

createMammalsSideBar();
