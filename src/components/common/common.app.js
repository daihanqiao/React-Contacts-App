/*
* @Author: {daihanqiao}
* @Date:   2015-12-29 13:40:04
* @Last Modified by:   {daihanqiao}
* @Last Modified time: 2016-01-07 12:00:51
*/

"use strict";
module.exports = {
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