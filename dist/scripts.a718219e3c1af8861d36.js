/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _blocks_reset_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_reset_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_text_text_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _blocks_text_text_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_text_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_heading_heading_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _blocks_heading_heading_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_heading_heading_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_link_link_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _blocks_link_link_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_link_link_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _blocks_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_img_raster_img_raster_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_icons_icons_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _blocks_icons_icons_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_icons_icons_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _blocks_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_form_group_form_group_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blocks_select_select_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _blocks_select_select_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_select_select_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blocks_page_page_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _blocks_page_page_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_page_page_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blocks_page_page_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _blocks_page_page_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blocks_page_page_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _blocks_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);
/* harmony import */ var _blocks_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_blocks_img_svg_img_svg_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var _blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var _blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19);
/* harmony import */ var _blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _blocks_pet_card_pet_card_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20);
/* harmony import */ var _blocks_pet_card_pet_card_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_blocks_pet_card_pet_card_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _blocks_filters_filters_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21);
/* harmony import */ var _blocks_filters_filters_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_blocks_filters_filters_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _blocks_pets_list_pets_list_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(22);
/* harmony import */ var _blocks_pets_list_pets_list_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_blocks_pets_list_pets_list_scss__WEBPACK_IMPORTED_MODULE_16__);
/************
 * GRAPHICS *
 ************/
function requireFiles(r) {
  r.keys().forEach(r);
} // require images unrelated to components


requireFiles(__webpack_require__(2));
/*************
 * CSS RESET *
 *************/


/**********
 * BLOCKS *
 **********/






requireFiles(__webpack_require__(11));












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
  if (ampersandPattern.test(newStr)) newStr = newStr.replace(ampersandPattern, "&");
  return newStr;
} //-


class Model {}

class View {}

class Controller {}

const app = new Controller(new Model(), new View()); //-

const main = document.querySelector(".main");
const petsList = document.createElement("div");
petsList.classList.add("pets-list");
main.appendChild(petsList); // API auth. data:

const petfinderAPIkey = "oKzKhXQZZ7z6VgqpjZf8cj13LTHPZIMVpIeMQzEMIyb90qQwEQ";
const petfinderSecret = "tHd2J6r9yuN7l0qpXzk3obBKDwwBqk49ZBc6LLFo";
const url = "https://api.petfinder.com/v2/oauth2/token"; // authorize in API:

let authorizeInAPI = fetch(url, {
  method: "POST",
  body: `grant_type=client_credentials&client_id=${petfinderAPIkey}&client_secret=${petfinderSecret}`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}).then(response => {
  console.log(response); //caches.addAll(response);

  return response.json();
}).catch(error => {
  console.log(error);
}); // request all available pages with pets:

