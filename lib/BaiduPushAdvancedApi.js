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

BaiduPushAdvancedApi.prototype.verifyBind = verifyBind;

module.exports = BaiduPushAdvancedApi;
