/*
* @Author: {daihanqiao}
* @Date:   2015-12-29 13:40:04
* @Last Modified by:   {daihanqiao}
* @Last Modified time: 2016-01-07 12:00:57
*/

"use strict";
module.exports = {
    setCallEl:function(el,mobile){
        return  <a href={"tel:"+mobile}>
                    {el}
                </a>;
    },
};