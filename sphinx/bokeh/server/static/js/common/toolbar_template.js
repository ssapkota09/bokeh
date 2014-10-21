define(function(){
  var template = function(__obj) {
  var _safe = function(value) {
    if (typeof value === 'undefined' && value == null)
      value = '';
    var result = new String(value);
    result.ecoSafe = true;
    return result;
  };
  return (function() {
    var __out = [], __self = this, _print = function(value) {
      if (typeof value !== 'undefined' && value != null)
        __out.push(value.ecoSafe ? value : __self.escape(value));
    }, _capture = function(callback) {
      var out = __out, result;
      __out = [];
      callback.call(this);
      result = __out.join('');
      __out = out;
      return _safe(result);
    };
    (function() {
      _print(_safe('<a href=\'http://bokeh.pydata.org/\' target=\'_blank\' class=\'bk-logo bk-logo-small\'></a>\n<div class=\'bk-button-bar\'>\n  <ul class=\'bk-button-bar-list\' type="pan" />\n  <ul class=\'bk-button-bar-list\' type="scroll" />\n  <ul class=\'bk-button-bar-list\' type="pinch" />\n  <ul class=\'bk-button-bar-list\' type="tap" />\n  <ul class=\'bk-button-bar-list\' type="press" />\n  <ul class=\'bk-button-bar-list\' type="rotate" />\n  <ul class=\'bk-button-bar-list\' type="actions" />\n  <div class=\'bk-button-bar-list bk-bs-dropdown\' type="inspectors" />\n  <ul class=\'bk-button-bar-list\' type="help">\n    <li>\n  \t  <button class="bk-toolbar-button help" title="Help">\n\t    <img class="bk-btn-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NzIwRUFGMDYyMjE2ODExOTdBNUNBNjVEQTY5OTRDRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMjFERDhDRjIwQjIxMUU0ODREQUYzNzM5QTM2MjBCRSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMjFERDhDRTIwQjIxMUU0ODREQUYzNzM5QTM2MjBCRSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTdFQUZCRjQ4NjIxNjgxMTk3QTVDQTY1REE2OTk0Q0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyMEVBRjA2MjIxNjgxMTk3QTVDQTY1REE2OTk0Q0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6QBYrgAAABb0lEQVR42ozTwUeEQRjH8W3bKEs6JkpESqfVpS4RHaJL2b2sLepUh3To0KFVIjp0iegQUdG21WmVvUWsKBGRlIiU7Q+IVaT0ffi9eY33peFj7cw8zzvzzEzV7v5hxGltGEUvutR3hwvs4ck/OeoET6KACrJolaz6Cprz12L6rcEOajGEFyfxtRxhDX0Yx5e3ggV8IqlgW/4J3vCKddRrLKm5894KOjGCHiVrwDZ+sKKvpRQ0pzkzuETeEqSxpT1aa8ezCmbyuEW3b0sVxaQtQT+mfINXGPT9T+n3xqnLKTYsQQseI8FtWnstYdEZs9o0eqdQZxUNSWD9YwHj36i2UyijOWQFVvmPkOR2P8qW4AwDIQma0BEyZjGlqCo9gXjA1+0ePAQExxWTtwT3KOqG/bfZ3GOL9W7ikrIe6FSsvQdswcZymrvsf0xWpIzqYauZRcIXmFBfUUea8Qobc5a2qQtiz3nVec7nGHaf868AAwDKW1RIPmvhEQAAAABJRU5ErkJggg==">\n\t    <span class="tip">\n\t\t  For Pan tool, left click and drag.<br/><br/>\n\t\t  For Wheel Zoom, hold shift and scroll or select the Wheel Zoom tool and scroll.<br/><br/>\n\t\t  <a href="http://bokeh.pydata.org" target="_blank">Learn More</a>\n\t    </span>\n\t  </button>\n    </li>\n  </ul>\n</div>\n'));
    
    }).call(this);
    
    return __out.join('');
  }).call((function() {
    var obj = {
      escape: function(value) {
        return ('' + value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      },
      safe: _safe
    }, key;
    for (key in __obj) obj[key] = __obj[key];
    return obj;
  })());
};
  return template;
});
