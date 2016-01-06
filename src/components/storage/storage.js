/*
 * @Author: {daihanqiao}
 * @Date:   2015-12-25 16:40:55
 * @Last Modified by:   {daihanqiao}
 * @Last Modified time: 2016-01-06 11:17:34
 */

(function() {
	"use strict";

	var storage = {
		set:function(key, value) {
			var v = value;
			if(typeof v === 'object'){
			    v = JSON.stringify(v);
			    v = 'obj-'+ v;
			}else{
			    v = 'str-'+ v;
			}
		},
		get:function(key) {
		    var v = localStorage.getItem(key);
		    if(!v){return null;}
			if(v.indexOf('obj-') === 0){
		        v = v.slice(4);
		        return JSON.parse(v);
		    }else{
		        return v.slice(4);
		    }
		},
		remove:function(key) {
			localStorage.removeItem(key);
		},

		clear:function(){
			localStorage.clear();
		}
	};

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define(function() {
			return storage;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = storage;
	} else {
		window.Storage = storage;
	}
}());