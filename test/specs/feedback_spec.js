'use strict';

import Feeedback from '../../src/scripts/modules/feedback';

describe('Feeedback', () => {
  before(function () {
    this.feedback = new Feeedback();
  });

  describe('creation', function () {
    it('should be a valid instance', function () {
      expect(this.feedback).to.be.an.instanceof(Feeedback);
    });
  });

  describe('params', function () {
    it('hidden should be true', function () {
      expect(this.feedback.hidden).to.be.true;
    });
    it('hidden should be true', function () {
      expect(this.feedback.hidden).to.be.true;
    });
  });


  describe('show', function () {
	  before(function () {
	    this.feedback.show();
	  });
    it('hidden should be false', function () {
      expect(this.feedback.hidden).to.not.be.true;
    });
  });


});



// describe('initialize', function () {
//   it('should be an instanceof Header', function () {
//     expect(this.header).to.be.an.instanceof(Header);
//   });
//   it('should render a string', function () {
//     expect(this.header.el.innerHTML).to.be.a('string');
//   });
// });

// describe('params', function () {
//   it('should be an object', function () {
//     expect(this.header.params).to.be.an('object');
//   });

//   it('should have the next default values', function () {
//   	this.params = this.header.params;
  	
//     expect(this.params.current).to.be.an('undefined');
//     expect(this.params.target).to.be.an('undefined');
//     expect(this.params.hostname).to.be.a('string');
//   });
// });

// describe('utils', function () {
//   it('should have the next default values', function () {  	
//     expect(utils.isSmallScreen()).to.be.a('boolean').to.not.be.true;
//     expect(utils.isDefaultHost()).to.be.a('boolean').to.be.true;
//     expect(utils.getHost()).to.be.a('string').to.equal('http://localhost:5000');
//   });
// });
