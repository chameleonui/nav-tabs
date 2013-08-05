
# Tabs controller

  

## Installation

  Install with [component(1)](http://component.io):

    $ component install daidalos/nav-tabs

## Using

	<script src="build/build.js"></script>
    <script>
    	var $ = require('jquery');
		var Tabs = require('nav-tabs');

		var tabs = new Tabs('.nav-tabs:not([data-nojs]) > li > a');

    </script>

## API

	options = {
		classes : {
			navActive: 'is-active',
			tabActive: 'is-active'
		}
	}

new Tabs(Element, options)

Tabs.init()

Tabs.tabToggle(jQueryThis)

Tabs.removeActive(targetElement)

Tabs.addActive(targetElement)

Tabs.navToggle(jQueryThis)

Tabs.navRemoveActive(jQueryThis)

Tabs.selfActive(jQueryThis)


## License

  MIT
