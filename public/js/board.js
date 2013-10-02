(function () {
  'use strict';

  function Board(element, options) {
    options = options || {};
    this.element = element;
    this.$$element = $$(element);
    this.widthParentScale = options.widthParentScale || 0.95;
    this.heightWindowScale = options.heightWindowScale || 0.87;
    this.setDimensions();
    this.setupEvents();
  }

  Board.prototype = {
    setupEvents: function () {
      var self = this;

      $$(window).on('resize', function () {
        self.setDimensions();
      });

      $$('.toolbox .button').on('click', function (e) {
        e.preventDefault();
        self.setTool($$(this).attr('data-tool'), this);
      });

      $$('.toolbox .button').on('tap', function (e) {
        e.preventDefault();
        self.setTool($$(this).attr('data-tool'), this);
      });
    },

    setTool: function (tool, selectedTool) {
      var $$selectedTool;
      if (!selectedTool) {
        $$selectedTool = $$('[data-tool=' + tool + ']');
        selectedTool = $$selectedTool[0];
      }
      else {
        $$selectedTool = $$(selectedTool);
      }

      var $$otherButtons = $$selectedTool.siblings('.button');

      $$otherButtons.removeClass('active');
      $$otherButtons.removeClass('green');
      $$selectedTool.addClass('green active');
      this._setTool(tool);
    },


    _setTool: function (tool) {
      console.log(tool);
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