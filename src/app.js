/************
 * GRAPHICS *
 ************/

function requireFiles(r) {
  r.keys().forEach(r);
}
// require images unrelated to components
requireFiles(require.context("./img/", true, /(svg|png|jpg)$/));

/*************
 * CSS RESET *
 *************/

import "./blocks/_reset.scss";

/**********
 * BLOCKS *
 **********/

import "./blocks/text/_text.scss";

import "./blocks/heading/_heading.scss";

import "./blocks/link/_link.scss";

import "./blocks/img-raster/_img-raster.scss";

import "./blocks/icons/_icons.scss";
requireFiles(require.context("./blocks/icons/", true, /(svg|png|jpg)$/));
import "./blocks/form-group/_form-group.scss";

import "./blocks/select/_select.scss";

import "./blocks/page/_page.scss";
import "./blocks/page/page.js";

import "./blocks/img-svg/_img-svg.scss";

import "./blocks/form-group/_form-group.scss";

import "./blocks/main/_main.scss";

import "./blocks/header/_header.scss";

import "./blocks/footer/_footer.scss";

import "./blocks/pet-card/_pet-card.scss";

import "./blocks/filters/_filters.scss";

import "./blocks/pets-list/_pets-list.scss";

/***************
 * APPLICATION *
 ***************/

/*
  Petfinde.com API Doc: https://www.petfinder.com/developers/v2/docs/
  How to auth: https://gomakethings.com/using-oauth-with-fetch-in-vanilla-js/

  From https://www.petfinder.com/developers/ :
  Basic access is granted automatically after collecting a few details and will allow you to make up to 1,000 requests/day, with a rate limit of 50 requests/second. If you need petCard__arrow bandwidth, you can request petCard__arrow once you have your basic key
  */

//- Helper functions:

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function decodeHTMLentities(str) {
  let newStr = str;

  const quotesPattern = /&amp;#34;|&#34;|&amp;#39;|&#39;/g;
  const ampersandPattern = /&amp;amp;|&amp;/g;

  if (quotesPattern.test(newStr)) newStr = newStr.replace(quotesPattern, "'");
  if (ampersandPattern.test(newStr))
    newStr = newStr.replace(ampersandPattern, "&");

  return newStr;
}

//-

class Model {}

class View {}

class Controller {}

const app = new Controller(new Model(), new View());

//-

const main = document.querySelector(".main");

const petsList = document.createElement("div");
petsList.classList.add("pets-list");
main.appendChild(petsList);

// API auth. data:
const petfinderAPIkey = "oKzKhXQZZ7z6VgqpjZf8cj13LTHPZIMVpIeMQzEMIyb90qQwEQ";
const petfinderSecret = "tHd2J6r9yuN7l0qpXzk3obBKDwwBqk49ZBc6LLFo";
const url = "https://api.petfinder.com/v2/oauth2/token";

