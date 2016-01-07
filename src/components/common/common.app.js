/*
* @Author: {daihanqiao}
* @Date:   2015-12-29 13:40:04
* @Last Modified by:   {daihanqiao}
* @Last Modified time: 2016-01-07 16:01:39
*/

"use strict";
function isIos7(){
    var strDM = api.systemType;
    if (strDM == 'ios') {
        var strSV = api.systemVersion;
        var numSV = parseInt(strSV,10);
        var fullScreen = api.fullScreen;
        var iOS7StatusBarAppearance = api.iOS7StatusBarAppearance;
        if (numSV >= 7 && !fullScreen && iOS7StatusBarAppearance){
            return true;
        }
    }
    return false;
}
module.exports = {
    setIos7Bar: function(selector,type){
        type = type || 1;
        if(isIos7()){
            if(type == 1){
                document.querySelector(selector).style.paddingTop = '20px';
            }else{
                document.querySelector(selector).style.marginTop = '20px';
            }
        }
    },
    setCallEl:function(el,mobile){
        function callPhone(){
            api.call({
                type: 'tel_prompt',
                number: mobile
            });
        }
        return  <a href="javascript:void(0);" onClick={callPhone}>
                    {el}
                </a>;
    },
};