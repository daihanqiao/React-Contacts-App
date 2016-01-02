/*
 * @Author: {daihanqiao}
 * @Date:   2015-12-25 16:40:55
 * @Last Modified by:   {daihanqiao}
 * @Last Modified time: 2015-12-25 17:07:34
 */

(function() {
	"use strict";

	function storage() {
		var localStorage = window.localStorage;

		function set(key, value) {
			var v = value;
			if(typeof v === 'object'){
			    v = JSON.stringify(v);
			    v = 'obj-'+ v;
			}else{
			    v = 'str-'+ v;
			}
			localStorage.setItem(key, v);
		}

		function get(key) {
		    var v = localStorage.getItem(key);
		    if(!v){return null;}
			if(v.indexOf('obj-') === 0){
		        v = v.slice(4);
		        return JSON.parse(v);
		    }else{
		        return v.slice(4);
		    }
		}

		function remove(key) {
			localStorage.removeItem(key);
		}

		function clear(){
			localStorage.clear();
		}

		return {
			set: set,
			get: get,
			remove: remove,
			clear: clear
		};
	}

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define(function() {
			return storage();
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = storage();
	} else {
		window.storage = storage();
	}
}());