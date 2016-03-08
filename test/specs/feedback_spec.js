'use strict';

var Feeedback = require('../../src/scripts/modules/feedback');

describe('Feeedback', function() {

  before(function() {
    this.feedback = new Feeedback();
  });

  describe('creation', function() {

    it('should be a valid instance', function() {
      expect(this.feedback).to.be.an.instanceof(Feeedback);
    });

  });

});
