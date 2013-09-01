/**
 * @author: youxiachai
 * @Date: 13-9-2
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */


var ApiBuild = require('./ApiConfig');

var BAIDUPUSH_API = 'https://channel.api.duapp.com/rest/2.0/channel/'
  , BAIDUPUSH_CHANNEL_API = 'https://channel.api.duapp.com/rest/2.0/channel/channel';

function BaiduPushAdvancedApi(options) {
  ApiBuild.gobalConfig(options);
}

/**
 *
 * @param reqBody
 * @param callback
 */
function verifyBind(reqBody, callback) {

  var apiUrl = '';

  if (reqBody.channel_id) {
    apiUrl = BAIDUPUSH_API + reqBody.channel_id;
  } else {
    apiUrl = BAIDUPUSH_CHANNEL_API;
  }

  var getBody = {};

  getBody.method = 'verify_bind';

  getBody.user_id = reqBody.user_id;


  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.getBaiduPushApi(apiUrl, getBody, callback);
}

/**
 *
 * @param reqBody
 * @param callback
 */
function fetchMsg(reqBody, callback) {
  var apiUrl = '';

  if (reqBody.channel_id) {
    apiUrl = BAIDUPUSH_API + reqBody.channel_id;
  } else {
    apiUrl = BAIDUPUSH_CHANNEL_API;
  }

  var getBody = {};

  getBody.method = 'fetch_msg';

  getBody.user_id = reqBody.user_id;


  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.getBaiduPushApi(apiUrl, getBody, callback);
}

function fetchMsgCount(reqBody, callback) {
  var apiUrl = '';

  if (reqBody.channel_id) {
    apiUrl = BAIDUPUSH_API + reqBody.channel_id;
  } else {
    apiUrl = BAIDUPUSH_CHANNEL_API;
  }

  var getBody = {};

  getBody.method = 'fetch_msgcount';

  getBody.user_id = reqBody.user_id;


  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.getBaiduPushApi(apiUrl, getBody, callback);
}

function deleteMsg (reqBody, callback) {
  var apiUrl = '';

  if (reqBody.channel_id) {
    apiUrl = BAIDUPUSH_API + reqBody.channel_id;
  } else {
    apiUrl = BAIDUPUSH_CHANNEL_API;
  }

  var getBody = {};

  getBody.method = 'delete_msg';

  getBody.user_id = reqBody.user_id;

  getBody.msg_ids = reqBody.msg_ids;

  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(apiUrl, getBody, callback);
}

function setTag (reqBody, callback) {
  var getBody = {};

  getBody.method = 'set_tag';

  getBody.tag = reqBody.tag;

  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(BAIDUPUSH_CHANNEL_API, getBody, callback);
}

function fetchTag (reqBody, callback) {
  var getBody = {};

  getBody.method = 'fetch_tag';

  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(BAIDUPUSH_CHANNEL_API, getBody, callback);
}

function deleteTag (reqBody, callback) {
  var getBody = {};

  getBody.method = 'delete_tag';

  getBody.tag = reqBody.tag;

  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(BAIDUPUSH_CHANNEL_API, getBody, callback);
}

function queryUserTags (reqBody, callback) {
  var getBody = {};

  getBody.method = 'query_user_tags';

  getBody.user_id = reqBody.user_id;

  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(BAIDUPUSH_CHANNEL_API, getBody, callback);
}

function queryDeviceType (reqBody, callback) {

  var apiUrl = '';

  if (reqBody.channel_id) {
    apiUrl = BAIDUPUSH_API + reqBody.channel_id;
  } else {
    apiUrl = BAIDUPUSH_CHANNEL_API;
  }


  var getBody = {};

  getBody.method = 'query_device_type';


  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(apiUrl, getBody, callback);
}

BaiduPushAdvancedApi.prototype.queryDeviceType = queryDeviceType;

BaiduPushAdvancedApi.prototype.queryUserTags = queryUserTags;

BaiduPushAdvancedApi.prototype.deleteTag = deleteTag;

BaiduPushAdvancedApi.prototype.fetchTag = fetchTag;

BaiduPushAdvancedApi.prototype.setTag = setTag;

BaiduPushAdvancedApi.prototype.deleteMsg = deleteMsg;

BaiduPushAdvancedApi.prototype.fetchMsg = fetchMsg;

BaiduPushAdvancedApi.prototype.fetchMsgCount = fetchMsgCount;

BaiduPushAdvancedApi.prototype.verifyBind = verifyBind;

module.exports = BaiduPushAdvancedApi;
