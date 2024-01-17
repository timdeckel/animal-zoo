const mainMammalsList = document.querySelector(".main-mammals-list") 
const mainBirdsList = document.querySelector(".main-birds-list") 
const mainReptilesList = document.querySelector(".main-reptiles-list") 
const mainAnimalsList = document.querySelector(".main-animals-list") 





// const createMammalsSideBar = () => {
//     // const mammalAnimal = animals.filter((animal) => animal.group == "mammals"); 

  
//     mainSideBar.innerHTML = mammalAnimal
//       .map((animal) => {
//         return `
          
//         <ul class="main-animals-list">
//           <li class="main-animal"> <h5>This is main animal</h5>
//             <ul class="inner-animals-list">
//               <li class="inner-main-animal">This is the main</li>
//             </ul>
//           </li>
//         </ul>
          
//           `;
//       })
//       .join("");
//   };
  
//   createMammalsSideBar();

const createAnimalsSidebar = () => {
    // const mammalAnimal = animals.filter((animal) => animal.group == "mammals"); 
    console.log(mainAnimalsList)
    console.log(animals[0])

const mammalsAnimals = animals.filter(animal => animal.group == "mammals")

const elementsMammals = `
<h3 class="group-name">${mammalsAnimals[0].group}</h3>
${
    mammalsAnimals.map(animal => {
            return`
            <li class="main-animal">${animal.name}</li>
            `
        }).join("")
}
`        
    mainMammalsList.innerHTML = elementsMammals
    
    const birdsAnimals = animals.filter(animal => animal.group == "birds")

const elementsBirds = `
<h3 class="group-name">${birdsAnimals[0].group}</h3>
${
    mammalsAnimals.map(animal => {
            return`
            <li class="main-animal">${animal.name}</li>
            `
        }).join("")
}
`        
    mainBirdsList.innerHTML = elementsBirds

    const raptilesAnimals = animals.filter(animal => animal.group == "reptile")

const elementsRaptiles = `
<h3 class="group-name">${raptilesAnimals[0].group}</h3>
${
    mammalsAnimals.map(animal => {
            return`
            <li class="main-animal">${animal.name}</li>
            `
        }).join("")
}
`        
    mainReptilesList.innerHTML = elementsRaptiles

      
  };
  
  createAnimalsSidebar();

