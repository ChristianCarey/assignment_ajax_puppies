'use strict';

var APP = APP || {};

APP.View = function() {

  var init = function(puppies, breeds) {
    _$puppies = $('#puppies');
    _$breeds = $('#breeds');
    _renderPuppies(puppies);
    _renderBreeds(breeds);
  }

  var _$puppies;
  var _$breeds;
  
  _renderPuppies

  return {
    init: init
  }

}();