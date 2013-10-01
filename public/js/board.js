(function () {
  'use strict';

  function Board(element, options) {
    options = options || {};
    this.element = element;
    this.$$element = $$(element);
    this.widthParentScale = options.widthParentScale || 0.95;
    this.heightWindowScale = options.heightWindowScale || 0.85;
    this.setDimensions();
    this.setupEvents();
  }

  Board.prototype = {
    setupEvents: function () {
      var self = this;

      $$(window).on('resize', function () {
        self.setDimensions();
      });
    },

    setDimensions: function () {
      this.width = this.widthParentScale * this.$$element.parent().width();
      this.height = this.heightWindowScale * window.innerHeight;
      this.element.width = this.width;
      this.element.height = this.height;
    }
  };

  window.Board = Board;
}) ();