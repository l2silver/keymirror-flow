"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyMirrorFlow;
function keyMirrorFlow(schema) {
  return Object.keys(schema).reduce(function (finalResult, key) {
    finalResult[key] = key;
    return finalResult;
  }, {});
}