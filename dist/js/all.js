/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/calculator.js":
/*!*****************************************!*\
  !*** ./src/js/components/calculator.js ***!
  \*****************************************/
/***/ ((module) => {

eval("function calculatorModule () {\r\n\tconst result = document.querySelector(\".calculating__result span\");\r\n\tlet gender, height, weight, age, ratio;\r\n\r\n\tfunction initStartSettings(key, value, variable) {\r\n\t\tif (localStorage.getItem(key)) {\r\n\t\t\tvariable = localStorage.getItem(key);\r\n\t\t} else {\r\n\t\t\tvariable = value;\r\n\t\t\tlocalStorage.setItem(key, value);\r\n\t\t}\r\n\t}\r\n\r\n\tinitStartSettings(\"gender\", \"female\", gender);\r\n\tinitStartSettings(\"ratio\", 1.375, ratio);\r\n\r\n\t// if (localStorage.getItem(\"gender\")) {\r\n\t// \tgender = localStorage.getItem(\"gender\");\r\n\t// } else {\r\n\t// \tgender = \"female\";\r\n\t// \tlocalStorage.setItem(\"gender\", \"female\");\r\n\t// }\r\n\r\n\t// if (localStorage.getItem(\"ratio\")) {\r\n\t// \tratio = localStorage.getItem(\"ratio\");\r\n\t// } else {\r\n\t// \tratio = 1.375;\r\n\t// \tlocalStorage.setItem(\"ratio\", 1.375);\r\n\t// }\r\n\r\n\tfunction calcTotal() {\r\n\t\tif (!gender || !height || !weight || !age || !ratio) {\r\n\t\t\tresult.textContent = \"_______\";\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (gender === \"female\") {\r\n\t\t\tresult.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);\r\n\t\t} else if (gender === \"male\") {\r\n\t\t\tresult.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);\r\n\t\t} else {\r\n\t\t\tresult.textContent = \"_______\";\r\n\t\t}\r\n\t}\r\n\r\n\tcalcTotal();\r\n\r\n\tfunction initLocalSettings(selector, activeClass) {\r\n\t\tconst elemenets = document.querySelectorAll(selector);\r\n\t\telemenets.forEach(elem => {\r\n\t\t\telem.classList.remove(activeClass);\r\n\r\n\t\t\tif (elem.getAttribute(\"id\") === localStorage.getItem(\"gender\")) {\r\n\t\t\t\telem.classList.add(activeClass);\r\n\t\t\t}\r\n\r\n\t\t\tif (elem.dataset.ratio === localStorage.getItem(\"ratio\")) {\r\n\t\t\t\telem.classList.add(activeClass);\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tinitLocalSettings(\"#gender div\", \"calculating__choose-item_active\");\r\n\tinitLocalSettings(\".calculating__choose_big div\", \"calculating__choose-item_active\");\r\n\r\n\tfunction getStaticInformation(selector, activeClass) {\r\n\t\tconst elements = document.querySelectorAll(selector);\r\n\r\n\t\telements.forEach(elem => {\r\n\t\t\telem.addEventListener(\"click\", (e) => {\r\n\t\t\t\tif (e.target.getAttribute(\"data-ratio\")) {\r\n\t\t\t\t\tratio = parseFloat(e.target.dataset.ratio);\r\n\t\t\t\t\tlocalStorage.setItem(\"ratio\", parseFloat(e.target.dataset.ratio));\r\n\t\t\t\t} else {\r\n\t\t\t\t\tgender = e.target.getAttribute(\"id\");\r\n\t\t\t\t\tlocalStorage.setItem(\"gender\", e.target.getAttribute(\"id\"));\r\n\t\t\t\t}\r\n\r\n\t\t\t\telements.forEach(elem => elem.classList.remove(activeClass));\r\n\t\t\t\te.target.classList.add(activeClass);\r\n\t\t\t\tcalcTotal();\r\n\t\t\t});\r\n\t\t})\r\n\t}\r\n\r\n\tgetStaticInformation(\"#gender div\", \"calculating__choose-item_active\");\r\n\tgetStaticInformation(\".calculating__choose_big div\", \"calculating__choose-item_active\");\r\n\r\n\tfunction getDynamicInformation(selector) {\r\n\t\tconst input = document.querySelector(selector);\r\n\r\n\t\tinput.addEventListener(\"input\", () => {\r\n\r\n\t\t\tif (input.value.match(/\\D/g)) {\r\n\t\t\t\tinput.style.border = \"1px solid #f00\";\r\n\t\t\t} else {\r\n\t\t\t\tinput.style.border = \"none\";\r\n\t\t\t}\r\n\r\n\t\t\tswitch (input.getAttribute(\"id\")) {\r\n\t\t\t\tcase \"height\":\r\n\t\t\t\t\theight = parseFloat(input.value);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"weight\":\r\n\t\t\t\t\tweight = parseFloat(input.value);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"age\":\r\n\t\t\t\t\tage = parseFloat(input.value);\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\tcalcTotal();\r\n\t}\r\n\r\n\tgetDynamicInformation(\"#height\");\r\n\tgetDynamicInformation(\"#weight\");\r\n\tgetDynamicInformation(\"#age\");\r\n}\r\n\r\nmodule.exports = calculatorModule;\n\n//# sourceURL=webpack://food-project/./src/js/components/calculator.js?");

/***/ }),

