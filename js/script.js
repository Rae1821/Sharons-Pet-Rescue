const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species, isTired) {
  const pet = {
    name: name,
    species: species,
    isTired: isTired,
    sleep: function () {
      console.log(`${pet.name} needs a nap!`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play");
        this.sleep();
      } else {
        console.log(`Yay! ${pet.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

const sora = createPet("Sora", "ferret", 1);
const clover = createPet("Clover", "rabbit", 8);
const baxter = createPet("Baxter", "hamster", 11);
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle", 9);

clover.sleep();
baxter.play();

const allPets = [sora, clover, baxter, cleo, francine];
console.log(allPets);

const showPets = function (petArray) {
  pets.innerHTM = " ";

  for (let pet of allPets) {
    let status = "Ready to play!";

    if (pet.isTired >= 7) {
      status = "is sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class = "pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

statusButton.addEventListener("click", function () {
  showPets(allPets);
});
