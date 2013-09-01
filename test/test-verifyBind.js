/**
 * @author: youxiachai
 * @Date: 13-9-2
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */
var should = require('should');
var BaiduPush = require('../index');

describe('#', function () {
  it('should ver ', function (done) {
    var push = BaiduPush.buildAdvancedApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {};
    queryBody.user_id = '687769267209936938';

    push.verifyBind(queryBody, function (err, body) {
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