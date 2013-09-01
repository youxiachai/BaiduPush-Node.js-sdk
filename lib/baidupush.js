/**
 * @author: youxiachai
 * @Date: 13-9-1
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */

var request = require('request')
  , URI = require('URIjs')
  , crypto = require('crypto');

var BAIDUPUSH_API = 'http://channel.api.duapp.com/rest/2.0/channel/'
  , BAIDUPUSH_CHANNEL_API = 'http://channel.api.duapp.com/rest/2.0/channel/channel';


/*
 * To encode url
 * @param {String} str Body string
 * @returns {String} encoded url
 * @desc php urlencode is different from js, the way of Push server encode is same with php, so js need do some change
 */
function urlencode(str) {
  // http://kevin.vanzonneveld.net
  str = (str + '').toString();

  // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

/*
 * Get current time
 * @returns {Number} The current time in seconds since the Epoch
 */
function getTimestamp() {
  var timestamp = Math.floor(new Date().getTime() / 1000);
  return timestamp;
}

/*
 * Generate sign
 * @see http://developer.baidu.com/wiki/index.php?title=docs/cplat/mq/sign
 * @param {String} method HTTP request method
 * @param {String} url HTTP request url
 * @param {Object} params HTTP request body
 * @param {String} sk User's secret key in bae
 * @returns {String} sign
 */
function getSign(method, url, params, sk) {
  var baseStr = method + url;

  for (var i in params) {
    baseStr += i + '=' + params[i];
  }

  baseStr += sk;
  //var encodeStr = encodeURIComponent(baseStr);
  var encodeStr = urlencode(baseStr);
  var debug = false;
  if (debug) {
    console.log('getSign: base str = ' + baseStr + ', encode str = ' + encodeStr);
  }

  var md5sum = crypto.createHash('md5');
  md5sum.update(encodeStr);

  var sign = md5sum.digest('hex');
  return sign;
}

function BaiduPush(options) {
  this.apiKey = options.apiKey;
  this.secretKey = options.secretKey;
}

//参数字典排序
function sortObj(obj) {
  var index = []
    , resultObj = {};

  Object.keys(obj).forEach(function (key) {
    index.push(key);
  });

  index.sort();

  for (var i = 0; i < index.length; i++) {
    resultObj[index[i]] = obj[index[i]];
  }

  return resultObj;
}

/**
 *
 * @param queryBody
 * @param callback
 */
function queryBindlist(queryBody, callback) {
  var apiUrl = '';

  if (queryBody.channelId) {
    apiUrl = BAIDUPUSH_API + queryBody.channelId;
  } else {
    apiUrl = BAIDUPUSH_CHANNEL_API;
  }

  var getBody = {};
  getBody.method = 'query_bindlist';
  getBody.apikey = this.apiKey;
  getBody.timestamp = getTimestamp();

  initBaseParams(getBody, queryBody);

  getBody.sign = getSign('GET', apiUrl, sortObj(getBody), this.secretKey);

  getBaiduPushApi(apiUrl, getBody, callback);
}

BaiduPush.prototype.queryBindlist = queryBindlist;

function initBaseParams(paramsBody, reqBody) {

  if (reqBody.userId) {
    paramsBody.user_id = reqBody.userId;
  }

  if (reqBody.deviceType) {
    paramsBody.device_type = reqBody.deviceType;
  }

  if (reqBody.start) {
    paramsBody.start = reqBody.start;
  }

  if (reqBody.expires) {
    paramsBody.expires = reqBody.expires;
  }

  if (reqBody.v) {
    paramsBody.v = reqBody.v;
  }

  if (reqBody.channelId) {
    paramsBody.channl_id = reqBody.channelId;
  }

  if (reqBody.tag) {
    paramsBody.tag = reqBody.tag;
  }

  if (!reqBody.message_type) {
    paramsBody.message_type = 0;
  } else {
    paramsBody.message_type = reqBody.message_type;
  }

  if (reqBody.message_expires) {
    paramsBody.message_expires = reqBody.message_expires;
  }

  if (reqBody.deploy_status) {
    paramsBody.deploy_status = reqBody.deploy_status;
  }
}

function pushMsg(reqBody, callback) {

  var postBody = {};
  postBody.method = 'push_msg';
  postBody.apikey = this.apiKey;
  postBody.timestamp = getTimestamp();

  initBaseParams(postBody, reqBody);

  postBody.push_type = reqBody.push_type;


  if(typeof reqBody.messages === 'object' ){
    reqBody.messages = JSON.stringify(reqBody.messages);
  }

  postBody.messages = reqBody.messages;

  postBody.msg_keys = reqBody.msg_keys;

  postBody.sign = getSign('POST', BAIDUPUSH_CHANNEL_API, sortObj(postBody), this.secretKey);

  postBaiduPushApi(BAIDUPUSH_CHANNEL_API, postBody, callback);
}

BaiduPush.prototype.pushMsg = pushMsg;

function getBaiduPushApi(apiUrl, getBody, callback) {
  var done = function (err, res, body) {
    if (err) return callback(err);

    if (res.statusCode == 200) {
      callback(null, body);
    } else {
      callback({
        statusCode: res.statusCode,
        body: body
      })
    }
  };

  apiUrl = URI(apiUrl)
    .search(getBody)
    .toString();

  console.log(apiUrl);
  request.get(apiUrl, done);
}


function postBaiduPushApi(apiUrl, postBody, callback) {

  var done = function (err, res, body) {
    if (err) return callback(err);

    if (res.statusCode == 200) {
      callback(null, body);
    } else {
      callback({
        statusCode: res.statusCode,
        body: body
      })
    }
  };

  request.post({
   url: apiUrl,
   form: postBody,
   timeout: 5000
  }, done);

//  request.post(apiUrl, {form: postBody},done);
}


/**
 *
 * @param {Object} options
 * @returns {BaiduPush}
 */
function build(options) {
  return new BaiduPush(options);
}

exports.build = build;