/***/ "./src/js/components/forms.js":
/*!************************************!*\
  !*** ./src/js/components/forms.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const spinner = __webpack_require__(/*! ./spinner */ \"./src/js/components/spinner.js\");\r\n\r\nfunction formsModule () {\r\n\tconst forms = document.querySelectorAll(\"form\");\r\n\tconst messages = {\r\n\t\tloading: spinner,\r\n\t\tsuccess: \"Thank you ! We will contact with you !\",\r\n\t\tfailure: \"Sorry, but something went wrong !\"\r\n\t};\r\n\r\n\tforms.forEach(form => bindPostData(form));\r\n\r\n\t// async function postData(url, data) {\r\n\t// \tconst result = await fetch(url, {\r\n\t// \t\tmethod: \"POST\",\r\n\t// \t\theaders: {\r\n\t// \t\t\t\"Content-type\": \"application/json; charset=utf-8\"\r\n\t// \t\t},\r\n\t// \t\tbody: data\r\n\t// \t});\r\n\r\n\t// \tif (!result.ok) {\r\n\t// \t\tthrow new Error(\"Error\");\r\n\t// \t}\r\n\r\n\t// \treturn await result.json();\r\n\t// }\r\n\r\n\t// async function getData(url) {\r\n\t// \tconst result = await fetch(url);\r\n\r\n\t// \tif (!result.ok) {\r\n\t// \t\tthrow new Error(`Could not fetch  ${url}, status: ${result.status}`);\r\n\t// \t}\r\n\r\n\t// \treturn await result.json();\r\n\t// }\r\n\r\n\tfunction bindPostData(form) {\r\n\t\tform.addEventListener(\"submit\", (e) => {\r\n\t\t\te.preventDefault();\r\n\r\n\t\t\tconst { loading, success, failure } = messages;\r\n\r\n\t\t\tconst loader = document.createElement(\"div\");\r\n\t\t\tloader.innerHTML = loading();\r\n\t\t\tform.append(loader);\r\n\r\n\t\t\tif (!navigator.onLine) {\r\n\t\t\t\tmessagesModal(failure + \":\" + \"Please check your internet connection !\");\r\n\t\t\t\tloader.remove();\r\n\t\t\t\tform.reset();\r\n\t\t\t}\r\n\r\n\t\t\tconst empty = /^$/g;\r\n\t\t\tconst phone = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im;\r\n\t\t\tlet status = false;\r\n\r\n\t\t\tfor (let i = 0; i < form.querySelectorAll(\"input\").length; i++) {\r\n\t\t\t\tif (empty.test(form[i].value) || !phone.test(form[1].value)) {\r\n\t\t\t\t\tstatus = false;\r\n\t\t\t\t\tmessagesModal(\"Please fill all fields, and on Phone number field please fill only numbers\")\r\n\t\t\t\t\tloader.remove();\r\n\t\t\t\t\tform.reset();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tstatus = true;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (status) {\r\n\t\t\t\tconst formData = new FormData(form);\r\n\t\t\t\t// const json = JSON.parse(JSON.stringify(Object.fromEntries(formData.entries())));\r\n\t\t\t\tconst data = Object.fromEntries(formData)\r\n\r\n\t\t\t\taxios.post(\"http://localhost:8888/requests\", data)\r\n\t\t\t\t\t// postData(\"http://localhost:8888/requests\", json)\r\n\t\t\t\t\t.then(data => {\r\n\t\t\t\t\t\tconsole.log(data);\r\n\t\t\t\t\t\tmessagesModal(success);\r\n\t\t\t\t\t})\r\n\t\t\t\t\t.catch(err => {\r\n\t\t\t\t\t\tmessagesModal(failure + \": \" + err);\r\n\t\t\t\t\t})\r\n\t\t\t\t\t.finally(() => {\r\n\t\t\t\t\t\tloader.remove();\r\n\t\t\t\t\t\tform.reset();\r\n\t\t\t\t\t});\r\n\t\t\t} else {\r\n\t\t\t\tconsole.log(\"status is false\");\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tfunction messagesModal(message) {\r\n\t\tconst prevModalDialog = document.querySelector(\".modal__dialog\");\r\n\r\n\t\tprevModalDialog.classList.add(\"hide\");\r\n\t\topenModal();\r\n\r\n\t\tconst thanksModal = document.createElement(\"div\");\r\n\t\tthanksModal.classList.add(\"modal__dialog\");\r\n\t\tthanksModal.innerHTML = `\r\n\t\t\t<div class=\"modal__content\">\r\n\t\t\t\t<div class=\"modal__close\" data-close> &times;</div>\r\n\t\t\t\t<div class=\"modal__title\"> ${message} </div>\r\n\t\t\t</div>\r\n\t\t`;\r\n\r\n\t\tdocument.querySelector(\".modal\").append(thanksModal);\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tthanksModal.remove();\r\n\t\t\tprevModalDialog.classList.add(\"show\");\r\n\t\t\tprevModalDialog.classList.remove(\"hide\");\r\n\t\t\tcloseModal();\r\n\t\t}, 2000);\r\n\t}\r\n}\r\n\r\nmodule.exports = formsModule;\n\n//# sourceURL=webpack://food-project/./src/js/components/forms.js?");

