'use strict';

import utils from '../../src/scripts/utils';

describe('Utils', function () {
  before(function () {
    window.innerWidth = 1300;
  });

  describe('utils', function () {
    it('getWindowWidth is false', function () {
      expect(utils.getWindowWidth()).to.be.a('number');
    });

    it('getWindowHeigth is false', function () {
      expect(utils.getWindowHeigth()).to.be.a('number');
    });

    it('getHost is a string', function () {
      expect(utils.getHost()).to.be.a('string').to.equal('http://localhost:' + window.location.port);
    });

    it('getAPIHost is a string', function () {
      expect(utils.getAPIHost()).to.be.a('string').to.equal('http://api.globalforestwatch.org');
    });

    it('isSmallScreen is false', function () {
      expect(utils.isSmallScreen()).to.be.a('boolean').to.not.be.true;
    });

    it('isDefaultHost is true', function () {
      expect(utils.isDefaultHost()).to.be.a('boolean').to.be.true;
    });

    describe('isLocalhost', function() {

      it('returns true if the current site is on localhost', function() {
        this.stub = sinon.stub(utils, 'getCurrentLocation', function() {
          return 'localhost';
        });

        expect(utils.isLocalhost()).to.be.true;
      });

      it('returns false if the current site is not on localhost', function() {
        this.stub = sinon.stub(utils, 'getCurrentLocation', function() {
          return 'notlocalhost.com';
        });
        expect(utils.isLocalhost()).to.be.false;
      });

      afterEach(function() {
        this.stub.restore();
      });

    });

    describe('isLoggedIn', function() {

      beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();
        this.requests = [];

        this.xhr.onCreate = function (xhr) {
          this.requests.push(xhr);
        }.bind(this);
      });

      it('calls the success callback if the endpoint returns 200', function() {
        var callback = sinon.spy();
        utils.isLoggedIn({success: callback});

        this.requests[0].respond(200, { "Content-Type": "application/json" }, '{}');
        expect(callback.called).to.be.true;
      });

      it('calls the failure callback if the endpoint does not return 200', function() {
        var callback = sinon.spy();
        utils.isLoggedIn({failure: callback});

        this.requests[0].respond(401, { "Content-Type": "application/json" }, '{}');
        expect(callback.called).to.be.true;
      });

      it('calls the success callback with the user data', function() {
        var callback = sinon.spy();
        utils.isLoggedIn({success: callback});

        this.requests[0].respond(200, { "Content-Type": "application/json" }, '{"fake": "data"}');
        expect(callback.calledWith({fake: 'data'})).to.be.true;
      });

      afterEach(function() {
        this.xhr.restore();
      });

    });
  });

});


