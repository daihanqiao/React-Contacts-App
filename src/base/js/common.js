/*
* @Author: {daihanqiao}
* @Date:   2015-12-29 13:40:04
* @Last Modified by:   {daihanqiao}
* @Last Modified time: 2016-01-07 16:01:50
*/

"use strict";
var React = require('react');
module.exports = {
	setIos7Bar: function(selector,type){
		return false;
	},
    setCallEl:function(el,mobile){
        return  <a href={"tel:"+mobile}>
                    {el}
                </a>;
    },
};
