'use strict';

var APP = APP || {};

APP.BreedClient = function($) {

  var _BASE_URL = "https://ajax-puppies.herokuapp.com/breeds.json";

  var all = function(callback) {
    var all;
     $.get({url: _BASE_URL, success: callback });
  };

  return {
    all: all
  }
}($);