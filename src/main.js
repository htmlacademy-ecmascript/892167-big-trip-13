import {filtersTemplate} from "./view/filters";
import {menuTemplate} from "./view/menu";
import {sortTemplate} from "./view/sort";
import {tripInfoTemplate} from "./view/tripInfo";
import {tripPriceTemplate} from "./view/tripPrice";
import {contentTemplate} from "./view/list";
import {generateTripPointData} from "./mock/tripPoint";
import {createFormTemplate} from "./view/createForm";

const testData = generateTripPointData(3);

const render = (element, template, position) => {
  element.insertAdjacentHTML(position, template);
};
//  selectors
const tripControlsElement = document.querySelector(`.trip-controls`);
const siteMainElement = document.querySelector(`.trip-main`);
const tripEventsContainer = document.querySelector(`.trip-events`);

//  render templates
render(tripEventsContainer, createFormTemplate(testData), `afterbegin`);
render(tripControlsElement, filtersTemplate(), `afterbegin`);
render(siteMainElement, tripInfoTemplate(testData), `afterbegin`);
render(tripEventsContainer, sortTemplate(), `beforeend`);
render(tripEventsContainer, contentTemplate(testData), `beforeend`);
