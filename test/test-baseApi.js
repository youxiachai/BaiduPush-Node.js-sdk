
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

  it('should query bind list', function (done) {
    var push = BaiduPush.buildBaseApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {}
    queryBody.push_type = 3;
    queryBody.messages = {title: "hello", description: "hello world from push msg"};
//    queryBody.messages = 'xxx';
    queryBody.msg_keys = 'tessdftsdxxx';
    queryBody.message_type = 1;

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
