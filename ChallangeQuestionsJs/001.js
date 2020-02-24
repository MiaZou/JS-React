function getUrlParam(url, key) {
  let result = {};
  url.replace(/\??(\w+)=(\w+)&?/g, function(a, k, v) {
    if (result[k] !== void 0) {
      var t = result[k];
      result[k] = [].concat(t, v);
    } else {
      result[k] = v;
    }
  });

  if (key === void 0) {
    return result;
  } else {
    return result[key] || '';
  }
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key'));