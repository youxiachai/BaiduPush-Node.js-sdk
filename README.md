BaiduPush Node.js sdk
======================
百度云推送 Node.js 服务端 sdk
## Usage

```
npm install baidupush
```

## Example

``` js
var BaiduPush = require('baidupush');

var baiduPushClient = BaiduPush.buildBaseApi({apiKey: 'your app key', secretKey: 'your secret key'});

    var queryBody = {}
    queryBody.push_type = 3;
    queryBody.messages = {title: "hello", description: "hello world from push msg"};
    queryBody.msg_keys = 'hello';
    queryBody.message_type = 1;

    baiduPushClient.pushMsg(queryBody, function (err, body) {
      if (err) {
        if (typeof err !== 'String') {
          err = JSON.stringify(err);
        }
        return done(err);
      }
      console.log(body);
      done();
    })
```

## Api Docs

Comming soon;

## 支持本项目
如果你觉得这个项目还不错,就请作者喝杯咖啡吧

[![](http://blog.gfdsa.net/img/pay_encourage.png)](http://me.alipay.com/youxilua)
