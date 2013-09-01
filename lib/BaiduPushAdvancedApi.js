

var ApiBuild = require('./ApiConfig');

var BAIDUPUSH_API = 'https://channel.api.duapp.com/rest/2.0/channel/'
  , BAIDUPUSH_CHANNEL_API = 'https://channel.api.duapp.com/rest/2.0/channel/channel';

function BaiduPushAdvancedApi(options) {
  ApiBuild.gobalConfig(options);
}

/**
 * 对象参数与官方文档一致
 * http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#verify_bind
 * @param {Object} reqBody
 * @param {Function} callback function(err, body) {}
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
 * 对象参数与官方文档一致
 * http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#fetch_msg
 * @param {Object} reqBody
 * @param {Function} callback function(err, body) {}
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

/**
 * 对象参数与官方文档一致
 * http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#fetch_msgcount
 * @param {Object} reqBody
 * @param {Function} callback function(err, body) {}
 */
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

/**
 * 对象参数与官方文档一致
 * http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#delete_msg
 * @param {Object} reqBody
 * @param {Function} callback function(err, body) {}
 */
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

/**
 * 对象参数与官方文档一致
 * http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#set_tag
 * @param {Object} reqBody
 * @param {Function} callback function(err, body) {}
 */
function setTag (reqBody, callback) {
  var getBody = {};

  getBody.method = 'set_tag';

  getBody.tag = reqBody.tag;

  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(BAIDUPUSH_CHANNEL_API, getBody, callback);
}

/**
 * 对象参数与官方文档一致
 * http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#fetch_tag
 * @param {Object} reqBody
 * @param {Function} callback function(err, body) {}
 */
function fetchTag (reqBody, callback) {
  var getBody = {};

  getBody.method = 'fetch_tag';

  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(BAIDUPUSH_CHANNEL_API, getBody, callback);
}

/**
 * 对象参数与官方文档一致
 * http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#delete_tag
 * @param {Object} reqBody
 * @param {Function} callback function(err, body) {}
 */
function deleteTag (reqBody, callback) {
  var getBody = {};

  getBody.method = 'delete_tag';

  getBody.tag = reqBody.tag;

  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(BAIDUPUSH_CHANNEL_API, getBody, callback);
}

/**
 * 对象参数与官方文档一致
 * http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#query_user_tags
 * @param {Object} reqBody
 * @param {Function} callback function(err, body) {}
 */
function queryUserTags (reqBody, callback) {
  var getBody = {};

  getBody.method = 'query_user_tags';

  getBody.user_id = reqBody.user_id;

  ApiBuild.initBaseParams(getBody, reqBody);

  ApiBuild.postBaiduPushApi(BAIDUPUSH_CHANNEL_API, getBody, callback);
}

/**
 * 对象参数与官方文档一致
 * http://developer.baidu.com/wiki/index.php?title=docs/cplat/push/api/list#query_device_type
 * @param {Object} reqBody
 * @param {Function} callback function(err, body) {}
 */
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
