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

  it('should fetch msg ', function (done) {
    var push = BaiduPush.buildAdvancedApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {};
    queryBody.user_id = '687769267209936938';

    push.fetchMsg(queryBody, function (err, body) {
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

  it('should fetch msg count', function (done) {
    var push = BaiduPush.buildAdvancedApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {};
    queryBody.user_id = '687769267209936938';

    push.fetchMsgCount(queryBody, function (err, body) {
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

  it('should delete msg', function (done) {
    var push = BaiduPush.buildAdvancedApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {};
    queryBody.user_id = '687769267209936938';
    queryBody.msg_ids = 123;
    push.deleteMsg(queryBody, function (err, body) {
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

  it('should set tag', function (done) {
    var push = BaiduPush.buildAdvancedApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {};
    queryBody.tag = 'test';

    push.setTag(queryBody, function (err, body) {
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

  it('should delete tag', function (done) {
    var push = BaiduPush.buildAdvancedApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {};
    queryBody.tag = 'test';
    push.deleteTag(queryBody, function (err, body) {
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

  it('should query user tags', function (done) {
    var push = BaiduPush.buildAdvancedApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {};
    queryBody.user_id = '687769267209936938';
    push.queryUserTags(queryBody, function (err, body) {
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

  it('should query device type', function (done) {
    var push = BaiduPush.buildAdvancedApi({apiKey: 'VvTeGxhEbyPCGwCkP7qzGtw7', secretKey: 'oCt77INHfOHAzZLoyYbj7xtXm7muiogj'});

    var queryBody = {};
    queryBody.channel_id = '3656932574965217049';
    push.queryDeviceType(queryBody, function (err, body) {
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