import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInpts from './modules/checkTextInpts';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filterElemetns from './modules/filterElemetns';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordon';
import burger from './modules/burger';
import scrolling from './modules/scroll';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  modals();
  sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  forms();
  mask('[name="phone"]');
  checkTextInpts('[name="name"]');
  checkTextInpts('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price');
  filterElemetns();
  pictureSize('.sizes-block');
  accordion('.accordion-heading')
  burger('.burger-menu', '.burger');
  scrolling('.pageup');
  drop();
});