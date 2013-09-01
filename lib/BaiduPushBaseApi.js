/**
 * @author: youxiachai
 * @Date: 13-9-2
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */

var ApiBuild = require('./ApiConfig');

var BAIDUPUSH_API = 'http://channel.api.duapp.com/rest/2.0/channel/'
  , BAIDUPUSH_CHANNEL_API = 'http://channel.api.duapp.com/rest/2.0/channel/channel';

function BaiduPushBaseApi(options) {
  ApiBuild.gobalConfig(options);
}


/**
 *
 * @param queryBody
 * @param callback
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
 *
 * @param reqBody
 * @param callback
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