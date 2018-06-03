'use strict';

import LoginButton from '../../src/scripts/modules/my-gfw/login-button';

describe('Login Button', function() {

  describe('.setupGoogleAnalytics', function() {

    it('sets the user ID on the global Google Analytics object', function() {
      window.ga = sinon.spy();

      let loginButton = new LoginButton();
      loginButton.setupGoogleAnalytics({ id: '123' });

      expect(window.ga.calledWith('set', 'userId', '123')).to.be.true;
    });

  });

});