// authorize in API:
let authorizeInAPI = fetch(url, {
  method: "POST",
  body: `grant_type=client_credentials&client_id=${petfinderAPIkey}&client_secret=${petfinderSecret}`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then(response => {
    console.log(response);
    //caches.addAll(response);
    return response.json();
  })
  .catch(error => {
    console.log(error);
  });

// request all available pages with pets:
let requestAllPages = new Promise(resolve => {
  // array to store recieved pages:
  const pages = [];

  function requestPage(pageNumber = 1) {
    //console.log('call');
    return authorizeInAPI
      .then(OAuthToken => {
        const category = "animals";
        // Petfinder ID for PAWS New England, an animal rescue organization:
        const organizationID = "RI77";
        const status = "adoptable";
        const itemsPerPage = 100; // (default = 20, max = 100)

        const url = `https://api.petfinder.com/v2/${category}?organization=${organizationID}&status=${status}&page=${pageNumber}&limit=${itemsPerPage}`;

        return fetch(url, {
          headers: {
            Authorization:
              OAuthToken.token_type + " " + OAuthToken.access_token,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      })
      .then(response => {
        return response.json();
      })
      .then(page => {
        pages.push(page);
        //console.log('request the next results page from API');
        // request next available page through recursive function call:
        // ('page.pagination._links' must return 'true' cause if there is no
        // next page, 'page.pagination._links' property is absent i.e.
        // 'undefined', so the attempt to read '.next' property of 'undefined'
        // will throw an error)
        if (page.pagination._links && page.pagination._links.next)
          requestPage(++pageNumber);
        // if there are none pages left, resolve promise with an array
        // of all received pages (each page represented as an object):
        else {
          // marge pets from all pages-objects into one array of pets:
          let pets = [];
          for (let page of pages) pets.push(...page.animals);
          //console.log(pets);
          resolve(pets);
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  return requestPage();
});

requestAllPages
  .then(pets => {
    // store all created 'select' boxes in array:
    let selectBoxes = [];

    function createFilters(assignValues, ...filterNames) {
      // for each filter name create property in object and assign it an empty array
      let filters = {};
      filterNames.forEach(propName => (filters[propName] = []));

      if (assignValues) {
        // collect data from all pets (to use it as select box values later):
        pets.forEach(pet => {
          filterNames.forEach(propName => {
            if (
              propName !== "breeds" &&
              !filters[propName].includes(pet[propName])
            ) {
              filters[propName].push(pet[propName]);
            } else if (
              propName === "breeds" &&
              !filters[propName].includes(pet[propName].primary)
            ) {
              filters[propName].push(pet[propName].primary);
            }
          });
        });
      }

      return filters;
    }

    function renderFilters(filtersObj) {
      console.log("filtersObj: ", filtersObj);
      const filters = document.createElement("div");
      filters.className = "filters";
      main.insertBefore(filters, main.firstChild);

      // create select box: for each filter and populate it with options
      for (let propName in filtersObj) {
        const formGroup = document.createElement("div");
        formGroup.classList.add("form-group", "form-group_col");
        filters.appendChild(formGroup);

        const formGroup__label = document.createElement("label");
        formGroup__label.for = `selectbox-${propName}`;
        formGroup__label.classList.add(
          "form-group__label",
          "text",
          "text_color_black"
        );
        formGroup__label.textContent = capitalizeFirstLetter(propName);

        const formGroup__container = document.createElement("div");
        formGroup__container.className = "form-group__container";

        // create select box
        const formGroup__selectbox = document.createElement("select");
        formGroup__selectbox.id = `selectbox-${propName}`.toLowerCase();
        formGroup__selectbox.className = "form-group__selectbox";
        formGroup__selectbox.name = propName.toLowerCase();
        formGroup__container.appendChild(formGroup__selectbox);

        // create 'option' inside select box
        const option = document.createElement("option");
        option.textContent = `select...`;
        formGroup__selectbox.appendChild(option);
        formGroup.append(formGroup__label, formGroup__container);

        // for each option in select list:
        filtersObj[propName].forEach(optionName => {
          const option = document.createElement("option");
          option.value = optionName;
          option.textContent = optionName;
          formGroup__selectbox.appendChild(option);
        });

        selectBoxes.push(formGroup__selectbox);
      }
    }

    function filterPetsList(e) {
      // create filters object but don't populate its props with values, just
      // assign each prop an empty array
      let currentlySelected = createFilters(false, "age", "gender", "breeds");

      // get currently selected value of every select box on a page:
      selectBoxes.forEach(selectBox => {
        // if select box has a default state ('select,,,' is selected by
        // default), it means that ALL options selected, so we return the
        // entire array of values from filters[selectBox.name]. Otherwise we
        // return an array with selected option only
        let currentlySelectedValue = (function() {
          if (selectBox.options[selectBox.selectedIndex].value === "select...")
            return filters[selectBox.name];
          else return selectBox.options[selectBox.selectedIndex].value;
        })();

        // if item is array, extract:
        if (Array.isArray(currentlySelectedValue)) {
          currentlySelectedValue.forEach(el =>
            currentlySelected[selectBox.name].push(el)
          );
        } else currentlySelected[selectBox.name].push(currentlySelectedValue);
      });

      let filteredPetsList = pets.filter(pet => {
        let {
          age,
          gender,
          breeds: { primary: breeds },
        } = pet;

        let testAge = currentlySelected.age.some(value => value === age);

        let testGender = currentlySelected.gender.some(
          value => value === gender
        );

        let testBreed = currentlySelected.breeds.some(
          value => value === breeds
        );

        if (testAge && testGender && testBreed) return true;
      });

      console.log(filteredPetsList);

      renderPetCards(filteredPetsList);
    }

    function renderPetCards(currentSelectBoxValues) {
      let cardNumber = 1;
      petsList.innerHTML = "";

      // for each pet object:
      currentSelectBoxValues.forEach(pet => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        petsList.appendChild(petCard);

        // display pet photos:

        const imageRaster = document.createElement("figure");
        imageRaster.classList.add("image-raster", "image-raster_theme_black");

        const imageRaster__wrapper = document.createElement("picture");
        imageRaster__wrapper.classList.add("image-raster__wrapper");

        const imageRaster__img = document.createElement("img");
        imageRaster__img.classList.add("image-raster__img", "pet-card__photo");
        // sometimes there is no photos for a pet at all, so let's prevent an error: first check if the property is 'null' or 'undefined' and then (&&) check if the pet.photos.length > 0
        if (pet.photos && pet.photos.length > 0) {
          imageRaster__img.src = pet.photos[0].medium;
        } else {
          imageRaster__img.src =
            "https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg";
        }
        imageRaster__img.alt = pet.name;

        imageRaster__wrapper.appendChild(imageRaster__img);
        imageRaster.appendChild(imageRaster__wrapper);

        petCard.append(imageRaster);

        petCard.addEventListener("mouseenter", e => {
          // create overlay for pet details:

          const petCard__overlay = document.createElement("p");
          petCard__overlay.classList.add("pet-card__overlay");
          petCard__overlay.style.display = "flex";

          const petCard__arrow = document.createElement("img");
          petCard__arrow.classList.add("img-svg", "pet-card__arrow");
          petCard__arrow.src = "./img/right-arrow.svg";
          petCard__arrow.alt = "Arrow";

          const petCard__link = document.createElement("a");
          petCard__link.href = pet.url;

          const petDescription = document.createTextNode(
            decodeHTMLentities(pet.description)
          );

          // append overlay to petCard:
          petCard__link.appendChild(petCard__arrow);
          petCard__overlay.append(petDescription);
          petCard__overlay.appendChild(petCard__link);
          petCard.appendChild(petCard__overlay);
        });

        petCard.addEventListener("mouseleave", e => {
          e.currentTarget.parentElement
            .querySelector(".pet-card__overlay")
            .remove();
        });

        // display pet name
        const petCard__name = document.createElement("h1");
        petCard__name.classList.add(
          "heading",
          "heading_size_h5",
          "pet-card__name",
          "text",
          "text_color_white",
          "text_display_block"
        );
        petCard__name.appendChild(
          document.createTextNode(
            `${cardNumber++}. ${decodeHTMLentities(pet.name)}`
          )
        );
        petCard.appendChild(petCard__name);
      });
    }

    //-
    let filters = createFilters(true, "age", "gender", "breeds");

    renderFilters(filters);

    selectBoxes.forEach(selectBox => {
      selectBox.addEventListener("change", filterPetsList);
    });

    filterPetsList();
  })
  .catch(error => {
    console.log(error);
  });

/*
self.addEventListener('fetch', function(event) {
  console.log('fetch listener');
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return (
          response ||
          fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
*/
