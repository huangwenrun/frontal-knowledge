var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var loader = require('weex-loader');
var scripter = require('weex-scripter');
var styler = require('weex-styler');
var templater = require('weex-templater');


var entry = {};
/**
 * 遍历目录下的所有文件
 * @param dir
 * @param root
 */
function walk(dir, root) {
    //将地址拼接 __dirname/root/dir
  var directory = path.join(__dirname, root, dir);
  //读取目录
  fs.readdirSync(directory)
    .forEach(function(file) {
      var fullpath = path.join(directory, file);
      //获取文件信息
      var stat = fs.statSync(fullpath);
      //获取文件的扩展名
      var extname = path.extname(fullpath);
      if (stat.isFile() &&
             (extname === '.we' || extname === '.js')) {
        var name = path.join(root, 'build', dir, path.basename(file, extname));
        entry[name] = fullpath + '?entry=true';
      } else if (stat.isDirectory() &&
                  file !== 'build') {
        var subdir = path.join(dir, file);
        walk(subdir, root);
      }
    });
}
walk('./', 'src');

module.exports = {
  entry: entry,
  output : {
    path: __dirname,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.we(\?[^?]+)?$/,
        loader: 'weex'
      },
      {
        test: /\.js(\?[^?]+)?$/,
        loader: 'weex?type=script'
      },
      {
        test: /\.css(\?[^?]+)?$/,
        loader: 'weex?type=style'
      },
      {
        test: /\.html(\?[^?]+)?$/,
        loader: 'weex?type=tpl'
      }
    ]
  }
}
