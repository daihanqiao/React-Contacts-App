/*
* @Author: {daihanqiao}
* @Date:   2015-12-29 13:40:04
* @Last Modified by:   {daihanqiao}
* @Last Modified time: 2016-01-06 13:30:19
*/

var React = require('react');
(function() {
	"use strict";

	var common = {
		setCallEl:function(el,mobile){
		    return  <a href={"tel:"+mobile}>
		                {el}
		            </a>;
		},
	};

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define(function() {
			return common;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = common;
	} else {
		window.Common = common;
	}
}());