let requestAllPages = new Promise(resolve => {
  // array to store recieved pages:
  const pages = [];

  function requestPage(pageNumber = 1) {
    //console.log('call');
    return authorizeInAPI.then(OAuthToken => {
      const category = "animals"; // Petfinder ID for PAWS New England, an animal rescue organization:

      const organizationID = "RI77";
      const status = "adoptable";
      const itemsPerPage = 100; // (default = 20, max = 100)

      const url = `https://api.petfinder.com/v2/${category}?organization=${organizationID}&status=${status}&page=${pageNumber}&limit=${itemsPerPage}`;
      return fetch(url, {
        headers: {
          Authorization: OAuthToken.token_type + " " + OAuthToken.access_token,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    }).then(response => {
      return response.json();
    }).then(page => {
      pages.push(page); //console.log('request the next results page from API');
      // request next available page through recursive function call:
      // ('page.pagination._links' must return 'true' cause if there is no
      // next page, 'page.pagination._links' property is absent i.e.
      // 'undefined', so the attempt to read '.next' property of 'undefined'
      // will throw an error)

      if (page.pagination._links && page.pagination._links.next) requestPage(++pageNumber); // if there are none pages left, resolve promise with an array
      // of all received pages (each page represented as an object):
      else {
          // marge pets from all pages-objects into one array of pets:
          let pets = [];

          for (let page of pages) pets.push(...page.animals); //console.log(pets);


          resolve(pets);
        }
    }).catch(error => {
      throw new Error(error);
    });
  }

  return requestPage();
});
requestAllPages.then(pets => {
  // store all created 'select' boxes in array:
  let selectBoxes = [];

  function createFilters(assignValues, ...filterNames) {
    // for each filter name create property in object and assign it an empty array
    let filters = {};
    filterNames.forEach(propName => filters[propName] = []);

    if (assignValues) {
      // collect data from all pets (to use it as select box values later):
      pets.forEach(pet => {
        filterNames.forEach(propName => {
          if (propName !== "breeds" && !filters[propName].includes(pet[propName])) {
            filters[propName].push(pet[propName]);
          } else if (propName === "breeds" && !filters[propName].includes(pet[propName].primary)) {
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
    main.insertBefore(filters, main.firstChild); // create select box: for each filter and populate it with options

    for (let propName in filtersObj) {
      const formGroup = document.createElement("div");
      formGroup.classList.add("form-group", "form-group_col");
      filters.appendChild(formGroup);
      const formGroup__label = document.createElement("label");
      formGroup__label.for = `selectbox-${propName}`;
      formGroup__label.classList.add("form-group__label", "text", "text_color_black");
      formGroup__label.textContent = capitalizeFirstLetter(propName);
      const formGroup__container = document.createElement("div");
      formGroup__container.className = "form-group__container"; // create select box

      const formGroup__selectbox = document.createElement("select");
      formGroup__selectbox.id = `selectbox-${propName}`.toLowerCase();
      formGroup__selectbox.className = "form-group__selectbox";
      formGroup__selectbox.name = propName.toLowerCase();
      formGroup__container.appendChild(formGroup__selectbox); // create 'option' inside select box

      const option = document.createElement("option");
      option.textContent = `select...`;
      formGroup__selectbox.appendChild(option);
      formGroup.append(formGroup__label, formGroup__container); // for each option in select list:

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
    let currentlySelected = createFilters(false, "age", "gender", "breeds"); // get currently selected value of every select box on a page:

    selectBoxes.forEach(selectBox => {
      // if select box has a default state ('select,,,' is selected by
      // default), it means that ALL options selected, so we return the
      // entire array of values from filters[selectBox.name]. Otherwise we
      // return an array with selected option only
      let currentlySelectedValue = function () {
        if (selectBox.options[selectBox.selectedIndex].value === "select...") return filters[selectBox.name];else return selectBox.options[selectBox.selectedIndex].value;
      }(); // if item is array, extract:


      if (Array.isArray(currentlySelectedValue)) {
        currentlySelectedValue.forEach(el => currentlySelected[selectBox.name].push(el));
      } else currentlySelected[selectBox.name].push(currentlySelectedValue);
    });
    let filteredPetsList = pets.filter(pet => {
      let {
        age,
        gender,
        breeds: {
          primary: breeds
        }
      } = pet;
      let testAge = currentlySelected.age.some(value => value === age);
      let testGender = currentlySelected.gender.some(value => value === gender);
      let testBreed = currentlySelected.breeds.some(value => value === breeds);
      if (testAge && testGender && testBreed) return true;
    });
    console.log(filteredPetsList);
    renderPetCards(filteredPetsList);
  }

  function renderPetCards(currentSelectBoxValues) {
    let cardNumber = 1;
    petsList.innerHTML = ""; // for each pet object:

    currentSelectBoxValues.forEach(pet => {
      const petCard = document.createElement("div");
      petCard.classList.add("pet-card");
      petsList.appendChild(petCard); // display pet photos:

      const imageRaster = document.createElement("figure");
      imageRaster.classList.add("image-raster", "image-raster_theme_black");
      const imageRaster__wrapper = document.createElement("picture");
      imageRaster__wrapper.classList.add("image-raster__wrapper");
      const imageRaster__img = document.createElement("img");
      imageRaster__img.classList.add("image-raster__img", "pet-card__photo"); // sometimes there is no photos for a pet at all, so let's prevent an error: first check if the property is 'null' or 'undefined' and then (&&) check if the pet.photos.length > 0

      if (pet.photos && pet.photos.length > 0) {
        imageRaster__img.src = pet.photos[0].medium;
      } else {
        imageRaster__img.src = "https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg";
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
        const petDescription = document.createTextNode(decodeHTMLentities(pet.description)); // append overlay to petCard:

        petCard__link.appendChild(petCard__arrow);
        petCard__overlay.append(petDescription);
        petCard__overlay.appendChild(petCard__link);
        petCard.appendChild(petCard__overlay);
      });
      petCard.addEventListener("mouseleave", e => {
        e.currentTarget.parentElement.querySelector(".pet-card__overlay").remove();
      }); // display pet name

      const petCard__name = document.createElement("h1");
      petCard__name.classList.add("heading", "heading_size_h5", "pet-card__name", "text", "text_color_white", "text_display_block");
      petCard__name.appendChild(document.createTextNode(`${cardNumber++}. ${decodeHTMLentities(pet.name)}`));
      petCard.appendChild(petCard__name);
    });
  } //-


  let filters = createFilters(true, "age", "gender", "breeds");
  renderFilters(filters);
  selectBoxes.forEach(selectBox => {
    selectBox.addEventListener("change", filterPetsList);
  });
  filterPetsList();
}).catch(error => {
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./petfinder-logo.svg": 3,
	"./right-arrow.svg": 4
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 2;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/petfinder-logo.svg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/right-arrow.svg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprite.svg": 12
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

const page__preload = document.querySelector(".page__preload");
window.addEventListener("load", () => {
  if (page__preload) page__preload.classList.remove("page__preload");
}, false);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9mb3JtLWdyb3VwL19mb3JtLWdyb3VwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nIHN5bmMgKHN2Z3xwbmd8anBnKSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wZXRmaW5kZXItbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9yaWdodC1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9fcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3RleHQvX3RleHQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2hlYWRpbmcvX2hlYWRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2xpbmsvX2xpbmsuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ltZy1yYXN0ZXIvX2ltZy1yYXN0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ljb25zL19pY29ucy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaWNvbnMgc3luYyAoc3ZnfHBuZ3xqcGcpJCIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ljb25zL3Nwcml0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zZWxlY3QvX3NlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcGFnZS9fcGFnZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvcGFnZS9wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaW1nLXN2Zy9faW1nLXN2Zy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWFpbi9fbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGVyL19oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Zvb3Rlci9fZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9wZXQtY2FyZC9fcGV0LWNhcmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZpbHRlcnMvX2ZpbHRlcnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3BldHMtbGlzdC9fcGV0cy1saXN0LnNjc3MiXSwibmFtZXMiOlsicmVxdWlyZUZpbGVzIiwiciIsImtleXMiLCJmb3JFYWNoIiwicmVxdWlyZSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0ciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJkZWNvZGVIVE1MZW50aXRpZXMiLCJuZXdTdHIiLCJxdW90ZXNQYXR0ZXJuIiwiYW1wZXJzYW5kUGF0dGVybiIsInRlc3QiLCJyZXBsYWNlIiwiTW9kZWwiLCJWaWV3IiwiQ29udHJvbGxlciIsImFwcCIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwZXRzTGlzdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInBldGZpbmRlckFQSWtleSIsInBldGZpbmRlclNlY3JldCIsInVybCIsImF1dGhvcml6ZUluQVBJIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsInJlcXVlc3RBbGxQYWdlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicGFnZXMiLCJyZXF1ZXN0UGFnZSIsInBhZ2VOdW1iZXIiLCJPQXV0aFRva2VuIiwiY2F0ZWdvcnkiLCJvcmdhbml6YXRpb25JRCIsInN0YXR1cyIsIml0ZW1zUGVyUGFnZSIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbl90eXBlIiwiYWNjZXNzX3Rva2VuIiwicGFnZSIsInB1c2giLCJwYWdpbmF0aW9uIiwiX2xpbmtzIiwibmV4dCIsInBldHMiLCJhbmltYWxzIiwiRXJyb3IiLCJzZWxlY3RCb3hlcyIsImNyZWF0ZUZpbHRlcnMiLCJhc3NpZ25WYWx1ZXMiLCJmaWx0ZXJOYW1lcyIsImZpbHRlcnMiLCJwcm9wTmFtZSIsInBldCIsImluY2x1ZGVzIiwicHJpbWFyeSIsInJlbmRlckZpbHRlcnMiLCJmaWx0ZXJzT2JqIiwiY2xhc3NOYW1lIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImZvcm1Hcm91cCIsImZvcm1Hcm91cF9fbGFiZWwiLCJmb3IiLCJ0ZXh0Q29udGVudCIsImZvcm1Hcm91cF9fY29udGFpbmVyIiwiZm9ybUdyb3VwX19zZWxlY3Rib3giLCJpZCIsInRvTG93ZXJDYXNlIiwibmFtZSIsIm9wdGlvbiIsImFwcGVuZCIsIm9wdGlvbk5hbWUiLCJ2YWx1ZSIsImZpbHRlclBldHNMaXN0IiwiZSIsImN1cnJlbnRseVNlbGVjdGVkIiwic2VsZWN0Qm94IiwiY3VycmVudGx5U2VsZWN0ZWRWYWx1ZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwiQXJyYXkiLCJpc0FycmF5IiwiZWwiLCJmaWx0ZXJlZFBldHNMaXN0IiwiZmlsdGVyIiwiYWdlIiwiZ2VuZGVyIiwiYnJlZWRzIiwidGVzdEFnZSIsInNvbWUiLCJ0ZXN0R2VuZGVyIiwidGVzdEJyZWVkIiwicmVuZGVyUGV0Q2FyZHMiLCJjdXJyZW50U2VsZWN0Qm94VmFsdWVzIiwiY2FyZE51bWJlciIsImlubmVySFRNTCIsInBldENhcmQiLCJpbWFnZVJhc3RlciIsImltYWdlUmFzdGVyX193cmFwcGVyIiwiaW1hZ2VSYXN0ZXJfX2ltZyIsInBob3RvcyIsImxlbmd0aCIsInNyYyIsIm1lZGl1bSIsImFsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwZXRDYXJkX19vdmVybGF5Iiwic3R5bGUiLCJkaXNwbGF5IiwicGV0Q2FyZF9fYXJyb3ciLCJwZXRDYXJkX19saW5rIiwiaHJlZiIsInBldERlc2NyaXB0aW9uIiwiY3JlYXRlVGV4dE5vZGUiLCJkZXNjcmlwdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwicGV0Q2FyZF9fbmFtZSIsInBhZ2VfX3ByZWxvYWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7QUNsRkEsdUM7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUlBLFNBQVNBLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3ZCQSxHQUFDLENBQUNDLElBQUYsR0FBU0MsT0FBVCxDQUFpQkYsQ0FBakI7QUFDRCxDLENBQ0Q7OztBQUNBRCxZQUFZLENBQUNJLHNCQUFELENBQVo7QUFFQTs7OztBQUlBO0FBRUE7Ozs7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0FKLFlBQVksQ0FBQ0ksdUJBQUQsQ0FBWjtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBOzs7O0FBSUE7Ozs7Ozs7QUFRQTs7QUFFQSxTQUFTQyxxQkFBVCxDQUErQkMsR0FBL0IsRUFBb0M7QUFDbEMsU0FBT0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCRixHQUFHLENBQUNHLEtBQUosQ0FBVSxDQUFWLENBQXJDO0FBQ0Q7O0FBRUQsU0FBU0Msa0JBQVQsQ0FBNEJKLEdBQTVCLEVBQWlDO0FBQy9CLE1BQUlLLE1BQU0sR0FBR0wsR0FBYjtBQUVBLFFBQU1NLGFBQWEsR0FBRyxrQ0FBdEI7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxNQUFJRCxhQUFhLENBQUNFLElBQWQsQ0FBbUJILE1BQW5CLENBQUosRUFBZ0NBLE1BQU0sR0FBR0EsTUFBTSxDQUFDSSxPQUFQLENBQWVILGFBQWYsRUFBOEIsR0FBOUIsQ0FBVDtBQUNoQyxNQUFJQyxnQkFBZ0IsQ0FBQ0MsSUFBakIsQ0FBc0JILE1BQXRCLENBQUosRUFDRUEsTUFBTSxHQUFHQSxNQUFNLENBQUNJLE9BQVAsQ0FBZUYsZ0JBQWYsRUFBaUMsR0FBakMsQ0FBVDtBQUVGLFNBQU9GLE1BQVA7QUFDRCxDLENBRUQ7OztBQUVBLE1BQU1LLEtBQU4sQ0FBWTs7QUFFWixNQUFNQyxJQUFOLENBQVc7O0FBRVgsTUFBTUMsVUFBTixDQUFpQjs7QUFFakIsTUFBTUMsR0FBRyxHQUFHLElBQUlELFVBQUosQ0FBZSxJQUFJRixLQUFKLEVBQWYsRUFBNEIsSUFBSUMsSUFBSixFQUE1QixDQUFaLEMsQ0FFQTs7QUFFQSxNQUFNRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBRUEsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7QUFDQUQsUUFBUSxDQUFDRSxTQUFULENBQW1CQyxHQUFuQixDQUF1QixXQUF2QjtBQUNBTixJQUFJLENBQUNPLFdBQUwsQ0FBaUJKLFFBQWpCLEUsQ0FFQTs7QUFDQSxNQUFNSyxlQUFlLEdBQUcsb0RBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLDBDQUF4QjtBQUNBLE1BQU1DLEdBQUcsR0FBRywyQ0FBWixDLENBRUE7O0FBQ0EsSUFBSUMsY0FBYyxHQUFHQyxLQUFLLENBQUNGLEdBQUQsRUFBTTtBQUM5QkcsUUFBTSxFQUFFLE1BRHNCO0FBRTlCQyxNQUFJLEVBQUcsMkNBQTBDTixlQUFnQixrQkFBaUJDLGVBQWdCLEVBRnBFO0FBRzlCTSxTQUFPLEVBQUU7QUFDUCxvQkFBZ0I7QUFEVDtBQUhxQixDQUFOLENBQUwsQ0FPbEJDLElBUGtCLENBT2JDLFFBQVEsSUFBSTtBQUNoQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVosRUFEZ0IsQ0FFaEI7O0FBQ0EsU0FBT0EsUUFBUSxDQUFDRyxJQUFULEVBQVA7QUFDRCxDQVhrQixFQVlsQkMsS0Faa0IsQ0FZWkMsS0FBSyxJQUFJO0FBQ2RKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFaO0FBQ0QsQ0Fka0IsQ0FBckIsQyxDQWdCQTs7QUFDQSxJQUFJQyxlQUFlLEdBQUcsSUFBSUMsT0FBSixDQUFZQyxPQUFPLElBQUk7QUFDM0M7QUFDQSxRQUFNQyxLQUFLLEdBQUcsRUFBZDs7QUFFQSxXQUFTQyxXQUFULENBQXFCQyxVQUFVLEdBQUcsQ0FBbEMsRUFBcUM7QUFDbkM7QUFDQSxXQUFPakIsY0FBYyxDQUNsQkssSUFESSxDQUNDYSxVQUFVLElBQUk7QUFDbEIsWUFBTUMsUUFBUSxHQUFHLFNBQWpCLENBRGtCLENBRWxCOztBQUNBLFlBQU1DLGNBQWMsR0FBRyxNQUF2QjtBQUNBLFlBQU1DLE1BQU0sR0FBRyxXQUFmO0FBQ0EsWUFBTUMsWUFBWSxHQUFHLEdBQXJCLENBTGtCLENBS1E7O0FBRTFCLFlBQU12QixHQUFHLEdBQUksZ0NBQStCb0IsUUFBUyxpQkFBZ0JDLGNBQWUsV0FBVUMsTUFBTyxTQUFRSixVQUFXLFVBQVNLLFlBQWEsRUFBOUk7QUFFQSxhQUFPckIsS0FBSyxDQUFDRixHQUFELEVBQU07QUFDaEJLLGVBQU8sRUFBRTtBQUNQbUIsdUJBQWEsRUFDWEwsVUFBVSxDQUFDTSxVQUFYLEdBQXdCLEdBQXhCLEdBQThCTixVQUFVLENBQUNPLFlBRnBDO0FBR1AsMEJBQWdCO0FBSFQ7QUFETyxPQUFOLENBQVo7QUFPRCxLQWpCSSxFQWtCSnBCLElBbEJJLENBa0JDQyxRQUFRLElBQUk7QUFDaEIsYUFBT0EsUUFBUSxDQUFDRyxJQUFULEVBQVA7QUFDRCxLQXBCSSxFQXFCSkosSUFyQkksQ0FxQkNxQixJQUFJLElBQUk7QUFDWlgsV0FBSyxDQUFDWSxJQUFOLENBQVdELElBQVgsRUFEWSxDQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFJQSxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLE1BQWhCLElBQTBCSCxJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLE1BQWhCLENBQXVCQyxJQUFyRCxFQUNFZCxXQUFXLENBQUMsRUFBRUMsVUFBSCxDQUFYLENBREYsQ0FFQTtBQUNBO0FBSEEsV0FJSztBQUNIO0FBQ0EsY0FBSWMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsZUFBSyxJQUFJTCxJQUFULElBQWlCWCxLQUFqQixFQUF3QmdCLElBQUksQ0FBQ0osSUFBTCxDQUFVLEdBQUdELElBQUksQ0FBQ00sT0FBbEIsRUFIckIsQ0FJSDs7O0FBQ0FsQixpQkFBTyxDQUFDaUIsSUFBRCxDQUFQO0FBQ0Q7QUFDRixLQXhDSSxFQXlDSnJCLEtBekNJLENBeUNFQyxLQUFLLElBQUk7QUFDZCxZQUFNLElBQUlzQixLQUFKLENBQVV0QixLQUFWLENBQU47QUFDRCxLQTNDSSxDQUFQO0FBNENEOztBQUVELFNBQU9LLFdBQVcsRUFBbEI7QUFDRCxDQXJEcUIsQ0FBdEI7QUF1REFKLGVBQWUsQ0FDWlAsSUFESCxDQUNRMEIsSUFBSSxJQUFJO0FBQ1o7QUFDQSxNQUFJRyxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsV0FBU0MsYUFBVCxDQUF1QkMsWUFBdkIsRUFBcUMsR0FBR0MsV0FBeEMsRUFBcUQ7QUFDbkQ7QUFDQSxRQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBRCxlQUFXLENBQUNqRSxPQUFaLENBQW9CbUUsUUFBUSxJQUFLRCxPQUFPLENBQUNDLFFBQUQsQ0FBUCxHQUFvQixFQUFyRDs7QUFFQSxRQUFJSCxZQUFKLEVBQWtCO0FBQ2hCO0FBQ0FMLFVBQUksQ0FBQzNELE9BQUwsQ0FBYW9FLEdBQUcsSUFBSTtBQUNsQkgsbUJBQVcsQ0FBQ2pFLE9BQVosQ0FBb0JtRSxRQUFRLElBQUk7QUFDOUIsY0FDRUEsUUFBUSxLQUFLLFFBQWIsSUFDQSxDQUFDRCxPQUFPLENBQUNDLFFBQUQsQ0FBUCxDQUFrQkUsUUFBbEIsQ0FBMkJELEdBQUcsQ0FBQ0QsUUFBRCxDQUE5QixDQUZILEVBR0U7QUFDQUQsbUJBQU8sQ0FBQ0MsUUFBRCxDQUFQLENBQWtCWixJQUFsQixDQUF1QmEsR0FBRyxDQUFDRCxRQUFELENBQTFCO0FBQ0QsV0FMRCxNQUtPLElBQ0xBLFFBQVEsS0FBSyxRQUFiLElBQ0EsQ0FBQ0QsT0FBTyxDQUFDQyxRQUFELENBQVAsQ0FBa0JFLFFBQWxCLENBQTJCRCxHQUFHLENBQUNELFFBQUQsQ0FBSCxDQUFjRyxPQUF6QyxDQUZJLEVBR0w7QUFDQUosbUJBQU8sQ0FBQ0MsUUFBRCxDQUFQLENBQWtCWixJQUFsQixDQUF1QmEsR0FBRyxDQUFDRCxRQUFELENBQUgsQ0FBY0csT0FBckM7QUFDRDtBQUNGLFNBWkQ7QUFhRCxPQWREO0FBZUQ7O0FBRUQsV0FBT0osT0FBUDtBQUNEOztBQUVELFdBQVNLLGFBQVQsQ0FBdUJDLFVBQXZCLEVBQW1DO0FBQ2pDckMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0Qm9DLFVBQTVCO0FBQ0EsVUFBTU4sT0FBTyxHQUFHaEQsUUFBUSxDQUFDRyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0E2QyxXQUFPLENBQUNPLFNBQVIsR0FBb0IsU0FBcEI7QUFDQXhELFFBQUksQ0FBQ3lELFlBQUwsQ0FBa0JSLE9BQWxCLEVBQTJCakQsSUFBSSxDQUFDMEQsVUFBaEMsRUFKaUMsQ0FNakM7O0FBQ0EsU0FBSyxJQUFJUixRQUFULElBQXFCSyxVQUFyQixFQUFpQztBQUMvQixZQUFNSSxTQUFTLEdBQUcxRCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQXVELGVBQVMsQ0FBQ3RELFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFlBQXhCLEVBQXNDLGdCQUF0QztBQUNBMkMsYUFBTyxDQUFDMUMsV0FBUixDQUFvQm9ELFNBQXBCO0FBRUEsWUFBTUMsZ0JBQWdCLEdBQUczRCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBekI7QUFDQXdELHNCQUFnQixDQUFDQyxHQUFqQixHQUF3QixhQUFZWCxRQUFTLEVBQTdDO0FBQ0FVLHNCQUFnQixDQUFDdkQsU0FBakIsQ0FBMkJDLEdBQTNCLENBQ0UsbUJBREYsRUFFRSxNQUZGLEVBR0Usa0JBSEY7QUFLQXNELHNCQUFnQixDQUFDRSxXQUFqQixHQUErQjdFLHFCQUFxQixDQUFDaUUsUUFBRCxDQUFwRDtBQUVBLFlBQU1hLG9CQUFvQixHQUFHOUQsUUFBUSxDQUFDRyxhQUFULENBQXVCLEtBQXZCLENBQTdCO0FBQ0EyRCwwQkFBb0IsQ0FBQ1AsU0FBckIsR0FBaUMsdUJBQWpDLENBZitCLENBaUIvQjs7QUFDQSxZQUFNUSxvQkFBb0IsR0FBRy9ELFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUE3QjtBQUNBNEQsMEJBQW9CLENBQUNDLEVBQXJCLEdBQTJCLGFBQVlmLFFBQVMsRUFBdEIsQ0FBd0JnQixXQUF4QixFQUExQjtBQUNBRiwwQkFBb0IsQ0FBQ1IsU0FBckIsR0FBaUMsdUJBQWpDO0FBQ0FRLDBCQUFvQixDQUFDRyxJQUFyQixHQUE0QmpCLFFBQVEsQ0FBQ2dCLFdBQVQsRUFBNUI7QUFDQUgsMEJBQW9CLENBQUN4RCxXQUFyQixDQUFpQ3lELG9CQUFqQyxFQXRCK0IsQ0F3Qi9COztBQUNBLFlBQU1JLE1BQU0sR0FBR25FLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FnRSxZQUFNLENBQUNOLFdBQVAsR0FBc0IsV0FBdEI7QUFDQUUsMEJBQW9CLENBQUN6RCxXQUFyQixDQUFpQzZELE1BQWpDO0FBQ0FULGVBQVMsQ0FBQ1UsTUFBVixDQUFpQlQsZ0JBQWpCLEVBQW1DRyxvQkFBbkMsRUE1QitCLENBOEIvQjs7QUFDQVIsZ0JBQVUsQ0FBQ0wsUUFBRCxDQUFWLENBQXFCbkUsT0FBckIsQ0FBNkJ1RixVQUFVLElBQUk7QUFDekMsY0FBTUYsTUFBTSxHQUFHbkUsUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQWdFLGNBQU0sQ0FBQ0csS0FBUCxHQUFlRCxVQUFmO0FBQ0FGLGNBQU0sQ0FBQ04sV0FBUCxHQUFxQlEsVUFBckI7QUFDQU4sNEJBQW9CLENBQUN6RCxXQUFyQixDQUFpQzZELE1BQWpDO0FBQ0QsT0FMRDtBQU9BdkIsaUJBQVcsQ0FBQ1AsSUFBWixDQUFpQjBCLG9CQUFqQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU1EsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDekI7QUFDQTtBQUNBLFFBQUlDLGlCQUFpQixHQUFHNUIsYUFBYSxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsUUFBZixFQUF5QixRQUF6QixDQUFyQyxDQUh5QixDQUt6Qjs7QUFDQUQsZUFBVyxDQUFDOUQsT0FBWixDQUFvQjRGLFNBQVMsSUFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUlDLHNCQUFzQixHQUFJLFlBQVc7QUFDdkMsWUFBSUQsU0FBUyxDQUFDRSxPQUFWLENBQWtCRixTQUFTLENBQUNHLGFBQTVCLEVBQTJDUCxLQUEzQyxLQUFxRCxXQUF6RCxFQUNFLE9BQU90QixPQUFPLENBQUMwQixTQUFTLENBQUNSLElBQVgsQ0FBZCxDQURGLEtBRUssT0FBT1EsU0FBUyxDQUFDRSxPQUFWLENBQWtCRixTQUFTLENBQUNHLGFBQTVCLEVBQTJDUCxLQUFsRDtBQUNOLE9BSjRCLEVBQTdCLENBTCtCLENBVy9COzs7QUFDQSxVQUFJUSxLQUFLLENBQUNDLE9BQU4sQ0FBY0osc0JBQWQsQ0FBSixFQUEyQztBQUN6Q0EsOEJBQXNCLENBQUM3RixPQUF2QixDQUErQmtHLEVBQUUsSUFDL0JQLGlCQUFpQixDQUFDQyxTQUFTLENBQUNSLElBQVgsQ0FBakIsQ0FBa0M3QixJQUFsQyxDQUF1QzJDLEVBQXZDLENBREY7QUFHRCxPQUpELE1BSU9QLGlCQUFpQixDQUFDQyxTQUFTLENBQUNSLElBQVgsQ0FBakIsQ0FBa0M3QixJQUFsQyxDQUF1Q3NDLHNCQUF2QztBQUNSLEtBakJEO0FBbUJBLFFBQUlNLGdCQUFnQixHQUFHeEMsSUFBSSxDQUFDeUMsTUFBTCxDQUFZaEMsR0FBRyxJQUFJO0FBQ3hDLFVBQUk7QUFDRmlDLFdBREU7QUFFRkMsY0FGRTtBQUdGQyxjQUFNLEVBQUU7QUFBRWpDLGlCQUFPLEVBQUVpQztBQUFYO0FBSE4sVUFJQW5DLEdBSko7QUFNQSxVQUFJb0MsT0FBTyxHQUFHYixpQkFBaUIsQ0FBQ1UsR0FBbEIsQ0FBc0JJLElBQXRCLENBQTJCakIsS0FBSyxJQUFJQSxLQUFLLEtBQUthLEdBQTlDLENBQWQ7QUFFQSxVQUFJSyxVQUFVLEdBQUdmLGlCQUFpQixDQUFDVyxNQUFsQixDQUF5QkcsSUFBekIsQ0FDZmpCLEtBQUssSUFBSUEsS0FBSyxLQUFLYyxNQURKLENBQWpCO0FBSUEsVUFBSUssU0FBUyxHQUFHaEIsaUJBQWlCLENBQUNZLE1BQWxCLENBQXlCRSxJQUF6QixDQUNkakIsS0FBSyxJQUFJQSxLQUFLLEtBQUtlLE1BREwsQ0FBaEI7QUFJQSxVQUFJQyxPQUFPLElBQUlFLFVBQVgsSUFBeUJDLFNBQTdCLEVBQXdDLE9BQU8sSUFBUDtBQUN6QyxLQWxCc0IsQ0FBdkI7QUFvQkF4RSxXQUFPLENBQUNDLEdBQVIsQ0FBWStELGdCQUFaO0FBRUFTLGtCQUFjLENBQUNULGdCQUFELENBQWQ7QUFDRDs7QUFFRCxXQUFTUyxjQUFULENBQXdCQyxzQkFBeEIsRUFBZ0Q7QUFDOUMsUUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQ0ExRixZQUFRLENBQUMyRixTQUFULEdBQXFCLEVBQXJCLENBRjhDLENBSTlDOztBQUNBRiwwQkFBc0IsQ0FBQzdHLE9BQXZCLENBQStCb0UsR0FBRyxJQUFJO0FBQ3BDLFlBQU00QyxPQUFPLEdBQUc5RixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQTJGLGFBQU8sQ0FBQzFGLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQXRCO0FBQ0FILGNBQVEsQ0FBQ0ksV0FBVCxDQUFxQndGLE9BQXJCLEVBSG9DLENBS3BDOztBQUVBLFlBQU1DLFdBQVcsR0FBRy9GLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBNEYsaUJBQVcsQ0FBQzNGLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGNBQTFCLEVBQTBDLDBCQUExQztBQUVBLFlBQU0yRixvQkFBb0IsR0FBR2hHLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixTQUF2QixDQUE3QjtBQUNBNkYsMEJBQW9CLENBQUM1RixTQUFyQixDQUErQkMsR0FBL0IsQ0FBbUMsdUJBQW5DO0FBRUEsWUFBTTRGLGdCQUFnQixHQUFHakcsUUFBUSxDQUFDRyxhQUFULENBQXVCLEtBQXZCLENBQXpCO0FBQ0E4RixzQkFBZ0IsQ0FBQzdGLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixtQkFBL0IsRUFBb0QsaUJBQXBELEVBZG9DLENBZXBDOztBQUNBLFVBQUk2QyxHQUFHLENBQUNnRCxNQUFKLElBQWNoRCxHQUFHLENBQUNnRCxNQUFKLENBQVdDLE1BQVgsR0FBb0IsQ0FBdEMsRUFBeUM7QUFDdkNGLHdCQUFnQixDQUFDRyxHQUFqQixHQUF1QmxELEdBQUcsQ0FBQ2dELE1BQUosQ0FBVyxDQUFYLEVBQWNHLE1BQXJDO0FBQ0QsT0FGRCxNQUVPO0FBQ0xKLHdCQUFnQixDQUFDRyxHQUFqQixHQUNFLDZFQURGO0FBRUQ7O0FBQ0RILHNCQUFnQixDQUFDSyxHQUFqQixHQUF1QnBELEdBQUcsQ0FBQ2dCLElBQTNCO0FBRUE4QiwwQkFBb0IsQ0FBQzFGLFdBQXJCLENBQWlDMkYsZ0JBQWpDO0FBQ0FGLGlCQUFXLENBQUN6RixXQUFaLENBQXdCMEYsb0JBQXhCO0FBRUFGLGFBQU8sQ0FBQzFCLE1BQVIsQ0FBZTJCLFdBQWY7QUFFQUQsYUFBTyxDQUFDUyxnQkFBUixDQUF5QixZQUF6QixFQUF1Qy9CLENBQUMsSUFBSTtBQUMxQztBQUVBLGNBQU1nQyxnQkFBZ0IsR0FBR3hHLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixHQUF2QixDQUF6QjtBQUNBcUcsd0JBQWdCLENBQUNwRyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsbUJBQS9CO0FBQ0FtRyx3QkFBZ0IsQ0FBQ0MsS0FBakIsQ0FBdUJDLE9BQXZCLEdBQWlDLE1BQWpDO0FBRUEsY0FBTUMsY0FBYyxHQUFHM0csUUFBUSxDQUFDRyxhQUFULENBQXVCLEtBQXZCLENBQXZCO0FBQ0F3RyxzQkFBYyxDQUFDdkcsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsU0FBN0IsRUFBd0MsaUJBQXhDO0FBQ0FzRyxzQkFBYyxDQUFDUCxHQUFmLEdBQXFCLHVCQUFyQjtBQUNBTyxzQkFBYyxDQUFDTCxHQUFmLEdBQXFCLE9BQXJCO0FBRUEsY0FBTU0sYUFBYSxHQUFHNUcsUUFBUSxDQUFDRyxhQUFULENBQXVCLEdBQXZCLENBQXRCO0FBQ0F5RyxxQkFBYSxDQUFDQyxJQUFkLEdBQXFCM0QsR0FBRyxDQUFDekMsR0FBekI7QUFFQSxjQUFNcUcsY0FBYyxHQUFHOUcsUUFBUSxDQUFDK0csY0FBVCxDQUNyQjFILGtCQUFrQixDQUFDNkQsR0FBRyxDQUFDOEQsV0FBTCxDQURHLENBQXZCLENBZjBDLENBbUIxQzs7QUFDQUoscUJBQWEsQ0FBQ3RHLFdBQWQsQ0FBMEJxRyxjQUExQjtBQUNBSCx3QkFBZ0IsQ0FBQ3BDLE1BQWpCLENBQXdCMEMsY0FBeEI7QUFDQU4sd0JBQWdCLENBQUNsRyxXQUFqQixDQUE2QnNHLGFBQTdCO0FBQ0FkLGVBQU8sQ0FBQ3hGLFdBQVIsQ0FBb0JrRyxnQkFBcEI7QUFDRCxPQXhCRDtBQTBCQVYsYUFBTyxDQUFDUyxnQkFBUixDQUF5QixZQUF6QixFQUF1Qy9CLENBQUMsSUFBSTtBQUMxQ0EsU0FBQyxDQUFDeUMsYUFBRixDQUFnQkMsYUFBaEIsQ0FDR2pILGFBREgsQ0FDaUIsb0JBRGpCLEVBRUdrSCxNQUZIO0FBR0QsT0FKRCxFQXZEb0MsQ0E2RHBDOztBQUNBLFlBQU1DLGFBQWEsR0FBR3BILFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixJQUF2QixDQUF0QjtBQUNBaUgsbUJBQWEsQ0FBQ2hILFNBQWQsQ0FBd0JDLEdBQXhCLENBQ0UsU0FERixFQUVFLGlCQUZGLEVBR0UsZ0JBSEYsRUFJRSxNQUpGLEVBS0Usa0JBTEYsRUFNRSxvQkFORjtBQVFBK0csbUJBQWEsQ0FBQzlHLFdBQWQsQ0FDRU4sUUFBUSxDQUFDK0csY0FBVCxDQUNHLEdBQUVuQixVQUFVLEVBQUcsS0FBSXZHLGtCQUFrQixDQUFDNkQsR0FBRyxDQUFDZ0IsSUFBTCxDQUFXLEVBRG5ELENBREY7QUFLQTRCLGFBQU8sQ0FBQ3hGLFdBQVIsQ0FBb0I4RyxhQUFwQjtBQUNELEtBN0VEO0FBOEVELEdBck5XLENBdU5aOzs7QUFDQSxNQUFJcEUsT0FBTyxHQUFHSCxhQUFhLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxRQUFkLEVBQXdCLFFBQXhCLENBQTNCO0FBRUFRLGVBQWEsQ0FBQ0wsT0FBRCxDQUFiO0FBRUFKLGFBQVcsQ0FBQzlELE9BQVosQ0FBb0I0RixTQUFTLElBQUk7QUFDL0JBLGFBQVMsQ0FBQzZCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDaEMsY0FBckM7QUFDRCxHQUZEO0FBSUFBLGdCQUFjO0FBQ2YsQ0FsT0gsRUFtT0duRCxLQW5PSCxDQW1PU0MsS0FBSyxJQUFJO0FBQ2RKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRyxLQUFaO0FBQ0QsQ0FyT0g7QUF1T0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1pBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7OztBQ3ZCQSxpQkFBaUIscUJBQXVCLDRCOzs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1Qix5Qjs7Ozs7O0FDQXhDLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCOzs7Ozs7QUN0QkEsaUJBQWlCLHFCQUF1QixvQjs7Ozs7O0FDQXhDLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsTUFBTWdHLGFBQWEsR0FBR3JILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBdEI7QUFFQXFILE1BQU0sQ0FBQ2YsZ0JBQVAsQ0FDRSxNQURGLEVBRUUsTUFBTTtBQUNKLE1BQUljLGFBQUosRUFBbUJBLGFBQWEsQ0FBQ2pILFNBQWQsQ0FBd0IrRyxNQUF4QixDQUErQixlQUEvQjtBQUNwQixDQUpILEVBS0UsS0FMRixFOzs7Ozs7QUNGQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1Qzs7Ozs7O0FDQUEsdUM7Ozs7OztBQ0FBLHVDOzs7Ozs7QUNBQSx1QyIsImZpbGUiOiJzY3JpcHRzLmE3MTgyMTllM2MxYWY4ODYxZDM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKioqKioqKioqKioqXG4gKiBHUkFQSElDUyAqXG4gKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiByZXF1aXJlRmlsZXMocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpO1xufVxuLy8gcmVxdWlyZSBpbWFnZXMgdW5yZWxhdGVkIHRvIGNvbXBvbmVudHNcbnJlcXVpcmVGaWxlcyhyZXF1aXJlLmNvbnRleHQoXCIuL2ltZy9cIiwgdHJ1ZSwgLyhzdmd8cG5nfGpwZykkLykpO1xuXG4vKioqKioqKioqKioqKlxuICogQ1NTIFJFU0VUICpcbiAqKioqKioqKioqKioqL1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9fcmVzZXQuc2Nzc1wiO1xuXG4vKioqKioqKioqKlxuICogQkxPQ0tTICpcbiAqKioqKioqKioqL1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy90ZXh0L190ZXh0LnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvaGVhZGluZy9faGVhZGluZy5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL2xpbmsvX2xpbmsuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9pbWctcmFzdGVyL19pbWctcmFzdGVyLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvaWNvbnMvX2ljb25zLnNjc3NcIjtcbnJlcXVpcmVGaWxlcyhyZXF1aXJlLmNvbnRleHQoXCIuL2Jsb2Nrcy9pY29ucy9cIiwgdHJ1ZSwgLyhzdmd8cG5nfGpwZykkLykpO1xuaW1wb3J0IFwiLi9ibG9ja3MvZm9ybS1ncm91cC9fZm9ybS1ncm91cC5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL3NlbGVjdC9fc2VsZWN0LnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvcGFnZS9fcGFnZS5zY3NzXCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9wYWdlL3BhZ2UuanNcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvaW1nLXN2Zy9faW1nLXN2Zy5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL2Zvcm0tZ3JvdXAvX2Zvcm0tZ3JvdXAuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9tYWluL19tYWluLnNjc3NcIjtcblxuaW1wb3J0IFwiLi9ibG9ja3MvaGVhZGVyL19oZWFkZXIuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9mb290ZXIvX2Zvb3Rlci5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL3BldC1jYXJkL19wZXQtY2FyZC5zY3NzXCI7XG5cbmltcG9ydCBcIi4vYmxvY2tzL2ZpbHRlcnMvX2ZpbHRlcnMuc2Nzc1wiO1xuXG5pbXBvcnQgXCIuL2Jsb2Nrcy9wZXRzLWxpc3QvX3BldHMtbGlzdC5zY3NzXCI7XG5cbi8qKioqKioqKioqKioqKipcbiAqIEFQUExJQ0FUSU9OICpcbiAqKioqKioqKioqKioqKiovXG5cbi8qXG4gIFBldGZpbmRlLmNvbSBBUEkgRG9jOiBodHRwczovL3d3dy5wZXRmaW5kZXIuY29tL2RldmVsb3BlcnMvdjIvZG9jcy9cbiAgSG93IHRvIGF1dGg6IGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS91c2luZy1vYXV0aC13aXRoLWZldGNoLWluLXZhbmlsbGEtanMvXG5cbiAgRnJvbSBodHRwczovL3d3dy5wZXRmaW5kZXIuY29tL2RldmVsb3BlcnMvIDpcbiAgQmFzaWMgYWNjZXNzIGlzIGdyYW50ZWQgYXV0b21hdGljYWxseSBhZnRlciBjb2xsZWN0aW5nIGEgZmV3IGRldGFpbHMgYW5kIHdpbGwgYWxsb3cgeW91IHRvIG1ha2UgdXAgdG8gMSwwMDAgcmVxdWVzdHMvZGF5LCB3aXRoIGEgcmF0ZSBsaW1pdCBvZiA1MCByZXF1ZXN0cy9zZWNvbmQuIElmIHlvdSBuZWVkIHBldENhcmRfX2Fycm93IGJhbmR3aWR0aCwgeW91IGNhbiByZXF1ZXN0IHBldENhcmRfX2Fycm93IG9uY2UgeW91IGhhdmUgeW91ciBiYXNpYyBrZXlcbiAgKi9cblxuLy8tIEhlbHBlciBmdW5jdGlvbnM6XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlSFRNTGVudGl0aWVzKHN0cikge1xuICBsZXQgbmV3U3RyID0gc3RyO1xuXG4gIGNvbnN0IHF1b3Rlc1BhdHRlcm4gPSAvJmFtcDsjMzQ7fCYjMzQ7fCZhbXA7IzM5O3wmIzM5Oy9nO1xuICBjb25zdCBhbXBlcnNhbmRQYXR0ZXJuID0gLyZhbXA7YW1wO3wmYW1wOy9nO1xuXG4gIGlmIChxdW90ZXNQYXR0ZXJuLnRlc3QobmV3U3RyKSkgbmV3U3RyID0gbmV3U3RyLnJlcGxhY2UocXVvdGVzUGF0dGVybiwgXCInXCIpO1xuICBpZiAoYW1wZXJzYW5kUGF0dGVybi50ZXN0KG5ld1N0cikpXG4gICAgbmV3U3RyID0gbmV3U3RyLnJlcGxhY2UoYW1wZXJzYW5kUGF0dGVybiwgXCImXCIpO1xuXG4gIHJldHVybiBuZXdTdHI7XG59XG5cbi8vLVxuXG5jbGFzcyBNb2RlbCB7fVxuXG5jbGFzcyBWaWV3IHt9XG5cbmNsYXNzIENvbnRyb2xsZXIge31cblxuY29uc3QgYXBwID0gbmV3IENvbnRyb2xsZXIobmV3IE1vZGVsKCksIG5ldyBWaWV3KCkpO1xuXG4vLy1cblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcblxuY29uc3QgcGV0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucGV0c0xpc3QuY2xhc3NMaXN0LmFkZChcInBldHMtbGlzdFwiKTtcbm1haW4uYXBwZW5kQ2hpbGQocGV0c0xpc3QpO1xuXG4vLyBBUEkgYXV0aC4gZGF0YTpcbmNvbnN0IHBldGZpbmRlckFQSWtleSA9IFwib0t6S2hYUVpaN3o2VmdxcGpaZjhjajEzTFRIUFpJTVZwSWVNUXpFTUl5YjkwcVF3RVFcIjtcbmNvbnN0IHBldGZpbmRlclNlY3JldCA9IFwidEhkMko2cjl5dU43bDBxcFh6azNvYkJLRHd3QnFrNDlaQmM2TExGb1wiO1xuY29uc3QgdXJsID0gXCJodHRwczovL2FwaS5wZXRmaW5kZXIuY29tL3YyL29hdXRoMi90b2tlblwiO1xuXG4vLyBhdXRob3JpemUgaW4gQVBJOlxubGV0IGF1dGhvcml6ZUluQVBJID0gZmV0Y2godXJsLCB7XG4gIG1ldGhvZDogXCJQT1NUXCIsXG4gIGJvZHk6IGBncmFudF90eXBlPWNsaWVudF9jcmVkZW50aWFscyZjbGllbnRfaWQ9JHtwZXRmaW5kZXJBUElrZXl9JmNsaWVudF9zZWNyZXQ9JHtwZXRmaW5kZXJTZWNyZXR9YCxcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gIH0sXG59KVxuICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIC8vY2FjaGVzLmFkZEFsbChyZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH0pO1xuXG4vLyByZXF1ZXN0IGFsbCBhdmFpbGFibGUgcGFnZXMgd2l0aCBwZXRzOlxubGV0IHJlcXVlc3RBbGxQYWdlcyA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAvLyBhcnJheSB0byBzdG9yZSByZWNpZXZlZCBwYWdlczpcbiAgY29uc3QgcGFnZXMgPSBbXTtcblxuICBmdW5jdGlvbiByZXF1ZXN0UGFnZShwYWdlTnVtYmVyID0gMSkge1xuICAgIC8vY29uc29sZS5sb2coJ2NhbGwnKTtcbiAgICByZXR1cm4gYXV0aG9yaXplSW5BUElcbiAgICAgIC50aGVuKE9BdXRoVG9rZW4gPT4ge1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IFwiYW5pbWFsc1wiO1xuICAgICAgICAvLyBQZXRmaW5kZXIgSUQgZm9yIFBBV1MgTmV3IEVuZ2xhbmQsIGFuIGFuaW1hbCByZXNjdWUgb3JnYW5pemF0aW9uOlxuICAgICAgICBjb25zdCBvcmdhbml6YXRpb25JRCA9IFwiUkk3N1wiO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBcImFkb3B0YWJsZVwiO1xuICAgICAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSAxMDA7IC8vIChkZWZhdWx0ID0gMjAsIG1heCA9IDEwMClcblxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkucGV0ZmluZGVyLmNvbS92Mi8ke2NhdGVnb3J5fT9vcmdhbml6YXRpb249JHtvcmdhbml6YXRpb25JRH0mc3RhdHVzPSR7c3RhdHVzfSZwYWdlPSR7cGFnZU51bWJlcn0mbGltaXQ9JHtpdGVtc1BlclBhZ2V9YDtcblxuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjpcbiAgICAgICAgICAgICAgT0F1dGhUb2tlbi50b2tlbl90eXBlICsgXCIgXCIgKyBPQXV0aFRva2VuLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHBhZ2UgPT4ge1xuICAgICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdyZXF1ZXN0IHRoZSBuZXh0IHJlc3VsdHMgcGFnZSBmcm9tIEFQSScpO1xuICAgICAgICAvLyByZXF1ZXN0IG5leHQgYXZhaWxhYmxlIHBhZ2UgdGhyb3VnaCByZWN1cnNpdmUgZnVuY3Rpb24gY2FsbDpcbiAgICAgICAgLy8gKCdwYWdlLnBhZ2luYXRpb24uX2xpbmtzJyBtdXN0IHJldHVybiAndHJ1ZScgY2F1c2UgaWYgdGhlcmUgaXMgbm9cbiAgICAgICAgLy8gbmV4dCBwYWdlLCAncGFnZS5wYWdpbmF0aW9uLl9saW5rcycgcHJvcGVydHkgaXMgYWJzZW50IGkuZS5cbiAgICAgICAgLy8gJ3VuZGVmaW5lZCcsIHNvIHRoZSBhdHRlbXB0IHRvIHJlYWQgJy5uZXh0JyBwcm9wZXJ0eSBvZiAndW5kZWZpbmVkJ1xuICAgICAgICAvLyB3aWxsIHRocm93IGFuIGVycm9yKVxuICAgICAgICBpZiAocGFnZS5wYWdpbmF0aW9uLl9saW5rcyAmJiBwYWdlLnBhZ2luYXRpb24uX2xpbmtzLm5leHQpXG4gICAgICAgICAgcmVxdWVzdFBhZ2UoKytwYWdlTnVtYmVyKTtcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vbmUgcGFnZXMgbGVmdCwgcmVzb2x2ZSBwcm9taXNlIHdpdGggYW4gYXJyYXlcbiAgICAgICAgLy8gb2YgYWxsIHJlY2VpdmVkIHBhZ2VzIChlYWNoIHBhZ2UgcmVwcmVzZW50ZWQgYXMgYW4gb2JqZWN0KTpcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy8gbWFyZ2UgcGV0cyBmcm9tIGFsbCBwYWdlcy1vYmplY3RzIGludG8gb25lIGFycmF5IG9mIHBldHM6XG4gICAgICAgICAgbGV0IHBldHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBwYWdlIG9mIHBhZ2VzKSBwZXRzLnB1c2goLi4ucGFnZS5hbmltYWxzKTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHBldHMpO1xuICAgICAgICAgIHJlc29sdmUocGV0cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdFBhZ2UoKTtcbn0pO1xuXG5yZXF1ZXN0QWxsUGFnZXNcbiAgLnRoZW4ocGV0cyA9PiB7XG4gICAgLy8gc3RvcmUgYWxsIGNyZWF0ZWQgJ3NlbGVjdCcgYm94ZXMgaW4gYXJyYXk6XG4gICAgbGV0IHNlbGVjdEJveGVzID0gW107XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGaWx0ZXJzKGFzc2lnblZhbHVlcywgLi4uZmlsdGVyTmFtZXMpIHtcbiAgICAgIC8vIGZvciBlYWNoIGZpbHRlciBuYW1lIGNyZWF0ZSBwcm9wZXJ0eSBpbiBvYmplY3QgYW5kIGFzc2lnbiBpdCBhbiBlbXB0eSBhcnJheVxuICAgICAgbGV0IGZpbHRlcnMgPSB7fTtcbiAgICAgIGZpbHRlck5hbWVzLmZvckVhY2gocHJvcE5hbWUgPT4gKGZpbHRlcnNbcHJvcE5hbWVdID0gW10pKTtcblxuICAgICAgaWYgKGFzc2lnblZhbHVlcykge1xuICAgICAgICAvLyBjb2xsZWN0IGRhdGEgZnJvbSBhbGwgcGV0cyAodG8gdXNlIGl0IGFzIHNlbGVjdCBib3ggdmFsdWVzIGxhdGVyKTpcbiAgICAgICAgcGV0cy5mb3JFYWNoKHBldCA9PiB7XG4gICAgICAgICAgZmlsdGVyTmFtZXMuZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHByb3BOYW1lICE9PSBcImJyZWVkc1wiICYmXG4gICAgICAgICAgICAgICFmaWx0ZXJzW3Byb3BOYW1lXS5pbmNsdWRlcyhwZXRbcHJvcE5hbWVdKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGZpbHRlcnNbcHJvcE5hbWVdLnB1c2gocGV0W3Byb3BOYW1lXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICBwcm9wTmFtZSA9PT0gXCJicmVlZHNcIiAmJlxuICAgICAgICAgICAgICAhZmlsdGVyc1twcm9wTmFtZV0uaW5jbHVkZXMocGV0W3Byb3BOYW1lXS5wcmltYXJ5KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGZpbHRlcnNbcHJvcE5hbWVdLnB1c2gocGV0W3Byb3BOYW1lXS5wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWx0ZXJzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckZpbHRlcnMoZmlsdGVyc09iaikge1xuICAgICAgY29uc29sZS5sb2coXCJmaWx0ZXJzT2JqOiBcIiwgZmlsdGVyc09iaik7XG4gICAgICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZpbHRlcnMuY2xhc3NOYW1lID0gXCJmaWx0ZXJzXCI7XG4gICAgICBtYWluLmluc2VydEJlZm9yZShmaWx0ZXJzLCBtYWluLmZpcnN0Q2hpbGQpO1xuXG4gICAgICAvLyBjcmVhdGUgc2VsZWN0IGJveDogZm9yIGVhY2ggZmlsdGVyIGFuZCBwb3B1bGF0ZSBpdCB3aXRoIG9wdGlvbnNcbiAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGZpbHRlcnNPYmopIHtcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9ybUdyb3VwLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWdyb3VwXCIsIFwiZm9ybS1ncm91cF9jb2xcIik7XG4gICAgICAgIGZpbHRlcnMuYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKTtcblxuICAgICAgICBjb25zdCBmb3JtR3JvdXBfX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBmb3JtR3JvdXBfX2xhYmVsLmZvciA9IGBzZWxlY3Rib3gtJHtwcm9wTmFtZX1gO1xuICAgICAgICBmb3JtR3JvdXBfX2xhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgXCJmb3JtLWdyb3VwX19sYWJlbFwiLFxuICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgIFwidGV4dF9jb2xvcl9ibGFja1wiXG4gICAgICAgICk7XG4gICAgICAgIGZvcm1Hcm91cF9fbGFiZWwudGV4dENvbnRlbnQgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIocHJvcE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Hcm91cF9fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9ybUdyb3VwX19jb250YWluZXIuY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwX19jb250YWluZXJcIjtcblxuICAgICAgICAvLyBjcmVhdGUgc2VsZWN0IGJveFxuICAgICAgICBjb25zdCBmb3JtR3JvdXBfX3NlbGVjdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIGZvcm1Hcm91cF9fc2VsZWN0Ym94LmlkID0gYHNlbGVjdGJveC0ke3Byb3BOYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZm9ybUdyb3VwX19zZWxlY3Rib3guY2xhc3NOYW1lID0gXCJmb3JtLWdyb3VwX19zZWxlY3Rib3hcIjtcbiAgICAgICAgZm9ybUdyb3VwX19zZWxlY3Rib3gubmFtZSA9IHByb3BOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGZvcm1Hcm91cF9fY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Hcm91cF9fc2VsZWN0Ym94KTtcblxuICAgICAgICAvLyBjcmVhdGUgJ29wdGlvbicgaW5zaWRlIHNlbGVjdCBib3hcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYHNlbGVjdC4uLmA7XG4gICAgICAgIGZvcm1Hcm91cF9fc2VsZWN0Ym94LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIGZvcm1Hcm91cC5hcHBlbmQoZm9ybUdyb3VwX19sYWJlbCwgZm9ybUdyb3VwX19jb250YWluZXIpO1xuXG4gICAgICAgIC8vIGZvciBlYWNoIG9wdGlvbiBpbiBzZWxlY3QgbGlzdDpcbiAgICAgICAgZmlsdGVyc09ialtwcm9wTmFtZV0uZm9yRWFjaChvcHRpb25OYW1lID0+IHtcbiAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvbk5hbWU7XG4gICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uTmFtZTtcbiAgICAgICAgICBmb3JtR3JvdXBfX3NlbGVjdGJveC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3RCb3hlcy5wdXNoKGZvcm1Hcm91cF9fc2VsZWN0Ym94KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJQZXRzTGlzdChlKSB7XG4gICAgICAvLyBjcmVhdGUgZmlsdGVycyBvYmplY3QgYnV0IGRvbid0IHBvcHVsYXRlIGl0cyBwcm9wcyB3aXRoIHZhbHVlcywganVzdFxuICAgICAgLy8gYXNzaWduIGVhY2ggcHJvcCBhbiBlbXB0eSBhcnJheVxuICAgICAgbGV0IGN1cnJlbnRseVNlbGVjdGVkID0gY3JlYXRlRmlsdGVycyhmYWxzZSwgXCJhZ2VcIiwgXCJnZW5kZXJcIiwgXCJicmVlZHNcIik7XG5cbiAgICAgIC8vIGdldCBjdXJyZW50bHkgc2VsZWN0ZWQgdmFsdWUgb2YgZXZlcnkgc2VsZWN0IGJveCBvbiBhIHBhZ2U6XG4gICAgICBzZWxlY3RCb3hlcy5mb3JFYWNoKHNlbGVjdEJveCA9PiB7XG4gICAgICAgIC8vIGlmIHNlbGVjdCBib3ggaGFzIGEgZGVmYXVsdCBzdGF0ZSAoJ3NlbGVjdCwsLCcgaXMgc2VsZWN0ZWQgYnlcbiAgICAgICAgLy8gZGVmYXVsdCksIGl0IG1lYW5zIHRoYXQgQUxMIG9wdGlvbnMgc2VsZWN0ZWQsIHNvIHdlIHJldHVybiB0aGVcbiAgICAgICAgLy8gZW50aXJlIGFycmF5IG9mIHZhbHVlcyBmcm9tIGZpbHRlcnNbc2VsZWN0Qm94Lm5hbWVdLiBPdGhlcndpc2Ugd2VcbiAgICAgICAgLy8gcmV0dXJuIGFuIGFycmF5IHdpdGggc2VsZWN0ZWQgb3B0aW9uIG9ubHlcbiAgICAgICAgbGV0IGN1cnJlbnRseVNlbGVjdGVkVmFsdWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHNlbGVjdEJveC5vcHRpb25zW3NlbGVjdEJveC5zZWxlY3RlZEluZGV4XS52YWx1ZSA9PT0gXCJzZWxlY3QuLi5cIilcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzW3NlbGVjdEJveC5uYW1lXTtcbiAgICAgICAgICBlbHNlIHJldHVybiBzZWxlY3RCb3gub3B0aW9uc1tzZWxlY3RCb3guc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgLy8gaWYgaXRlbSBpcyBhcnJheSwgZXh0cmFjdDpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudGx5U2VsZWN0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICBjdXJyZW50bHlTZWxlY3RlZFZhbHVlLmZvckVhY2goZWwgPT5cbiAgICAgICAgICAgIGN1cnJlbnRseVNlbGVjdGVkW3NlbGVjdEJveC5uYW1lXS5wdXNoKGVsKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBjdXJyZW50bHlTZWxlY3RlZFtzZWxlY3RCb3gubmFtZV0ucHVzaChjdXJyZW50bHlTZWxlY3RlZFZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBsZXQgZmlsdGVyZWRQZXRzTGlzdCA9IHBldHMuZmlsdGVyKHBldCA9PiB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgYWdlLFxuICAgICAgICAgIGdlbmRlcixcbiAgICAgICAgICBicmVlZHM6IHsgcHJpbWFyeTogYnJlZWRzIH0sXG4gICAgICAgIH0gPSBwZXQ7XG5cbiAgICAgICAgbGV0IHRlc3RBZ2UgPSBjdXJyZW50bHlTZWxlY3RlZC5hZ2Uuc29tZSh2YWx1ZSA9PiB2YWx1ZSA9PT0gYWdlKTtcblxuICAgICAgICBsZXQgdGVzdEdlbmRlciA9IGN1cnJlbnRseVNlbGVjdGVkLmdlbmRlci5zb21lKFxuICAgICAgICAgIHZhbHVlID0+IHZhbHVlID09PSBnZW5kZXJcbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgdGVzdEJyZWVkID0gY3VycmVudGx5U2VsZWN0ZWQuYnJlZWRzLnNvbWUoXG4gICAgICAgICAgdmFsdWUgPT4gdmFsdWUgPT09IGJyZWVkc1xuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0ZXN0QWdlICYmIHRlc3RHZW5kZXIgJiYgdGVzdEJyZWVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFBldHNMaXN0KTtcblxuICAgICAgcmVuZGVyUGV0Q2FyZHMoZmlsdGVyZWRQZXRzTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUGV0Q2FyZHMoY3VycmVudFNlbGVjdEJveFZhbHVlcykge1xuICAgICAgbGV0IGNhcmROdW1iZXIgPSAxO1xuICAgICAgcGV0c0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgICAgLy8gZm9yIGVhY2ggcGV0IG9iamVjdDpcbiAgICAgIGN1cnJlbnRTZWxlY3RCb3hWYWx1ZXMuZm9yRWFjaChwZXQgPT4ge1xuICAgICAgICBjb25zdCBwZXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGV0Q2FyZC5jbGFzc0xpc3QuYWRkKFwicGV0LWNhcmRcIik7XG4gICAgICAgIHBldHNMaXN0LmFwcGVuZENoaWxkKHBldENhcmQpO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgcGV0IHBob3RvczpcblxuICAgICAgICBjb25zdCBpbWFnZVJhc3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWd1cmVcIik7XG4gICAgICAgIGltYWdlUmFzdGVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1yYXN0ZXJcIiwgXCJpbWFnZS1yYXN0ZXJfdGhlbWVfYmxhY2tcIik7XG5cbiAgICAgICAgY29uc3QgaW1hZ2VSYXN0ZXJfX3dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGljdHVyZVwiKTtcbiAgICAgICAgaW1hZ2VSYXN0ZXJfX3dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImltYWdlLXJhc3Rlcl9fd3JhcHBlclwiKTtcblxuICAgICAgICBjb25zdCBpbWFnZVJhc3Rlcl9faW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2VSYXN0ZXJfX2ltZy5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtcmFzdGVyX19pbWdcIiwgXCJwZXQtY2FyZF9fcGhvdG9cIik7XG4gICAgICAgIC8vIHNvbWV0aW1lcyB0aGVyZSBpcyBubyBwaG90b3MgZm9yIGEgcGV0IGF0IGFsbCwgc28gbGV0J3MgcHJldmVudCBhbiBlcnJvcjogZmlyc3QgY2hlY2sgaWYgdGhlIHByb3BlcnR5IGlzICdudWxsJyBvciAndW5kZWZpbmVkJyBhbmQgdGhlbiAoJiYpIGNoZWNrIGlmIHRoZSBwZXQucGhvdG9zLmxlbmd0aCA+IDBcbiAgICAgICAgaWYgKHBldC5waG90b3MgJiYgcGV0LnBob3Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW1hZ2VSYXN0ZXJfX2ltZy5zcmMgPSBwZXQucGhvdG9zWzBdLm1lZGl1bTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbWFnZVJhc3Rlcl9faW1nLnNyYyA9XG4gICAgICAgICAgICBcImh0dHBzOi8vdm9sbHJhdGguY29tL0NsaWVudENzcy9pbWFnZXMvVm9sbHJhdGhJbWFnZXMvTm9fSW1hZ2VfQXZhaWxhYmxlLmpwZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGltYWdlUmFzdGVyX19pbWcuYWx0ID0gcGV0Lm5hbWU7XG5cbiAgICAgICAgaW1hZ2VSYXN0ZXJfX3dyYXBwZXIuYXBwZW5kQ2hpbGQoaW1hZ2VSYXN0ZXJfX2ltZyk7XG4gICAgICAgIGltYWdlUmFzdGVyLmFwcGVuZENoaWxkKGltYWdlUmFzdGVyX193cmFwcGVyKTtcblxuICAgICAgICBwZXRDYXJkLmFwcGVuZChpbWFnZVJhc3Rlcik7XG5cbiAgICAgICAgcGV0Q2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBlID0+IHtcbiAgICAgICAgICAvLyBjcmVhdGUgb3ZlcmxheSBmb3IgcGV0IGRldGFpbHM6XG5cbiAgICAgICAgICBjb25zdCBwZXRDYXJkX19vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgcGV0Q2FyZF9fb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwicGV0LWNhcmRfX292ZXJsYXlcIik7XG4gICAgICAgICAgcGV0Q2FyZF9fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgICAgICBjb25zdCBwZXRDYXJkX19hcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgcGV0Q2FyZF9fYXJyb3cuY2xhc3NMaXN0LmFkZChcImltZy1zdmdcIiwgXCJwZXQtY2FyZF9fYXJyb3dcIik7XG4gICAgICAgICAgcGV0Q2FyZF9fYXJyb3cuc3JjID0gXCIuL2ltZy9yaWdodC1hcnJvdy5zdmdcIjtcbiAgICAgICAgICBwZXRDYXJkX19hcnJvdy5hbHQgPSBcIkFycm93XCI7XG5cbiAgICAgICAgICBjb25zdCBwZXRDYXJkX19saW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgcGV0Q2FyZF9fbGluay5ocmVmID0gcGV0LnVybDtcblxuICAgICAgICAgIGNvbnN0IHBldERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgICAgICBkZWNvZGVIVE1MZW50aXRpZXMocGV0LmRlc2NyaXB0aW9uKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBhcHBlbmQgb3ZlcmxheSB0byBwZXRDYXJkOlxuICAgICAgICAgIHBldENhcmRfX2xpbmsuYXBwZW5kQ2hpbGQocGV0Q2FyZF9fYXJyb3cpO1xuICAgICAgICAgIHBldENhcmRfX292ZXJsYXkuYXBwZW5kKHBldERlc2NyaXB0aW9uKTtcbiAgICAgICAgICBwZXRDYXJkX19vdmVybGF5LmFwcGVuZENoaWxkKHBldENhcmRfX2xpbmspO1xuICAgICAgICAgIHBldENhcmQuYXBwZW5kQ2hpbGQocGV0Q2FyZF9fb3ZlcmxheSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBldENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZSA9PiB7XG4gICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBldC1jYXJkX19vdmVybGF5XCIpXG4gICAgICAgICAgICAucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRpc3BsYXkgcGV0IG5hbWVcbiAgICAgICAgY29uc3QgcGV0Q2FyZF9fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgcGV0Q2FyZF9fbmFtZS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgIFwiaGVhZGluZ1wiLFxuICAgICAgICAgIFwiaGVhZGluZ19zaXplX2g1XCIsXG4gICAgICAgICAgXCJwZXQtY2FyZF9fbmFtZVwiLFxuICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgIFwidGV4dF9jb2xvcl93aGl0ZVwiLFxuICAgICAgICAgIFwidGV4dF9kaXNwbGF5X2Jsb2NrXCJcbiAgICAgICAgKTtcbiAgICAgICAgcGV0Q2FyZF9fbmFtZS5hcHBlbmRDaGlsZChcbiAgICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICAgIGAke2NhcmROdW1iZXIrK30uICR7ZGVjb2RlSFRNTGVudGl0aWVzKHBldC5uYW1lKX1gXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBwZXRDYXJkLmFwcGVuZENoaWxkKHBldENhcmRfX25hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8tXG4gICAgbGV0IGZpbHRlcnMgPSBjcmVhdGVGaWx0ZXJzKHRydWUsIFwiYWdlXCIsIFwiZ2VuZGVyXCIsIFwiYnJlZWRzXCIpO1xuXG4gICAgcmVuZGVyRmlsdGVycyhmaWx0ZXJzKTtcblxuICAgIHNlbGVjdEJveGVzLmZvckVhY2goc2VsZWN0Qm94ID0+IHtcbiAgICAgIHNlbGVjdEJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZpbHRlclBldHNMaXN0KTtcbiAgICB9KTtcblxuICAgIGZpbHRlclBldHNMaXN0KCk7XG4gIH0pXG4gIC5jYXRjaChlcnJvciA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9KTtcblxuLypcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBmdW5jdGlvbihldmVudCkge1xuICBjb25zb2xlLmxvZygnZmV0Y2ggbGlzdGVuZXInKTtcbiAgZXZlbnQucmVzcG9uZFdpdGgoXG4gICAgY2FjaGVzLm9wZW4oJ215c2l0ZS1keW5hbWljJykudGhlbihmdW5jdGlvbihjYWNoZSkge1xuICAgICAgcmV0dXJuIGNhY2hlLm1hdGNoKGV2ZW50LnJlcXVlc3QpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICByZXNwb25zZSB8fFxuICAgICAgICAgIGZldGNoKGV2ZW50LnJlcXVlc3QpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNhY2hlLnB1dChldmVudC5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSlcbiAgKTtcbn0pO1xuKi9cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9wZXRmaW5kZXItbG9nby5zdmdcIjogMyxcblx0XCIuL3JpZ2h0LWFycm93LnN2Z1wiOiA0XG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvcGV0ZmluZGVyLWxvZ28uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3JpZ2h0LWFycm93LnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9zcHJpdGUuc3ZnXCI6IDEyXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMTE7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3Nwcml0ZS5zdmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCBwYWdlX19wcmVsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlX19wcmVsb2FkXCIpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJsb2FkXCIsXG4gICgpID0+IHtcbiAgICBpZiAocGFnZV9fcHJlbG9hZCkgcGFnZV9fcHJlbG9hZC5jbGFzc0xpc3QucmVtb3ZlKFwicGFnZV9fcHJlbG9hZFwiKTtcbiAgfSxcbiAgZmFsc2Vcbik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9