// =============================================
// Add array prototype methods to NodeLists.
// =============================================
function attachArrayMethodsToNodeList(methodName) {
  if (methodName !== 'length') {
    NodeList.prototype[methodName] = Array.prototype[methodName];
  }
}

Object.getOwnPropertyNames(Array.prototype).forEach(attachArrayMethodsToNodeList);
