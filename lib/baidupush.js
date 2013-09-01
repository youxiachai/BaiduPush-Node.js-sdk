
var BaiduPushBaseApi = require('./BaiduPushBaseApi')
  , BaiduPushAdvancedApi = require('./BaiduPushAdvancedApi');

/**
 * 创建百度云推送基本api调用实例
 * @param {Object} options {apiKey: 'your app key', secretKey: 'your secret key'}
 * @return {BaiduPushBaseApi} BaiduPushBaseApi
 */
function buildBaseApi(options) {
  return new BaiduPushBaseApi(options);
}

/**
 * 创建百度云推送高级api调用实例
 * @param {Object} options {apiKey: 'your app key', secretKey: 'your secret key'}
 * @return {BaiduPushAdvancedApi} BaiduPushAdvancedApi
 */
function buildAdvancedApi(options) {
  return new BaiduPushAdvancedApi(options);
}

exports.buildBaseApi = buildBaseApi;

exports.buildAdvancedApi = buildAdvancedApi;