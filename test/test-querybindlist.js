/**
 * @author: youxiachai
 * @Date: 13-9-1
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */
/**
 * @author: youxiachai
 * @Date: 13-9-1
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */
//var URI = require('URIjs');
//
//var url = URI("http://example.org/foo.html")
//  .search({ foo: "bar%x", hello : true });
//
//var xxx = URI("?&foo=bar&&foo=bar&foo=baz&")
//  .normalizeQuery().toString();
//
////console.log(xxx.replace(/[\?&]/g, ''));
//
//var test= {k2: 'k2value',k1: 'k1value'};
//
//var index = [];
//
//Object.keys(test).forEach(function (key) {
//  index.push(key);
//})
//
//index.sort();
//
//var resultObj = {};
//for (var i = 0; i < index.length; i++){
//  resultObj[index[i]] = test[index[i]];
//}
//console.log(test);
//
//console.log(resultObj);

var should = require('should');
var BaiduPush = require('../index');

describe('#', function () {
  it('should query bind list', function (done) {
    var push = BaiduPush.buildBaseApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {}
    push.queryBindlist(queryBody, function (err, body) {
      if (err) {
        if (typeof err !== 'String') {
          err = JSON.stringify(err);
        }
        return done(err);
      }
      console.log(body);
      done();
    })

  })
});
