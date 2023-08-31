import { products, categories } from "./productsData.js";
import { changeTheme } from "./theme.js";

const createCard = (product) => {
  const card = document.createElement("li");
  const image = document.createElement("img");
  const paragraph = document.createElement("p");
  const titleBand = document.createElement("h2");

  const span = document.createElement("span");
  const p = document.createElement("p");
  const button = document.createElement("button");

  card.classList.add("albums__card");
  p.classList.add("paragraph__card");
  titleBand.classList.add("title__card");
  paragraph.classList.add("description__card");
  button.classList.add("button__card");

  image.src = product.img;
  paragraph.innerText = `${product.band} ${product.year}`;
  titleBand.innerText = product.title;
  p.innerText = `R$ ${product.price.toFixed(2)}`;
  button.innerText = "Comprar";

  span.append(p, button);
  card.append(image, paragraph, titleBand, span);

  return card;
};

const renderButtons = (array) => {
  const genderList = document.querySelector(".gender__list");

  array.forEach((gender) => {
    const item = document.createElement("li");
    const button = document.createElement("button");

    button.classList.add("button__gender");
    button.innerText = gender;

    item.appendChild(button);
    genderList.appendChild(item);
  });
};

const renderCard = (array) => {
  const albumlist = document.querySelector(".albums__list");

  albumlist.innerHTML = "";

  array.forEach((element) => {
    const cardElement = createCard(element);
    albumlist.appendChild(cardElement);
  });
};


const filterElements = (products, categories) => {
  const buttonGender = document.querySelectorAll(".button__gender");
  const inputRange = document.querySelector(".input__container");
  const price = document.querySelector(".paragraph__container");

  let filteredArray = products;
  let categoryIndex = 0;
  let inputValue = Number(inputRange.value);

  buttonGender.forEach((button) => {
    button.addEventListener("click", () => {
      const categoryText = button.innerText;

      categoryIndex = categories.findIndex(
        (category) => category === categoryText

      );

      if (categoryIndex === 0) {
        filteredArray = products.filter(
          (product) => product.price <= Number(inputValue)
        );
      } else if (categoryIndex !== -1) {
        filteredArray = products.filter(
          (product) => product.category === categoryIndex && product.price <= Number(inputValue)
        );

      }
      renderCard(filteredArray);
    });
  });

  inputRange.addEventListener("input", () => {
    inputValue = inputRange.value;
    price.innerText = `Até R$ ${inputValue}`;

    if (categoryIndex === 0) {
      filteredArray = products.filter(
        (product) => product.price <= Number(inputValue)
      );
    } else if (categoryIndex !== -1) {
      filteredArray = products.filter(
        (product) => product.category === categoryIndex && product.price <= Number(inputValue)
      );

    }
    renderCard(filteredArray);
  });
};

renderCard(products);
renderButtons(categories);
filterElements(products, categories);
changeTheme();

