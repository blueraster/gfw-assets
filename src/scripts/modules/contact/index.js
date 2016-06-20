'use strict';

import $gfwdom from '../../facade';
import utils from '../../utils';
import contactTpl from './contact.tpl';
import validate from 'validate.js';

const topics = {
  'report-a-bug-or-error-on-gfw': {
    name: 'Report a bug or error on GFW',
    placeholder: 'Explain the bug or error and tell us where on the website you encountered it. What browser (e.g., Chrome version 50.0.2661.94 m) and operating system (e.g., Windows 8.1) do you use?',
  },
  'provide-feedback': {
    name: 'Provide feedback',
    placeholder: 'Tell us about your experience with GFW! Examples: How can we improve GFW? Why did you visit GFW? How do you use GFW? If and how is the information provided by GFW useful for your work? Are there any additional features and/or data that would be useful?  Was anything confusing or difficult to use?  Etc...',
  },
  'media-request': {
    name: 'Media request',
    placeholder: 'How can we help you?',
  },
  'data-related-inquiry': {
    name: 'Data related inquiry',
    placeholder: 'How can we help you?',
  },
  'gfw-commodities-inquiry': {
    name: 'GFW Commodities inquiry',
    placeholder: 'How can we help you?',
  },
  'gfw-fires-inquiry': {
    name: 'GFW Fires inquiry',
    placeholder: 'How can we help you?',
  },
  'gfw-climate-inquiry': {
    name: 'GFW Climate inquiry',
    placeholder: 'How can we help you?',
  },
  'general-inquiry': {
    name: 'General inquiry',
    placeholder: 'How can we help you?',
  },        
}

const constraints = {
  'contact-email': {
    presence: true,
    email: true
  },
  'contact-topic': {
    presence: true
  },
  'contact-message': {
    presence: true
  }
};


/**
 * Contact
 * @param  {window} root
 * @return {Class}
 */

class Contact {

  constructor() {
    this.el = document.createElement('div');
    this.el.id = 'contactGfw';

    document.body.appendChild(this.el);

    this.render();
  }

  render() {
    this.el.innerHTML = contactTpl();

    this.initVars();
    this.setListeners();
    this.checkForParams();

    return this;
  }

  initVars() {
    this.$window   =  window;
    this.$document =  $gfwdom(document);
    this.$body     =  $gfwdom('body');
    this.$htmlbody =  $gfwdom('html, body');
    this.$el       =  $gfwdom('#contactModalGfw');

    this.$content        = this.$el.find('.modal-content');
    this.$contentWrapper = this.$el.find('.modal-wrapper');
    this.$backdrop       = this.$el.find('.modal-backdrop');
    this.$close          = this.$el.find('.modal-close');
    this.$spinner        = this.$el.find('.modal-spinner');

    this.$modalStep    =   this.$el.find('.modal-step');
    this.$modalStepBtn =   this.$el.find('.modal-step-btn');

    this.$form           = this.$el.find('#contact-form');
    this.$contactEmail   = this.$el.find('#contact-email');
    this.$contactTopic   = this.$el.find('#contact-topic');
    this.$contactMessage = this.$el.find('#contact-message');

    this.hidden = true;
    this.errors = {};
  }

  setListeners() {
    this.$body.on('click', '.contact-link', this.show.bind(this));

    this.$el.on('click', '.js-btn-submit', this.actionSubmit.bind(this));

    this.$el.on('click', '.js-btn-close', this.hide.bind(this));
    this.$el.on('click', '.js-modal-close', this.hide.bind(this));
    
    this.$el.on('change', 'input, textarea, select', this.changeInput.bind(this));
    
    this.$el.on('change','#contact-topic', this.changeTopic.bind(this));
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
    window.history.pushState('Show contact', document.title, this.toggleParam('show_contact',true));
  }

  hide(e) {
    e && e.preventDefault();
    this.hidden = true;
    this.toggle();
    window.history.pushState('Hide contact', document.title, this.toggleParam('show_contact',null));

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
    this.$document.on('keyup.contact', e => {
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
    this.$document.off('keyup.contact');
    this.$backdrop.off('click');
  }


  /**
   * Check params. If show_contact is present we automatically show the contact modal
   * @param  {}
   * @return {}
   */
  checkForParams() {
    const params = this.getQueryParams();
    if (!!params && !!params['show_contact']) {
      this.show();
    }
  }


  /**
   * UI Events inside the contact modal
   * - actionSubmit: validate form before send it
   */
  actionSubmit(e) {
    e && e.preventDefault();
    (this.validate()) ? this.sendForm() : this.updateForm();
  }

  // Send the data to the API
  sendForm() {
    // Production send request
    // Send request
    this.$spinner.addClass('-active');
    var xhr = new XMLHttpRequest();
    xhr.open('POST', utils.getAPIHost() + '/emails');
    // xhr.open('POST', 'http://api-proxy-staging.globalforestwatch.org/emails');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    xhr.onload = function() {
      if (xhr.status === 200 || xhr.status === 201) {
        this.changeStep('success');
        this.resetForm();
        this.$spinner.removeClass('-active');
      } else {
        this.changeStep('error');
        this.$spinner.removeClass('-active');
      }
    }.bind(this);

    xhr.onerror = () => {
      this.changeStep('error');
      this.$spinner.removeClass('-active');
    }

    xhr.send(JSON.stringify($gfwdom.serialize(this.$form[0])));



    // // Develop Send request
    // // Comment this code if this is going to pro
    // if (true) {
    //   this.changeStep('success');
    //   this.$spinner.removeClass('-active');
    // } else {
    //   this.changeStep('error');
    //   this.$spinner.removeClass('-active');
    // }
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
  
  resetForm() {
    this.$form.find('input, textarea, select').val(null);
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
   * - changeStep: change step of the modal
   * @param  {step} number

   * - changeTopic: change topic of the modal
   * @param  {step} number
   */
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

  changeTopic(e) {
    var topic = e.currentTarget.value;
    if (!!topic) {    
      var placeholder = topics[topic]['placeholder'];
      this.$contactMessage.attr('placeholder', placeholder);
    }
  }


  /**
   * Helpers
   * Let's move this to utils helper
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

export default Contact;
