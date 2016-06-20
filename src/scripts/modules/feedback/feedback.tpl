<span id="feedbackLink" class="feedback-link feedback-link-fixed"><span>Feedback</span></span>
<!-- Feedback -->
<div id="feedbackModal" class="feedback-modal m-modal-assets">
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
              <h2>Provide feedback</h2>
              <h3>We want to hear from you! Global Forest Watch is a user-driven platform and your intput is critical. Help us improve GFW websites by completing the feedback form below or by signing up to become an offcial GFW tester.</h3>
            </header>
            <div class="modal-step-content">
              <h3><strong>We are interested in hearing:</strong></h3>
              <ul class="bullets">
                <li>Why you visited GFW</li>
                <li>How you use GFW</li>
                <li>If and how the information provided by GFW is useful for your work</li>
                <li>If any additional features and/or data would be useful</li>
                <li>If anything was confusing or difficult to use</li>
                <li>If you encountered any bugs or problems while using GFW</li>
                <li>Anything else you would like to tell us!</li>
              </ul>
            </div>
          </li>

          <!-- STEP 2 -->
          <li class="modal-step" data-step="2">
            <header>
              <h2>Provide feedback</h2>
              <h3>Help us learn how you use Global Forest Watch and how to improve it. Please provide your email address if you would like a response from GFW.</h3>
            </header>
            <div class="modal-step-content">
              <form id="feedback-form" class="feedback-form">
                <input name="hostname" id="hostname" type="hidden"/>
                
                <div class="field">
                  <label for="feedback">Message *</label>
                  <textarea id="feedback" name="feedback" placeholder="Type something"></textarea>
                </div>
                
                <div class="field -short">
                  <label for="email">Email</label>
                  <input id="email" name="email" placeholder="Email" type="email">
                </div>
                
                <div class="field">
                  <h3>INTERESTED IN TESTING NEW FEATURES ON GFW?</h3>
                  <p>Sign up and become an official GFW tester!</p>
                  <div class="radio-box js-radio-box">
                    <div class="custom-radio js-dinamic-color">
                      <input id="signup_true1" name="signup" type="radio" value="true">
                      <label for="signup_true1">
                        <span></span> Yes, sign me up.
                      </label>
                    </div>
                    <div class="custom-radio js-dinamic-color">
                      <input id="signup_false1" name="signup" type="radio" value="false" checked="checked">
                      <label for="signup_false1">
                        <span></span> No thanks.
                      </label>
                    </div>
                  </div>                    
                </div>

                <div class="field">
                  <h3>Want to be the first to know about Global Forest Watch updates?</h3>
                  <p>Sign up for <a class="js-dinamic-color" href="http://www.wri.org/global-forest-watch-updates-and-newsletter" target="_blank">our newsletter</a>. </p>
                </div>

              </form>
            </div>
          </li>

          <!-- STEP 3 -->
          <li class="modal-step" data-step="3">
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
          <li class="modal-step" data-step="4">
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
          <button data-step="1" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-continue -active">Continue</button>
          <button data-step="2" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-submit">Submit</button>
          <button data-step="3" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-close">Close</button>
          <button data-step="4" class="btn green medium uppercase modal-step-btn js-dinamic-color js-btn-close">Close</button>
        </li>
      </ul>
    </div>
  </div>
</div>
