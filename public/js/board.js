(function () {
  'use strict';

  function Board(element) {
    this.element = element;
    this.$$element = $$(element);
  }

  Board.prototype = {};

  window.Board = Board;
}) ();