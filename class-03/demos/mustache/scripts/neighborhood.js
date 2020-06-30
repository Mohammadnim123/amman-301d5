'use strict';

let templateId = '#neighborhood-template';

let neighborhoods = [];

function Neighborhood (rawDataObject) {
  this.name = rawDataObject.name;
  this.city = rawDataObject.city;
  this.population = rawDataObject.population;
  this.founded = rawDataObject.founded;
  this.body = rawDataObject.body;
}


// Neighborhood.prototype.toHtml = function() {
//   let container = $(`<div></div>`);
//   container.append(`<h2>${this.name}</h2>`);
//   container.append(`<p>${this.city}</p>`);
//   container.append(`<p>${this.population}</p>`);
//   container.append(`<p>${this.founded}</p>`);
//   container.append(`<p>${this.body}</p>`);
//   return container;
// };

// Neighborhood.prototype.toHtml = function() {
//   let container = $('.template').clone();
//   container.removeClass('template');
//   container.find('.name').text(this.name);
//   container.find('.city').text(this.city);
//   container.find('.population').text(this.population);
//   container.find('.founded').text(`Founded: ${this.founded}`);
//   container.find('.body').text(this.body);
//   return container;

// };

Neighborhood.prototype.toHtml = function() {
  // 1- get the template in the html
  let musTemplate = $('#neighborhood-template').html();
  // Mustache.render(string,object)
  let newObj = Mustache.render(musTemplate,this);
  return newObj;

};


neighborhoodDataSet.forEach(neighborhoodObject => {
  var newObj = new Neighborhood(neighborhoodObject);
  neighborhoods.push(newObj);
});

neighborhoods.forEach(ourNewNeighborhoodObject => {
  var renderedObj = ourNewNeighborhoodObject.toHtml();
  $('#neighborhoods').append(renderedObj);
});
