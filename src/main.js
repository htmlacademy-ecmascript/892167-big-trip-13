import {filtersTemplate} from "./view/filters";
import {menuTemplate} from "./view/menu";
import {sortTemplate} from "./view/sort";
import {tripInfoTemplate} from "./view/tripInfo";
import {tripPriceTemplate} from "./view/tripPrice";
import {contentTemplate} from "./view/list";
import {generateTripPointData} from "./mock/tripPoint";

const testData = generateTripPointData(1);

const render = (element, template, position) => {
  element.insertAdjacentHTML(position, template);
};
//  selectors
const tripControlsElement = document.querySelector(`.trip-controls`);
const siteMainElement = document.querySelector(`.trip-main`);
const tripEventsContainer = document.querySelector(`.trip-events`);

//  render templates
render(tripEventsContainer, filtersTemplate(), `beforeend`);
render(siteMainElement, menuTemplate(), `beforeend`);
render(tripControlsElement, tripInfoTemplate(), `beforeend`);
render(tripControlsElement, tripPriceTemplate(testData), `beforeend`);
render(tripEventsContainer, sortTemplate(), `beforeBegin`);
render(tripEventsContainer, contentTemplate(testData), `beforeend`);