/***/ }),

/***/ "./src/js/components/menuCards.js":
/*!****************************************!*\
  !*** ./src/js/components/menuCards.js ***!
  \****************************************/
/***/ ((module) => {

eval("function menuCardsModule () {\r\n\t// used Class for menu cards start\r\n\t// class MenuCard {\r\n\t// \tconstructor(img, alt, title, descr, price, parentSelector) {\r\n\t// \t\tthis.img = img;\r\n\t// \t\tthis.alt = alt;\r\n\t// \t\tthis.title = title;\r\n\t// \t\tthis.descr = descr;\r\n\t// \t\tthis.price = price;\r\n\t// \t\tthis.parent = document.querySelector(parentSelector);\r\n\t// \t\tthis.transfer = 27;\r\n\t// \t\tthis.changeToUAH();\r\n\t// \t}\r\n\r\n\t// \tchangeToUAH() {\r\n\t// \t\tthis.price = +this.price * this.transfer;\r\n\t// \t}\r\n\r\n\t// \trender() {\r\n\t// \t\tconst { img, alt, title, descr, price, parent } = this;\r\n\t// \t\tconst element = document.createElement(\"div\");\r\n\t// \t\telement.classList.add(\"menu__item\")\r\n\t// \t\telement.innerHTML = `\r\n\t// \t\t\t<img src=${img} alt=${alt}>\r\n\t// \t\t\t<h3 class=\"menu__item-subtitle\">${title}</h3>\r\n\t// \t\t\t<div class=\"menu__item-descr\">${descr}</div>\r\n\t// \t\t\t<div class=\"menu__item-divider\"></div>\r\n\t// \t\t\t<div class=\"menu__item-price\">\r\n\t// \t\t\t\t<div class=\"menu__item-cost\">Цена:</div>\r\n\t// \t\t\t\t<div class=\"menu__item-total\"><span>${price}</span> грн/день</div>\r\n\t// \t\t\t</div>\r\n\t// \t\t`;\r\n\r\n\t// \t\tparent.append(element);\r\n\t// \t}\r\n\t// };\r\n\r\n\t// getData(\"http://localhost:8888/menu\")\r\n\t// \t.then(data => {\r\n\t// \t\tdata.forEach(({ img, altimg, title, descr, price }) => {\r\n\t// \t\t\tnew MenuCard(img, altimg, title, descr, price, \".menu .container\").render()\r\n\t// \t\t});\r\n\t// \t});\r\n\r\n\t// used Class for menu cards end\r\n\r\n\t// getData(\"http://localhost:8888/menu\")\r\n\t// \t.then(data => createMenuCard(data));\r\n\r\n\tfunction createMenuCard(data) {\r\n\t\tdata.forEach(({ img, altimg, title, descr, price }) => {\r\n\t\t\tconst element = document.createElement(\"div\");\r\n\t\t\telement.classList.add(\"menu__item\");\r\n\t\t\tconst transfer = 29.59;\r\n\r\n\t\t\tfunction changeToUAH() {\r\n\t\t\t\tprice = (parseFloat(price) * parseFloat(transfer)).toFixed(2);\r\n\t\t\t}\r\n\r\n\t\t\tchangeToUAH();\r\n\r\n\t\t\telement.innerHTML = `\r\n\t\t\t\t<img src=${img} alt=${altimg}>\r\n\t\t\t\t<h3 class=\"menu__item-subtitle\">${title}</h3>\r\n\t\t\t\t<div class=\"menu__item-descr\">${descr}</div>\r\n\t\t\t\t<div class=\"menu__item-divider\"></div>\r\n\t\t\t\t<div class=\"menu__item-price\">\r\n\t\t\t\t\t<div class=\"menu__item-cost\">Цена:</div>\r\n\t\t\t\t\t<div class=\"menu__item-total\"><span>${price}</span> грн/день</div>\r\n\t\t\t\t</div>\r\n\t\t\t`;\r\n\r\n\t\t\tdocument.querySelector(\".menu .container\").append(element);\r\n\t\t});\r\n\t}\r\n\r\n\taxios.get(\"http://localhost:8888/menu\")\r\n\t\t.then(data => createMenuCard(data.data))\r\n}\r\n\r\nmodule.exports = menuCardsModule;\n\n//# sourceURL=webpack://food-project/./src/js/components/menuCards.js?");

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ ((module) => {

eval("function modalModule() {\r\n\tconst modalTrigger = document.querySelectorAll(\"[data-modal]\");\r\n\tconst modal = document.querySelector(\".modal\");\r\n\r\n\tmodalTrigger.forEach(btn => btn.addEventListener(\"click\", openModal));\r\n\r\n\tfunction closeModal() {\r\n\t\tmodal.classList.add(\"hide\");\r\n\t\tmodal.classList.remove(\"show\");\r\n\t\tdocument.body.removeAttribute(\"style\");\r\n\t}\r\n\r\n\tfunction openModal() {\r\n\t\tmodal.classList.add(\"show\");\r\n\t\tmodal.classList.remove(\"hide\");\r\n\t\tdocument.body.style.overflow = \"hidden\";\r\n\t\t// clearTimeout(modalTimerId);\r\n\t}\r\n\r\n\tmodal.addEventListener(\"click\", (e) => {\r\n\t\tif (e.target === modal || e.target.getAttribute(\"data-close\") == \"\") {\r\n\t\t\tcloseModal();\r\n\t\t}\r\n\t});\r\n\r\n\tdocument.addEventListener(\"keydown\", (e) => {\r\n\t\tif (e.code === \"Escape\" && modal.matches(\".show\")) {\r\n\t\t\tcloseModal();\r\n\t\t}\r\n\t});\r\n\r\n\t// const modalTimerId = this.setTimeout(openModal, 500000);\r\n\r\n\tfunction showModalByScroll() {\r\n\t\t// if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {\r\n\t\t// \topenModal();\r\n\t\t// \twindow.removeEventListener(\"scroll\", showModalByScroll);\r\n\t\t// }\r\n\t\tif (window.scrollY >= 1000) {\r\n\t\t\topenModal();\r\n\t\t\twindow.removeEventListener(\"scroll\", showModalByScroll);\r\n\t\t}\r\n\t}\r\n\r\n\twindow.addEventListener(\"scroll\", showModalByScroll);\r\n}\r\n\r\nmodule.exports = modalModule;\n\n//# sourceURL=webpack://food-project/./src/js/components/modal.js?");

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ ((module) => {

eval("function sliderModule () {\r\n\tlet offset = 0;\r\n\tlet slideIndex = 1;\r\n\r\n\tconst slides = document.querySelectorAll(\".offer__slide\");\r\n\tconst slider = document.querySelector(\".offer__slider\");\r\n\tconst prevBtn = document.querySelector(\".offer__slider-prev\");\r\n\tconst nextBtn = document.querySelector(\".offer__slider-next\");\r\n\tconst total = document.querySelector(\"#total\");\r\n\tconst current = document.querySelector(\"#current\");\r\n\tconst slidesWrapper = document.querySelector(\".offer__slider-wrapper\");\r\n\tconst slidesField = document.querySelector(\".offer__slider-inner\");\r\n\tconst width = window.getComputedStyle(slidesWrapper).width;\r\n\r\n\tcheckForZero();\r\n\r\n\tslidesField.style.cssText = `\r\n\t\tdisplay: flex;\r\n\t\twidth: ${100 * slides.length + \"%\"};\r\n\t\ttransition: all 0.5s;\r\n\t`;\r\n\r\n\tslidesWrapper.style.cssText = `\r\n\t\toverflow: hidden;\r\n\t`;\r\n\r\n\tslides.forEach(slide => slide.style.width = width);\r\n\r\n\tslider.style.position = \"relative\";\r\n\r\n\tconst indicators = document.createElement(\"ul\");\r\n\tconst dots = [];\r\n\tindicators.style.cssText = `\r\n\t\tposition: absolute;\r\n\t\tright: 0;\r\n\t\tbottom: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 15;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: center;\r\n\t\tmargin-right: 15%;\r\n\t\tmargin-left: 15%;\r\n\t\tlist-style: none;\r\n\t`;\r\n\tslider.append(indicators);\r\n\r\n\tfor (let i = 0; i < slides.length; i++) {\r\n\t\tconst dot = document.createElement(\"li\");\r\n\t\tdot.setAttribute(\"data-slide-to\", i + 1);\r\n\t\tdot.style.cssText = `\r\n\t\t\tbox-sizing: content-box;\r\n\t\t\tflex: 0 1 auto;\r\n\t\t\twidth: 30px;\r\n\t\t\theight: 6px;\r\n\t\t\tmargin-right: 3px;\r\n\t\t\tmargin-left: 3px;\r\n\t\t\tcursor: pointer;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\tbackground-clip: padding-box;\r\n\t\t\tborder-top: 10px solid transparent;\r\n\t\t\tborder-bottom: 10px solid transparent;\r\n\t\t\topacity: .5;\r\n\t\t\ttransition: opacity .6s ease;\r\n\t\t`;\r\n\r\n\t\tif (i === 0) {\r\n\t\t\tdot.style.opacity = 1;\r\n\t\t}\r\n\t\tindicators.append(dot);\r\n\t\tdots.push(dot);\r\n\t}\r\n\r\n\tnextBtn.addEventListener(\"click\", () => {\r\n\t\tsliderLogic(width.replace(/\\D/g, \"\") * (slides.length - 1), true, false);\r\n\t\tcheckForZero();\r\n\t\tdotsLogic();\r\n\t});\r\n\r\n\tprevBtn.addEventListener(\"click\", () => {\r\n\t\tsliderLogic(0, false, true);\r\n\t\tcheckForZero();\r\n\t\tdotsLogic();\r\n\t});\r\n\r\n\tdots.forEach(dot => {\r\n\t\tdot.addEventListener(\"click\", (e) => {\r\n\t\t\tconst slideTo = e.target.getAttribute(\"data-slide-to\");\r\n\t\t\tslideIndex = slideTo;\r\n\t\t\toffset = width.replace(/\\D/g, \"\") * (slideTo - 1);\r\n\r\n\t\t\tslidesField.style.transform = `translateX(-${offset}px)`;\r\n\r\n\t\t\tcheckForZero();\r\n\t\t\tdotsLogic();\r\n\t\t});\r\n\t});\r\n\r\n\tfunction checkForZero() {\r\n\t\tif (slides.length < 10) {\r\n\t\t\ttotal.textContent = `0${slides.length}`;\r\n\t\t\tcurrent.textContent = `0${slideIndex}`;\r\n\t\t} else {\r\n\t\t\ttotal.textContent = slides.length;\r\n\t\t\tcurrent.textContent = slideIndex;\r\n\t\t}\r\n\t}\r\n\r\n\tfunction dotsLogic() {\r\n\t\tdots.forEach(dot => dot.style.opacity = \"0.5\");\r\n\t\tdots[slideIndex - 1].style.opacity = 1;\r\n\t}\r\n\r\n\tfunction sliderLogic(statment, next = false, prev = false) {\r\n\t\t// nextBtn\r\n\t\tif (next === true && prev === false) {\r\n\t\t\tslideIndex === slides.length || slideIndex >= slides.length ? slideIndex = 1 : slideIndex++;\r\n\t\t\toffset === statment ? offset = 0 : offset += +width.replace(/\\D/g, \"\");\r\n\t\t}\r\n\t\t// prevBtn\r\n\t\tif (next === false && prev === true) {\r\n\t\t\tslideIndex === 1 || slideIndex <= 1 ? slideIndex = slides.length : slideIndex--;\r\n\t\t\toffset === statment ? offset = width.replace(/\\D/g, \"\") * (slides.length - 1) : offset -= +width.replace(/\\D/g, \"\");\r\n\t\t}\r\n\r\n\t\tslidesField.style.transform = `translateX(-${offset}px)`;\r\n\t}\r\n}\r\n\r\nmodule.exports = sliderModule;\n\n//# sourceURL=webpack://food-project/./src/js/components/slider.js?");

/***/ }),

/***/ "./src/js/components/spinner.js":
/*!**************************************!*\
  !*** ./src/js/components/spinner.js ***!
  \**************************************/
/***/ ((module) => {

eval("function spinnerModule() {\r\n\treturn `\r\n\t\t<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"margin: auto; background: none; display: block; shape-rendering: auto;\" width=\"38px\" height=\"38px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n\t\t<g transform=\"rotate(0 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(30 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(60 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(90 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(120 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(150 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(180 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(210 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(240 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(270 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(300 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g><g transform=\"rotate(330 50 50)\">\r\n\t\t\t<rect x=\"47\" y=\"24\" rx=\"3\" ry=\"6\" width=\"6\" height=\"12\" fill=\"#337ab7\">\r\n\t\t\t\t<animate attributeName=\"opacity\" values=\"1;0\" keyTimes=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\"></animate>\r\n\t\t\t</rect>\r\n\t\t</g>\r\n\t\t<!-- [ldio] generated by https://loading.io/ --></svg>\r\n\t`;\r\n}\r\n\r\nmodule.exports = spinnerModule;\n\n//# sourceURL=webpack://food-project/./src/js/components/spinner.js?");

/***/ }),

/***/ "./src/js/components/tab.js":
/*!**********************************!*\
  !*** ./src/js/components/tab.js ***!
  \**********************************/
/***/ ((module) => {

eval("function tabsModule () {\r\n\tconst tabsHeaders = document.querySelectorAll(\".tabheader__item\");\r\n\tconst tabsContents = document.querySelectorAll(\".tabcontent\");\r\n\tconst tabsHeadersParent = document.querySelector(\".tabheader__items\");\r\n\r\n\tfunction hideTabContent() {\r\n\t\ttabsContents.forEach(tabContent => {\r\n\t\t\ttabContent.classList.add(\"hide\");\r\n\t\t\ttabContent.classList.remove(\"show\", \"fade\");\r\n\t\t});\r\n\r\n\t\ttabsHeaders.forEach(tabHeader => tabHeader.classList.remove(\"tabheader__item_active\"));\r\n\t}\r\n\r\n\tfunction showTabContent(i = 0) {\r\n\t\ttabsContents[i].classList.add(\"show\", \"fade\");\r\n\t\ttabsContents[i].classList.remove(\"hide\");\r\n\t\ttabsHeaders[i].classList.add(\"tabheader__item_active\");\r\n\t}\r\n\r\n\thideTabContent();\r\n\tshowTabContent();\r\n\r\n\ttabsHeadersParent.addEventListener(\"click\", (e) => {\r\n\t\tif (e.target && e.target.matches(\".tabheader__item\")) {\r\n\t\t\ttabsHeaders.forEach((tabHeader, index) => {\r\n\t\t\t\tif (e.target === tabHeader) {\r\n\t\t\t\t\thideTabContent();\r\n\t\t\t\t\tshowTabContent(index);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n}\r\n\r\nmodule.exports = tabsModule;\n\n//# sourceURL=webpack://food-project/./src/js/components/tab.js?");

/***/ }),

/***/ "./src/js/components/timer.js":
/*!************************************!*\
  !*** ./src/js/components/timer.js ***!
  \************************************/
/***/ ((module) => {

eval("function timerModule(timerParam) {\r\n\tfunction getTimeRemaining(endtime) {\r\n\t\tconst total = Date.parse(endtime) - Date.parse(new Date());\r\n\t\tlet days, hours, minutes, seconds;\r\n\r\n\t\tif (total <= 0) {\r\n\t\t\tdays = 0;\r\n\t\t\thours = 0;\r\n\t\t\tminutes = 0;\r\n\t\t\tseconds = 0;\r\n\t\t} else {\r\n\t\t\tdays = Math.floor(total / (1000 * 60 * 60 * 24));\r\n\t\t\thours = Math.floor((total / (1000 * 60 * 60) % 24));\r\n\t\t\tminutes = Math.floor((total / 1000 / 60) % 60);\r\n\t\t\tseconds = Math.floor((total / 1000) % 60);\r\n\t\t}\r\n\r\n\t\treturn {\r\n\t\t\ttotal,\r\n\t\t\tdays,\r\n\t\t\thours,\r\n\t\t\tminutes,\r\n\t\t\tseconds\r\n\t\t}\r\n\t}\r\n\r\n\tfunction setZero(n) {\r\n\t\treturn n >= 0 && n < 10 ? `0${n}` : n;\r\n\t}\r\n\r\n\tfunction setClock(selector, endtime) {\r\n\t\tconst timer = document.querySelector(selector);\r\n\t\tconst daysBlock = timer.querySelector(\"#days\");\r\n\t\tconst hoursBlock = timer.querySelector(\"#hours\");\r\n\t\tconst minutesBlock = timer.querySelector(\"#minutes\");\r\n\t\tconst secondsBlock = timer.querySelector(\"#seconds\");\r\n\t\tconst timerId = setInterval(updateClock, 1000);\r\n\r\n\t\tupdateClock();\r\n\r\n\t\tfunction updateClock() {\r\n\t\t\tconst { total, days, hours, minutes, seconds } = getTimeRemaining(endtime);\r\n\r\n\t\t\tdaysBlock.textContent = setZero(days);\r\n\t\t\thoursBlock.textContent = setZero(hours);\r\n\t\t\tminutesBlock.textContent = setZero(minutes);\r\n\t\t\tsecondsBlock.textContent = setZero(seconds);\r\n\r\n\t\t\tif (total <= 0) {\r\n\t\t\t\tclearInterval(timerId);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tsetClock(\".timer\", timerParam);\r\n}\r\n\r\nmodule.exports = timerModule;\n\n//# sourceURL=webpack://food-project/./src/js/components/timer.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("window.addEventListener(\"DOMContentLoaded\", function () {\r\n\tconst tabsModule = __webpack_require__(/*! ./components/tab */ \"./src/js/components/tab.js\");\r\n\tconst timerModule = __webpack_require__(/*! ./components/timer */ \"./src/js/components/timer.js\");\r\n\tconst modalModule = __webpack_require__(/*! ./components/modal */ \"./src/js/components/modal.js\");\r\n\tconst menuCardsModule = __webpack_require__(/*! ./components/menuCards */ \"./src/js/components/menuCards.js\");\r\n\tconst formsModule = __webpack_require__(/*! ./components/forms */ \"./src/js/components/forms.js\");\r\n\tconst sliderModule = __webpack_require__(/*! ./components/slider */ \"./src/js/components/slider.js\");\r\n\tconst calculatorModule = __webpack_require__(/*! ./components/calculator */ \"./src/js/components/calculator.js\");\r\n\r\n\ttabsModule();\r\n\ttimerModule(\"2023-12-31 23:59:59\");\r\n\tmodalModule();\r\n\tmenuCardsModule();\r\n\tformsModule();\r\n\tsliderModule();\r\n\tcalculatorModule();\r\n});\n\n//# sourceURL=webpack://food-project/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;