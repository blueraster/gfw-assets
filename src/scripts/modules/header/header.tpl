<div class="wrapper">
  <div class="m-header">
    <ul class="m-header-nav -primary">
      <!-- // We need to choose between these two option for translation // -->
      <li class="m-header-item -translate -only-desktop">
        <div id="googleTranslate"></div>
      </li>
      <li class="m-header-item -translate -only-desktop">
        <div id="transifexTranslateElement" class="m-transifex"></div>
      </li>
      <!-- // translation // -->
      <li id="headerSearchBox" class="m-header-item -default -search -only-desktop shape-search">
        <a class="btn-search" href="#">
          <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-search"></use></svg>
          <span>Search</span>            
        </a>
        <!-- SEARCH -->
        <div class="m-search">
          <form action="http://www.globalforestwatch.org/search">
            <button type="submit"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-search"></use></svg></button>
            <input type="text" name="query" id="search-input" placeholder="Search GFW website">
            <button class="btn-search -close" type="button"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-close"></use></svg></button>
          </form>
        </div>        
      </li>
      <li class="m-header-item -default shape-howto">
        <a href="/howto">
          <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-howto"></use></svg>
          <span>How to</span>            
        </a>
      </li>
      <li class="m-header-item -default shape-mygfw" id="my-gfw-container">
        <a href="/login" id="submenuBtnLogin" data-submenu="#submenuLogin" class="m-header-submenu-btn">
          <svg class="-inactive"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-close"></use></svg>
          <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-mygfw"></use></svg>
          <span>Log in <em class="-only-desktop">to My GFW</em></span>
        </a>

        <div id="submenuLogin" class="m-header-submenu -default -right -login">
          <p>Log in is required so you can view, manage, and delete your subscriptions. Questions? <a href="mailto:gfw@wri.org">Contact us</a>.</p>
          <ul>
            <li class="my-gfw-sign-in-twitter"><a href="/auth/twitter" class="my-gfw-sign-in">Log in with Twitter</a></li>
            <li class="my-gfw-sign-in-facebook"><a href="/auth/facebook" class="my-gfw-sign-in">Log in with Facebook</a></li>
            <li class="my-gfw-sign-in-google"><a href="/auth/google" class="my-gfw-sign-in">Log in with Google</a></li>          
          </ul>
        </div>
      </li>
      <li class="m-header-item -default shape-apps">
        <a id="btnSubmenuApps" data-submenu="#submenuApps" data-stopnavigation="true" class="m-header-submenu-btn" href="/">
          <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-apps"></use></svg>
          <svg class="-inactive"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-close"></use></svg>
          <span>Apps</span>
        </a>
        <!-- APPS -->
        <div id="submenuApps" class="m-header-submenu -apps -default -right">
          <div class="m-apps-content">
            <div class="apps">
              <h1><a href="/"><span>Global Forest Watch Home</span></a></h1>
              <ul>
                <li class="shape-map">
                  <a href="/map">
                    <div class="app shape-map">
                      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-map"></use></svg>
                      <span>Interactive Map</span>
                    </div>
                  </a>
                </li>
                <li class="shape-countries">
                  <a href="/countries">
                    <div class="app shape-countries">
                      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-countries"></use></svg>
                      <span>Countries</span>
                    </div>
                  </a>
                </li>
                <li class="shape-fires">
                  <a class="external-link" target="_blank" href="http://fires.globalforestwatch.org/">
                    <div class="app shape-fires">
                      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-fires"></use></svg>
                      <span>Fires</span>
                    </div>
                  </a>
                </li>
                <li class="shape-commodities">
                  <a class="external-link" target="_blank" href="http://commodities.globalforestwatch.org/">
                    <div class="app shape-commodities">
                      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-commodities"></use></svg>
                      <span>Commodities</span>
                    </div>
                  </a>
                </li>
                <li class="shape-climate">
                  <a class="external-link" target="_blank" href="http://climate.globalforestwatch.org/">
                    <div class="app shape-climate">
                      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-climate"></use></svg>
                      <span>Climate</span>
                    </div>
                  </a>
                </li>
                <li class="shape-water">
                  <a class="external-link" target="_blank" href="http://water.globalforestwatch.org/">
                    <div class="app shape-water">
                      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-fires"></use></svg>
                      <span>Water</span>
                    </div>
                  </a>
                </li>
                <li class="shape-explore">
                  <a href="/explore">
                    <div class="app shape-explore">
                      <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-explore"></use></svg>
                      <span>Explore all apps</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>      

      </li>
      <li class="m-header-item -default shape-more">
        <a id="btnSubmenuMore" data-submenu="#submenuMore" data-stopnavigation="true" class="m-header-submenu-btn" href="/">
          <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-explore"></use></svg>
          <svg class="-inactive"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-close"></use></svg>
          <span>More in GFW</span>
        </a>
        <div id="submenuMore" class="m-header-submenu -more -default -right">
          <ul class="more-list">
            <li class="shape-develop"><a href="/"><span>GFW Home</span></a></li> 
            <li class="shape-develop"><a href="/getinvolved/develop-your-own-app"><span>Developer's corner</span></a></li> 
            <li class="shape-howto"><a href="/howto"><span>How to</span></a></li>
            <!-- <li class="shape-mygfw" id="my-gfw-container2"></li> -->
            <li class="shape-odp"><a class="external-link" target="_blank" href="http://data.globalforestwatch.org/"><span>Open Data Portal</span></a></li>
            <li><a href="https://groups.google.com/forum/#!forum/globalforestwatch" target="_blank"><span>Discussion forum</span></a></li>
            <li class="shape-blog"><a class="external-link" target="_blank" href="http://blog.globalforestwatch.org/"><span>Blog</span></a></li>
            <li><a href="/stayinformed/crowdsourced-stories"><span>Stories</span></a></li>
            <li><a href="/getinvolved/apply-to-the-small-grants-fund"><span>Small grants fund</span></a></li>
            <li><a class="-button" href="/sitemap">Sitemap</a></li>
          </ul>
        </div>        
      </li>
    </ul>

    <ul class="m-header-nav -mobile">
      <li class="m-header-item -default shape-menu">
        <a id="btnSubmenuMenuMobile" data-submenu="#submenuMenuMobile" class="m-header-submenu-btn" href="/">
          <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-menu"></use></svg>
          <svg class="-inactive -desktop-hide"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-h-close"></use></svg>
          <span>Menu</span>
        </a>
        <!-- HOME SUBMENU -->
        <div id="submenuMenuMobile" class="m-header-submenu -scroll-bar -home -menu"></div>
      </li>
    </ul>
  </div>
</div>