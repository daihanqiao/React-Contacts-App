/*
 * @Author: {daihanqiao}
 * @Date:   2015-12-23 15:25:18
 * @Last Modified by:   {daihanqiao}
 * @Last Modified time: 2016-01-02 13:27:04
 */

'use strict';
function ready() {
	var React = require('react');
	var ReactDOM = require('react-dom');
	var ReactDomServer  = require('react-dom/server');
	var Reqwest = require('reqwest');
	var Sha1 = require('js-sha1');
	var _ = {
		now: require('lodash/date/now'),
		map: require('lodash/collection/map')
	};
	var Storage = require('storage');
	var FastClick = require('fastclick');
	FastClick.attach(document.body);

	var Accordion = require('amazeui-react/lib/Accordion');
	require('amazeui.minCss');

	require('indexCss');
	var Loader = require('loader');
	var MemberItem = require('memberItem');

	//将用户按部门分类
	function setMemberData(memberList, departmentList) {
		var memberDepartmentList = {};
		for (var i = 0, len = memberList.length; i < len; i++) {
			var memberData = memberList[i];
			var member_department_id = memberData.member_department_id;
			if (!memberDepartmentList[member_department_id]) {
				memberDepartmentList[member_department_id] = [];
			}
			memberDepartmentList[member_department_id].push(memberData);
		}
		var list = [];
		for (i = 0, len = departmentList.length; i < len; i++) {
			var departmentData = departmentList[i];
			list.push({
				'department_name': departmentData.department_name,
				'id': departmentData.id,
				member_list: memberDepartmentList[departmentData.id] || []
			});
		}
		return list;
	}

	//ajax请求
	var request = function(urlPath, succCallBack, param, method) {
		var now = _.now();
		var appKey = Sha1("A6993663430779" + "UZ" + "99788B23-69C1-ECEA-DB4E-8186F7DBA764" + "UZ" + now) + "." + now;
		var needUpVersion = true;

		function ajax(urlPath, succCallBack, param, method) {
			method = method || "GET";
			Reqwest({
				url: "https://d.apicloud.com/mcm/api/" + urlPath,
				method: method,
				data: param,
				dataType: 'json',
				timeout: 30000,
				headers: {
					"X-APICloud-AppId": "A6993663430779",
					"X-APICloud-AppKey": appKey
				},
				success: function(ret) {
					succCallBack(ret);
				},
				error: function(err) {
					console.log(err);
				}
			});
		}
		ajax(urlPath, succCallBack, param, method);
	};
	Loader.show();
	var memberDepartmentList = null;
	//对比版本号，检测是否有更新
	request('version', function(ret) {
		if (ret && ret.length > 0) {
			var versionId = ret[0].update_time;
			//无版本更新，直接进入应用
			memberDepartmentList = Storage.get('INDEX_DATA');
			if (Storage.get('INDEX_VERSION') === versionId && memberDepartmentList) {
				render();
			} else {
				getMemberData();
			}
		} else {
			getMemberData();
		}
	});
	//获取联系人数据
	function getMemberData() {
		request('department_class', function(ret) {
			var departmentList = ret;
			request('member', function(ret) {
				memberDepartmentList = setMemberData(ret, departmentList);
				Storage.set('INDEX_DATA', memberDepartmentList);
				render();
			});
		});
		request('version', function(ret) {
			if (ret && ret.length > 0) {
				Storage.set('INDEX_VERSION', ret[0].update_time);
			}
		});
	}
	//渲染组件
	function render() {
		if (memberDepartmentList) {
			var panelList = [];
			var data = [];
			_.map(memberDepartmentList,function(item){
				var memberList = item.member_list;
				var memberElList = [];
				_.map(memberList,function(memberItem){
					memberElList.push(<MemberItem key={memberItem.id} member_name={memberItem.member_name} member_mobile={memberItem.member_mobile}></MemberItem>);
				})
				var MemberEl = React.createClass({
					render:function(){
						return <div>
							{memberElList}
						</div>
					}
				})
				data.push({title:item.department_name,content:ReactDomServer.renderToString(<MemberEl/>),reactEl:<MemberEl/>});
			})
			ReactDOM.render(
				<Accordion data={data} theme='gapped' ></Accordion>,
			document.getElementById('appCon'));
			//ui框架只接收字符串，但renderToString无法绑定事件，需重新render节点
			var contentEls = document.querySelectorAll('.am-accordion-content');
			_.map(contentEls,function(item,index){
				ReactDOM.render(data[index].reactEl,item);
			})
			Loader.hide();
		}
	}
}
__READY__();