/*!
 *
 */
var request = require('request')
  , URI = require('URIjs')
  , crypto = require('crypto');

request = request.defaults({
  strictSSL: false, // allow us to use our self-signed cert for testing
  rejectUnauthorized: false
});

var config;


function gobalConfig (options) {
  config = options;
};



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

  getBody.sign = getSign('GET', apiUrl, sortObj(getBody), config.secretKey);

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


  postBody.sign = getSign('POST', apiUrl, sortObj(postBody), config.secretKey);

  request.post({
    url: apiUrl,
    form: postBody,
    timeout: 5000
  }, done);

//  request.post(apiUrl, {form: postBody},done);
}

/*!
 *
 * To encode url
 *
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

/*!
 * Get current time
 * @returns {Number} The current time in seconds since the Epoch
 */
function getTimestamp() {
  var timestamp = Math.floor(new Date().getTime() / 1000);
  return timestamp;
}

/*!
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

function initBaseParams(paramsBody, reqBody) {

  paramsBody.apikey = config.apiKey;

  paramsBody.timestamp = getTimestamp();

  if (reqBody.user_id) {
    paramsBody.user_id = reqBody.user_id;
  }

  if (reqBody.device_type) {
    paramsBody.device_type = reqBody.device_type;
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

  if (reqBody.channl_id) {
    paramsBody.channl_id = reqBody.channl_id;
  }

  if (reqBody.tag) {
    paramsBody.tag = reqBody.tag;
  }

  if (reqBody.message_type) {
    paramsBody.message_type = reqBody.message_type;
  }

  if (reqBody.message_expires) {
    paramsBody.message_expires = reqBody.message_expires;
  }

  if (reqBody.deploy_status) {
    paramsBody.deploy_status = reqBody.deploy_status;
  }
}

exports.initBaseParams = initBaseParams;
exports.getBaiduPushApi = getBaiduPushApi;
exports.postBaiduPushApi = postBaiduPushApi;
exports.gobalConfig = gobalConfig;
