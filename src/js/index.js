window.addEventListener("DOMContentLoaded", function () {
	const tabsModule = require("./components/tab");
	const timerModule = require("./components/timer");
	const modalModule = require("./components/modal");
	const menuCardsModule = require("./components/menuCards");
	const formsModule = require("./components/forms");
	const sliderModule = require("./components/slider");
	const calculatorModule = require("./components/calculator");

	tabsModule();
	timerModule("2023-12-31 23:59:59");
	modalModule();
	menuCardsModule();
	formsModule();
	sliderModule();
	calculatorModule();
});