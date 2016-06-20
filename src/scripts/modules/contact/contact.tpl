<div id="contactModalGfw" class="m-modal-assets">
  <!-- BACKDROP -->
  <div class="modal-backdrop"></div>
  <!-- WINDOW -->
  <div class="modal-window">
    <a href="#" class="modal-close js-modal-close">
      <svg><use xlink:href="#icon-h-close"></use></svg>
    </a>
    <div class="modal-spinner js-dinamic-color"></div>
    <div class="modal-wrapper -scroll-bar">
      <div class="modal-content">
        <ul class="modal-steps">
          <!-- STEP 1 -->
          <li class="modal-step -active" data-step="1">
            <header>
              <h2>Contact us</h2>
              <h3>Question, comment, request, feedback? We want to hear from you! Help us improve Global Forest Watch by completing the form below.</h3>
            </header>
            <div class="modal-step-content">
              <form id="contact-form">
                <div class="field -short">
                  <label for="contact-email">Email *</label>
                  <input type="email" name="contact-email">
                </div>
                <div class="field">
                  <label for="contact-topic">Topic *</label>
                  <div class="m-select">
                    <select id="contact-topic" class="js- chosen-select default required" name="contact-topic" data-placeholder="Please select a topic so that we can best respond">
                      <option value=""></option>
                      <option value="report-a-bug-or-error-on-gfw">Report a bug or error on GFW</option>
                      <option value="provide-feedback">Provide feedback</option>
                      <option value="media-request">Media request</option>
                      <option value="data-related-inquiry">Data related inquiry</option>
                      <option value="gfw-commodities-inquiry">GFW Commodities inquiry</option>
                      <option value="gfw-fires-inquiry">GFW Fires inquiry</option>
                      <option value="gfw-climate-inquiry">GFW Climate inquiry</option>
                      <option value="general-inquiry">General inquiry</option>
                    </select>                      
                  </div>
                </div>
                <div class="field">
                  <label for="contact-message">Message *</label>
                  <textarea id="contact-message" name="contact-message" placeholder="How can we help you?"></textarea>
                </div>
                <div class="field">
                  <h3>INTERESTED IN TESTING NEW FEATURES ON GFW?</h3>
                  <p>Sign up and become an official GFW tester!</p>
                  <div class="radio-box">
                    <div class="custom-radio">
                      <input id="contact-signup-true" type="radio" name="contact-signup" value="true">
                      <label for="contact-signup-true">
                        <span></span> Yes, sign me up.
                      </label>
                    </div>
                    <div class="custom-radio">
                      <input id="contact-signup-false" type="radio" name="contact-signup" value="false" checked>
                      <label for="contact-signup-false">
                        <span></span> No thanks.
                      </label>
                    </div>
                  </div>                    
                </div>
              </form>
            </div>
          </li>

          <!-- STEP 3 -->
          <li class="modal-step" data-step="success">
            <header>
              <h2>Thank you! </br>We appreciate your help</h2>
              <h3><strong>Users have spoken and we have listened!</strong> </br>Below are examples of changes and additions we’ve made to the website in response to feedback from users like you:</h3>
            </header>
            <div class="modal-step-content">
              <ul class="bullets">
                <li>Threshold settings for the UMD/Google tree cover loss data (read more <a class="js-dinamic-color" href="http://blog.globalforestwatch.org/2014/09/four-ways-gfw-just-became-more-useful/">here</a>)</li>
                <li>Enhanced analysis functionality (i.e., for protected areas, subnational jurisdictions, and forest use concessions) (read more <a class="js-dinamic-color" href="http://blog.globalforestwatch.org/2014/09/four-ways-gfw-just-became-more-useful/">here</a>)</li>
                <li>Time slider for the NASA active fires data and information about each fire</li>
                <li>“Share this map view” feature (read more <a class="js-dinamic-color" href="http://blog.globalforestwatch.org/2014/05/five-gfw-site-updates/">here</a>)</li>
                <li>A new homepage that better directs users to what they are looking for and communicates a clearer purpose</li>
              </ul>
              <p>Do you have questions about how to use GFW? Be sure to visit the <a class="js-dinamic-color" href="/howto">How To</a> page, and if you still need help email <a class="js-dinamic-color" href="mailto:gfw@wri.org">gfw@wri.org</a>. You can also connect with us on social media or by posting a comment to the <a class="js-dinamic-color" href="https://groups.google.com/forum/#!forum/globalforestwatch" target="_blank">GFW Discussion Forum</a>.</p>
            </div>
          </li>

          <!-- STEP 4 -->
          <li class="modal-step" data-step="error">
            <header>
              <h2>We're sorry, </br>but something went wrong</h2>
            </header>
          </li>

        </ul>
      </div>
    </div>
    
    <div class="modal-footer">
      <span class="gradient"></span>
      <ul class="m-btncontainer -center -steps">
        <li>
          <button data-step="1" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-submit -active">Submit</button>
          <button data-step="success" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-close">Close</button>
          <button data-step="error" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-close">Close</button>
        </li>
      </ul>
    </div>
  </div>  
</div>
