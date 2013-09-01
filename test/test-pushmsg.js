
var should = require('should');
var BaiduPush = require('../index');
var URI = require('URIjs');

//var x = URI('')
//  .setSearch({xx:'kx'});

//console.log(x.normalizeQuery().readable());


//var xxx = URI("?&foo=bar&&foo=bar&foo=baz&")
//  .normalizeQuery().toString();

describe('#', function () {
  it('should query bind list', function (done) {
    var push = BaiduPush.build({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {}
    queryBody.push_type = 3;
    //queryBody.messages = {title: "hello", description: "hello world"};
    queryBody.messages = 'xxx';
    queryBody.msg_keys = 'testsdxxx';
    queryBody.message_type = 0;

    push.pushMsg(queryBody, function (err, body) {
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
