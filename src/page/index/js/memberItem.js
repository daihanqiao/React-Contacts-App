/*
* @Author: daihanqiao
* @Date:   2015-12-27 00:20:47
* @Last Modified by:   daihanqiao
* @Last Modified time: 2016-01-02 13:26:02
*/

'use strict';

var React = require('react');
var Icon = require('amazeui-react/lib/Icon');
require('memberItemCss');
module.exports = React.createClass({
	clickHandler:function(){
		api.call({
		    type: 'tel_prompt',
		    number: this.props.member_mobile
		});
	},
	render:function() {
		return 	<div className="memberItem" onClick={this.clickHandler}>
					<div className="memberName">{this.props.member_name}</div>
					<div className="memberMobile">{this.props.member_mobile}</div>
					<Icon className="memberItem-icon" icon="mobile" />
				</div>
	}
})