/**
 * @author: youxiachai
 * @Date: 13-9-1
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */

var BaiduPushBaseApi = require('./BaiduPushBaseApi')
  , BaiduPushAdvancedApi = require('./BaiduPushAdvancedApi');

/**
 *
 * @param options
 * @returns {BaiduPushBaseApi}
 */
function buildBaseApi(options) {
  return new BaiduPushBaseApi(options);
}

/**
 *
 * @param options
 * @returns {BaiduPushAdvancedApi}
 */
function buildAdvancedApi(options) {

  return new BaiduPushAdvancedApi(options);
}

exports.buildBaseApi = buildBaseApi;

exports.buildAdvancedApi = buildAdvancedApi;