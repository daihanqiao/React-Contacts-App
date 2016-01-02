/*
* @Author: {daihanqiao}
* @Date:   2015-12-29 09:15:41
* @Last Modified by:   {daihanqiao}
* @Last Modified time: 2015-12-29 09:37:50
*/

var zlib = require('zlib');
var path = require('path');
var fs = require('fs');
var getPath = function(url) {
    return path.resolve('./', url);
};
// gz = zlib.gzFile("/路径.gz","wb");
// gz.write("字符串");
// gz.close();
function getFileList(path){
    var fileNameList = [];//不带后缀文件名
    walk = function(path, fileNameList){
        files = fs.readdirSync(path);
        files.forEach(function(item) {
            var tmpPath = path + '/' + item;
            console.log(tmpPath);
            var stats = fs.statSync(tmpPath);
            console.log(stats);
            if (stats.isDirectory()) {
                walk(tmpPath,fileNameList);
            } else {
                var fileName =tmpPath.split('/').pop();
                fileNameList.push(fileName);
            }
        });
    };
    walk(path,fileNameList);
    return fileNameList;
}
var fileNameList = getFileList(getPath('dev/js'));
console.log(fileNameList);
for (var i = 0,len=fileNameList.length; i < len; i++) {
	var gzip = zlib.createGzip();
    var inp = fs.createReadStream(getPath('dev/js')+'/'+fileNameList[i]);
    var out = fs.createWriteStream(getPath('dev/js')+'/'+fileNameList[i]+'.gz');
    inp.pipe(gzip).pipe(out);
}