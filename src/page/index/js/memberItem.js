/*
* @Author: daihanqiao
* @Date:   2015-12-27 00:20:47
* @Last Modified by:   daihanqiao
* @Last Modified time: 2016-01-06 13:31:28
*/

'use strict';

var React = require('react');
var Common = require(__COMMON__);
var Icon = require('amazeui-react/lib/Icon');
require('memberItemCss');
module.exports = React.createClass({
	render:function() {
		var memberItem = <div className="memberItem">
							<div className="memberName">{this.props.member_name}</div>
							<div className="memberMobile">{this.props.member_mobile}</div>
							<Icon className="memberItem-icon" icon="mobile" />
						</div>;
		return Common.setCallEl(memberItem,this.props.member_mobile);
	}
})