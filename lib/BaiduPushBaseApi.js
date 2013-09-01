

var ApiBuild = require('./ApiConfig');

var BAIDUPUSH_API = 'http://channel.api.duapp.com/rest/2.0/channel/'
  , BAIDUPUSH_CHANNEL_API = 'http://channel.api.duapp.com/rest/2.0/channel/channel';

function BaiduPushBaseApi(options) {
  ApiBuild.gobalConfig(options);
}


/**
 *对象参数与官方文档一致
 *http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#query_bindlist
 * @param {Object} queryBody
 * @param {Function} callback function(err, body) {}
 */
function queryBindlist(queryBody, callback) {
  var apiUrl = '';

  if (queryBody.channel_id) {
    apiUrl = BAIDUPUSH_API + queryBody.channel_id;
  } else {
    apiUrl = BAIDUPUSH_CHANNEL_API;
  }

  var getBody = {};
  getBody.method = 'query_bindlist';

  ApiBuild.initBaseParams(getBody, queryBody);

  ApiBuild.getBaiduPushApi(apiUrl, getBody, callback);
}

BaiduPushBaseApi.prototype.queryBindlist = queryBindlist;


/**
 *对象参数与官方文档一致
 *http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#push_msg
 * @param {Object} queryBody
 * @param {Function} callback function(err, body) {}
 */
function pushMsg(reqBody, callback) {

  var postBody = {};
  postBody.method = 'push_msg';

  postBody.push_type = reqBody.push_type;

  if(typeof reqBody.messages === 'object' ){
    reqBody.messages = JSON.stringify(reqBody.messages);
  }

  postBody.messages = reqBody.messages;

  postBody.msg_keys = reqBody.msg_keys;

  ApiBuild.initBaseParams(postBody, reqBody);

  ApiBuild.postBaiduPushApi(BAIDUPUSH_CHANNEL_API, postBody, callback);
}

BaiduPushBaseApi.prototype.pushMsg = pushMsg;

module.exports = BaiduPushBaseApi;