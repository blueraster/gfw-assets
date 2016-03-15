'use strict';

import $gfwdom from '../../facade';
import utils from '../../utils';
import feedbackTpl from './feedback.tpl';

const colors = {
  'default': 'green',
  'fires.globalforestwatch.org': 'red',
  'commodities.globalforestwatch.org': 'orange',
  'climate.globalforestwatch.org': 'blue'
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
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    this.$window =    window;
    this.$document =  $gfwdom(document);
    this.$body =      $gfwdom('body');
    this.$htmlbody =  $gfwdom('html, body');
    this.$el =        $gfwdom('#feedbackModal');

    this.$content =        this.$el.find('.modal-content');
    this.$contentWrapper = this.$el.find('.modal-wrapper');
    this.$backdrop =       this.$el.find('.modal-backdrop');
    this.$close =          this.$el.find('.modal-close');
    this.$spinner =        this.$el.find('.modal-spinner');

    this.$modalStep =      this.$el.find('.modal-step');
    this.$modalStepBtn =   this.$el.find('.modal-step-btn');

    this.$form =           this.$el.find('#feedback-form');
    this.$textarea =       this.$el.find('#feedback-textarea');
    this.$email =          this.$el.find('#feedback-email');
    this.$hostname =       this.$el.find('#feedback-hostname');

    this.$dinamicColor =   this.$el.find('.js-dinamic-color');

    this.hidden = true;
  }

  setListeners() {
    this.$body.on('click', '.feedback-link', this.show.bind(this));

    this.$el.on('click', '.js-modal-close', this.hide.bind(this));
    this.$el.on('click', '.js-btn-continue', this.actionContinue.bind(this));
    this.$el.on('click', '.js-btn-submit', this.actionSubmit.bind(this));
    this.$el.on('click', '.js-btn-close', this.actionClose.bind(this));
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
  }

  hide(e) {
    e && e.preventDefault();
    this.hidden = true;
    this.toggle();

    //Give back scroll beyond modal window.
    this.$htmlbody.removeClass('-no-scroll');
    this.changeStep(1);

    return this;
  }

  toggle() {
    (!!this.hidden) ? this.stopBindings() : this.initBindings();
    this.$el.toggleClass('-active', !this.hidden);
    //Prevent scroll beyond modal window.
    this.$htmlbody.toggleClass('-no-scroll', !this.hidden);
  }


  /**
   * Init bindings & stopBindings
   * @param  {}
   * @return {}
   */
  initBindings() {
    // document keyup
    this.$document.on('keyup.feedback', function(e) {
      if (e.keyCode === 27) {
        this.hide();
      }
    }.bind(this));
    // backdrop
    this.$backdrop.on('click', function() {
      this.hide();
    }.bind(this));
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
    var color = colors[location.hostname] || colors['default'];
    this.$dinamicColor.forEach(function(v){
      $gfwdom(v).removeClass('green').addClass(color);
    }.bind(this));
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
    var params = this.getQueryParams();
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

   * - actionClose: trigger hide feedback
   * @param  {e} event

   */
  actionContinue(e) {
    this.changeStep(2);
  }

  actionSubmit(e) {
    if (this.$email.hasClass('required')) {
      if (this.validateEmail(this.$email.val())) {
        this.actionSend();
      } else {
        alert('Please enter an email address to continue');
      }
    } else {
      if (!!this.$textarea.val()) {
        this.actionSend();
      } else {
        alert('Please enter feedback, or sign up to be a GFW tester and enter an email address to continue');
      }
    }
  }

  actionClose(e) {
    this.hide();
  }

  actionSend(){
    this.$spinner.addClass('-active');
    // If you want to test it without bothering the client you can point the url to the local gfw (remember to run the app) feedback json
    // $gfwdom.jsonp('http://localhost:5000/feedback_jsonp', {
    $gfwdom.jsonp('http://www.globalforestwatch.org/feedback_jsonp', {
      data: $gfwdom.serialize(this.$form[0]),

      success: function(data) {
        (data === true) ? this.changeStep(3) : this.changeStep(4);
        this.$spinner.removeClass('-active');
      }.bind(this),

      error: function(error) {
        console.log('error:' + error);
        this.changeStep(4);
        this.$spinner.removeClass('-active');
      }.bind(this)

    })
  }


  /**
   * Change Events
   * - changeRequire: change event triggerred by the radio buttons
   * @param  {e} event

   * - changeStep: change step of the modal
   * @param  {step} number
   */

  changeRequire(e) {
    e && e.preventDefault();
    ($gfwdom(e.currentTarget).val() === 'true') ? this.$email.addClass('required') : this.$email.removeClass('required');
  }

  changeStep(step) {
    // TO-DO: This is not working because we need to scroll the container, not the document
    // this.$contentWrapper.scrollTop(0);
    this.$modalStep.removeClass('-active');
    this.$modalStepBtn.removeClass('-active');

    // Set actives
    this.$el.find('.modal-step[data-step="'+step+'"]').addClass('-active');
    this.$el.find('.modal-step-btn[data-step="'+step+'"]').addClass('-active');
  }


  /**
   * Helpers
   * - validateEmail
   * @param  {email}
   * @return {Boolean}

   * - getQueryParams
   * @return {Object}
   */
  validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  getQueryParams() {
    var qs = document.location.search;
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }
    return params;
  }
}

export default Feedback;
