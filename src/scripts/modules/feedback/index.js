'use strict';

import $gfwdom from '../../facade';
import utils from '../../utils';
import feedbackTpl from './feedback.tpl';
import validate from 'validate.js';

const colors = {
  'default': 'green',
  'fires.globalforestwatch.org': 'red',
  'commodities.globalforestwatch.org': 'orange',
  'climate.globalforestwatch.org': 'blue'
};

const constraints = {
  'email': {
    email: true
  },
  'feedback': {
    presence: true
  }
};

/**
 * Feedback
 * @param  {window} root
 * @return {Class}
 */

class Feedback {

  constructor() {
    this.el = document.createElement('div');
    this.el.id = 'feedbackGfw';

    document.body.appendChild(this.el);

    this.render();
  }

  render() {
    this.el.innerHTML = feedbackTpl();

    this.initVars();
    this.setListeners();
    this.setHiddenInputs();
    this.setColors();
    this.checkForParams();

    return this;
  }

  initVars() {
    this.$window   =  window;
    this.$document =  $gfwdom(document);
    this.$body     =  $gfwdom('body');
    this.$htmlbody =  $gfwdom('html, body');
    this.$el       =  $gfwdom('#feedbackModal');

    this.$content        = this.$el.find('.modal-content');
    this.$contentWrapper = this.$el.find('.modal-wrapper');
    this.$backdrop       = this.$el.find('.modal-backdrop');
    this.$close          = this.$el.find('.modal-close');
    this.$spinner        = this.$el.find('.modal-spinner');

    this.$modalStep    =   this.$el.find('.modal-step');
    this.$modalStepBtn =   this.$el.find('.modal-step-btn');

    this.$form     = this.$el.find('#feedback-form');
    this.$textarea = this.$el.find('#feedback');
    this.$email    = this.$el.find('#email');
    this.$hostname = this.$el.find('#hostname');

    this.$dinamicColor = this.$el.find('.js-dinamic-color');

    this.hidden = true;
    this.errors = [];
  }

  setListeners() {
    this.$body.on('click', '.feedback-link', this.show.bind(this));

    this.$el.on('click', '.js-btn-continue', this.actionContinue.bind(this));

    this.$el.on('click', '.js-btn-submit', this.actionSubmit.bind(this));

    this.$el.on('click', '.js-modal-close', this.hide.bind(this));
    this.$el.on('click', '.js-btn-close', this.hide.bind(this));

    this.$el.on('change', 'input, textarea, select', this.changeInput.bind(this));    

    this.$el.on('change','.js-radio-box input', this.changeRequire.bind(this));
  }


  /**
   * Show & hide & toggle
   * @param  {e} event
   * @return {}
   */
  show(e) {
    e && e.preventDefault() && e.stopPropagation();
    this.hidden = false;
    this.toggle();
    window.history.pushState('Show feedback', document.title, this.toggleParam('show_feedback',true));
  }

  hide(e) {
    e && e.preventDefault();
    this.hidden = true;
    this.toggle();
    window.history.pushState('Hide feedback', document.title, this.toggleParam('show_feedback',null));

    //Give back scroll beyond modal window.
    // this.$htmlbody.removeClass('-no-scroll');
    this.changeStep(1);

    return this;
  }

  toggle() {
    (!!this.hidden) ? this.stopBindings() : this.initBindings();
    this.$el.toggleClass('-active', !this.hidden);
    //Prevent scroll beyond modal window.
    // this.$htmlbody.toggleClass('-no-scroll', !this.hidden);
    this.$contentWrapper[0].scrollTop = 0;
  }


  /**
   * Init bindings & stopBindings
   * @param  {}
   * @return {}
   */
  initBindings() {
    // document keyup
    this.$document.on('keyup.feedback', e => {
      if (e.keyCode === 27) {
        this.hide();
      }
    });
    // backdrop
    this.$backdrop.on('click', () => {
      this.hide();
    });
  };

  stopBindings() {
    // Test this namespace
    this.$document.off('keyup.feedback');
    this.$backdrop.off('click');
  }


  /**
   * Set global color of the feedback modal
   * @param  {}
   * @return {}
   */
  setColors() {
    const color = colors[location.hostname] || colors['default'];
    this.$dinamicColor.forEach(v => {
      $gfwdom(v).removeClass('green').addClass(color);
    });
  }


  /**
   * Set hostname. WRI will use it to know where the feedback was sended
   * @param  {}
   * @return {}
   */
  setHiddenInputs() {
    this.$hostname.val(location.hostname);
  }


