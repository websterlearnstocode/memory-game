const container = document.querySelector(".container");

function createImgTiles() {
  for (let i = 0; i < 2; i++) {
    let draw = uniqueRandomNumber();
    for (let j = 0; j < draw.length; j++) {
      const divImg = document.createElement("div");
      const createImg = document.createElement("img");
      divImg.classList.add("tile-images");
      createImg.classList.add(`pair${draw[j]}`);

      createImg.src = `images2/img${draw[j]}.png`;
      divImg.appendChild(createImg);
      container.append(divImg);
    }
    console.log(draw);
  }
}

function randomDecks() {
  let array = Array.from(container.children);

  let newArray = [];
  for (m = 0; m < array.length; m++) {
    let j = Math.floor((Math.random() * array.length) / 2);

    if (array.includes(array[j])) {
      newArray.push(container.children[j]);
      array[j].remove();
    } else if (!array.includes(array[j])) {
      console.log("wiw");
    }
  }
  newArray.forEach((el) => container.appendChild(el));
}

function startHideImages() {
  const hideImages = document.querySelectorAll("img");
  let count = 5;
  let array = Array.from(container.children);
  let j = Math.floor((Math.random() * array.length) / 2);
  const countdown = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
      clearInterval(countdown);
      hideImages.forEach((images) => {
        images.classList.add("images-hidden");
      });
      hideImages[j].classList.remove("images-hidden");
      hideImages[j].classList.add("revealed-img");
    }
  }, 1000);
  return hideImages[j];
}

function randomReveal() {
  const hideImages = document.querySelectorAll(".images-hidden");

  let array = Array.from(container.children);
  let j = Math.floor((Math.random() * array.length) / 2);

  console.log(hideImages[j]);
  if (hideImages.length === 0) {
    alert("You win");
  } else {
    if (hideImages.length !== 0) {
      hideImages[j].classList.add("revealed-img");
      hideImages[j].classList.remove("images-hidden");
    }
  }
}

container.addEventListener("click", (e) => {
  let revealedImage = document.querySelector(".revealed-img");
  let allImagesHidden = document.querySelectorAll(".images-hidden");
  let targetedId = e.target.className.split(" ")[0];
  let targetedClass = e.target.className.split(" ")[1];
  let imageId = revealedImage.className.split(" ")[0];

  if (
    imageId === targetedId &&
    targetedClass !== "revealed-img" &&
    targetedClass !== "images-done" &&
    targetedClass === "images-hidden"
  ) {
    let imageDone = document.querySelectorAll(`.${targetedId}`);
    imageDone.forEach((image) => {
      image.classList.remove("revealed-img");
      image.classList.remove("images-hidden");
      image.classList.add("images-done");
    });

    randomReveal();
  } else if (
    imageId !== targetedId &&
    targetedClass !== "revealed-img" &&
    targetedClass === "images-hidden" &&
    targetedClass !== "images-done"
  ) {
    allImagesHidden.forEach((images) => {
      images.classList.remove("images-hidden");
    });

    let count = 5;

    const countdown = setInterval(() => {
      console.log(count);
      count--;

      if (count < 0) {
        clearInterval(countdown);
        allImagesHidden.forEach((images) => {
          images.classList.add("images-hidden");
        });

        revealedImage.classList.remove("revealed-img");

        revealedImage.classList.add("images-hidden");
        randomReveal();
      }
    }, 1000);
  }

  e.preventDefault();
});

function uniqueRandomNumber() {
  const numbers = Array.from({ length: 3 }, (_, i) => i);

  // Shuffle it
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  // Draw the first 10 without duplicates
  const draw = numbers.slice(0, 50);
  return draw;
}

function shuffleDeck() {
  // Step 1: Create an array of numbers from 0 to 49
  const numbers = [];
  for (let i = 0; i < 50; i++) {
    numbers.push(i);
    console.log(
      `This is pushing the number: ${numbers[i]} into the 'numbers' array`
    );
  }

  // Step 2: Shuffle the array using the Fisher-Yates algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    console.log(`This is random number 'j': ${j}`);
    // Swap numbers[i] and numbers[j]
    const temp = numbers[i];
    console.log(`This numbers array of index numbers.length-1: ${temp}`);
    numbers[i] = numbers[j];
    console.log(
      `This numbers with index i is swapped by the random number: ${numbers[i]} by ${numbers[j]}`
    );
    numbers[j] = temp;
  }

  // Step 3: Return the shuffled array
  return numbers;
}

createImgTiles();
shuffleDeck();
startHideImages();
