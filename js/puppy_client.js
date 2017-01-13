'use strict';

var APP = APP || {};

APP.PuppyClient = function($) {

  var _BASE_URL = "https://ajax-puppies.herokuapp.com/";
  var _ALL_URL = _BASE_URL + "puppies.json";
  var _ADOPT_URL = _BASE_URL + "puppies/";

  var all = function(callback) {
    return $.get({url: _ALL_URL, success: callback });
  };

  var register = function(data, callback) {
    return $.post({
      url: _REGISTER_URL, 
      success: callback,
      data: {
        name: data.name,
        breed_id: data.breed_id
      } 
    });  
  };

  var adopt = function(id, callback) {
    return $.ajax({
      url: _ADOPT_URL + id + ".json",
      method: "DELETE",
      success: callback
    })
  };

  return {
    all: all,
    register: register,
    adopt: adopt
  }
}($);