  /**
   * Check params. If show_feedback is present we automatically show the feedback modal
   * @param  {}
   * @return {}
   */
  checkForParams() {
    const params = this.getQueryParams();
    if (!!params && !!params['show_feedback']) {
      this.show();
    }
  }


  /**
   * UI Events inside the feedback modal
   * - actionContinue: continue to next Step
   * @param  {e} event

   * - actionSubmit: validate form before send it
   * @param  {step} number

   * - actionSend: send feedback form

   */
  actionContinue(e) {
    this.changeStep(2);
  }

  actionSubmit(e) {
    e && e.preventDefault();
    (this.validate()) ? this.sendForm() : this.updateForm();
  }

  sendForm() {
    this.$spinner.addClass('-active');

    var url = '';
    if (!utils.isLocalhost()) {
      url = '//' + utils.getDefaultDomain();
    }

    $gfwdom.jsonp(url + '/feedback_jsonp', {
      data: $gfwdom.serialize(this.$form[0]),

      success: data => {
        (data === true) ? this.changeStep(3) : this.changeStep(4);
        this.$spinner.removeClass('-active');
      },

      error: error => {
        console.log('error:' + error);
        this.changeStep(4);
        this.$spinner.removeClass('-active');
      }

    })
  }

  updateForm() {
    this.$form.find('input, textarea, select').removeClass('-error');
    this.$form.find('label').removeClass('-error');
    for (var key in this.errors) {
      var $input = this.$form.find('#'+key);
      var $label = this.$form.find('label[for='+key+']');
      $input.addClass('-error');
      $label.addClass('-error');
    }
  }
  
  validate(e) {
    e && e.preventDefault();
    let attributes = $gfwdom.serialize(this.$form[0]);    

    // Validate form, if is valid the response will be undefined
    this.errors = validate(attributes, constraints);
    return ! !!this.errors;
  }

  validateInput(name, value) {
    let errors = validate.single(value, constraints[name]);
    if (!!errors) {
      this.errors[name] = errors[0];
    } else {
      this.errors && this.errors[name] && delete this.errors[name];  
    }
  }

  changeInput(e) {
    e && e.preventDefault();
    this.validateInput(e.currentTarget.name, e.currentTarget.value);
    this.updateForm();
  }

  /**
   * Change Events
   * - changeRequire: change event triggerred by the radio buttons
   * @param  {e} event

   * - changeStep: change step of the modal
   * @param  {step} number
   */

  changeRequire(e) {
    // TO - DO
    e && e.preventDefault();
    if($gfwdom(e.currentTarget).val() === 'true') {
      constraints['email'].presence = true;
      this.validateInput('email', this.$email.val());
      this.updateForm();
      // this.$email.addClass('required')
    } else {
      constraints['email'].presence = false;
      this.validateInput('email', this.$email.val());
      this.updateForm();
      // this.$email.removeClass('required')
    }
  }

  changeStep(step) {
    // TO-DO: This is not working because we need to scroll the container, not the document
    // this.$contentWrapper.scrollTop(0);
    this.$contentWrapper[0].scrollTop = 0;

    this.$modalStep.removeClass('-active');
    this.$modalStepBtn.removeClass('-active');

    // Set actives
    this.$el.find('.modal-step[data-step="'+step+'"]').addClass('-active');
    this.$el.find('.modal-step-btn[data-step="'+step+'"]').addClass('-active');
  }


  /**
   * Helpers
   * - getQueryParams
   * @return {Object}

   * - toggleParam
   * @param  {key, value, url}
   * @return {String}
   */

  getQueryParams() {
    let qs = document.location.search;
    qs = qs.split('+').join(' ');

    const params = {},
          re = /[?&]?([^=]+)=([^&]*)/g;
    let tokens;

    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
  }

  toggleParam(key, value, url) {
    if (!url) url = window.location.href;
    const re = new RegExp(`([?&])${key}=.*?(&|#|$)(.*)`, 'gi');
    let hash;

    if (re.test(url)) {
      if (typeof value !== 'undefined' && value !== null)
        return url.replace(re, `$1${key}=${value}$2$3`);
      else {
        hash = url.split('#');
        url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
        if (typeof hash[1] !== 'undefined' && hash[1] !== null)
          url += '#' + hash[1];
        return url;
      }
    }
    else {
      if (typeof value !== 'undefined' && value !== null) {
        const separator = url.indexOf('?') !== -1 ? '&' : '?';
        hash = url.split('#');
        url = `${hash[0]}${separator}${key}=${value}`;
        if (typeof hash[1] !== 'undefined' && hash[1] !== null)
          url += '#' + hash[1];
        return url;
      }
      else
        return url;
    }
  }
}

export default Feedback;
