console.log("script loaded");

const images = [
  { id: "1", src: "images2/img1.png" },
  { id: "2", src: "images2/img2.png" },
  { id: "3", src: "images2/img3.png" },
  { id: "4", src: "images2/img4.png" },
  { id: "5", src: "images2/img5.png" },
  { id: "6", src: "images2/img6.png" },
  { id: "7", src: "images2/img7.png" },
  { id: "8", src: "images2/img8.png" },
  { id: "9", src: "images2/img9.png" },
  { id: "10", src: "images2/img10.png" },
  { id: "11", src: "images2/img11.png" },
  { id: "12", src: "images2/img12.png" },
  { id: "13", src: "images2/img13.png" },
  { id: "14", src: "images2/img14.png" },
  { id: "15", src: "images2/img15.png" },
  { id: "16", src: "images2/img16.png" },
  { id: "17", src: "images2/img17.png" },
  { id: "18", src: "images2/img18.png" },
  { id: "19", src: "images2/img19.png" },
  { id: "20", src: "images2/img20.png" },
  { id: "21", src: "images2/img21.png" },
  { id: "22", src: "images2/img22.png" },
  { id: "23", src: "images2/img23.png" },
  { id: "24", src: "images2/img24.png" },
  { id: "25", src: "images2/img25.png" },
  { id: "26", src: "images2/img26.png" },
  { id: "27", src: "images2/img27.png" },
  { id: "28", src: "images2/img28.png" },
  { id: "29", src: "images2/img29.png" },
  { id: "30", src: "images2/img30.png" },
  { id: "31", src: "images2/img31.png" },
  { id: "32", src: "images2/img32.png" },
  { id: "33", src: "images2/img33.png" },
  { id: "34", src: "images2/img34.png" },
  { id: "35", src: "images2/img35.png" },
  { id: "36", src: "images2/img36.png" },
  { id: "37", src: "images2/img37.png" },
  { id: "38", src: "images2/img38.png" },
  { id: "39", src: "images2/img39.png" },
  { id: "40", src: "images2/img40.png" },
  { id: "41", src: "images2/img41.png" },
  { id: "42", src: "images2/img42.png" },
  { id: "43", src: "images2/img43.png" },
  { id: "44", src: "images2/img44.png" },
  { id: "45", src: "images2/img45.png" },
  { id: "46", src: "images2/img46.png" },
  { id: "47", src: "images2/img47.png" },
  { id: "48", src: "images2/img48.png" },
  { id: "49", src: "images2/img49.png" },
  { id: "0", src: "images2/img0.png" },
];

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

function shuffleDeck() {
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
