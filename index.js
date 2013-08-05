var $ = require('jquery');

module.exports = Tabs;

var defaults = {
	classes : {
		navActive: 'is-active',
		tabActive: 'is-active'
	}
};

function Tabs(Element, options){
	this.options = options || {};
	for (var i in defaults) {
		if (!(this.options[i])) this.options[i] = defaults[i];
	}

	this._element = Element;
	this._$element = $(this._element);
	this._dataTarget = null;
	
	this.init();
}

Tabs.prototype.init = function() {
	var _this = this;
	this._$element.on('click', function(e){
		e.preventDefault();
		_this.tabToggle($(this)).navToggle($(this));
	});
};

Tabs.prototype.tabToggle = function(_self) {
	var targetHash = _self[0].hash;
	this.removeActive(targetHash).addActive(targetHash);
	return this;
};

Tabs.prototype.removeActive = function(targetElement) {
	$(targetElement).parent().children('.'+this.options.classes.tabActive).removeClass(this.options.classes.tabActive);
	return this;
};

Tabs.prototype.addActive = function(targetElement) {
	$(targetElement).addClass(this.options.classes.tabActive);
	return this;
};

Tabs.prototype.navToggle = function(_self) {
	this.navRemoveActive(_self).selfActive(_self);
	return this;
};

Tabs.prototype.navRemoveActive = function(_self) {
	_self.parents('ul').children('.'+this.options.classes.navActive).removeClass(this.options.classes.navActive);
	return this;
};

Tabs.prototype.selfActive = function(_self) {
	_self.parents('li').addClass(this.options.classes.navActive);
	return this;
};
