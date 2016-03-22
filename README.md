# GFW Assets

[![Build Status](https://travis-ci.org/Vizzuality/gfw-assets.svg?branch=master)](https://travis-ci.org/Vizzuality/gfw-assets)

This repo provides the navigation bar shared by all Global Forest Watch 
websites, such as GFW, GFW Fires, Commodities, etc.

![Navbar in action](images/demo.png?raw=true)

## Installation

Requirements:

* NodeJs 5.2+ [How to install](https://nodejs.org/download/)

Install project dependencies:

	npm install

## Usage (development)

To see in development mode run and follow terminal instructions:

	npm start

We are using webpack to build the assets, to run it:

	npm build

To sync CDN with compiled version please run:

	npm publish

## How to use (in sites)

Add this piece of HTML in your site to add GFW's header:

	<div id="headerGfw"></div>

And this to add GFW's footer:

	<div id="footerGfw"></div>

To finish, add this script in your site:

	<script src="https://[cdn-url]/latest"></script>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request :D
