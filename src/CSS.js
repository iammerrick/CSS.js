var CSS = function(styles) {
  var output = {};
  var prefixes = 'Webkit Moz O ms'.split(' ');


  function prefix(obj, key) {
    return [Modernizr.prefixed(style), obj[style]];
  }
  
  function flexbox(obj, key) {
    if (key === 'display' && obj[key] === 'flex') {
      var prefixed = Modernizr.prefixed('flex');
      if (prefixed !== 'flex') {
        var result;
        prefixes.forEach(function(prefix) {
          if (prefixed.match(new RegExp(prefix))) {
            if (prefix === 'ms') {
              result = '-ms-flexbox';
            } else {
              result = '-'+prefix.toLowerCase()+'-flex';
            }
          }
        });
      }
    }
    return [key, obj[key]];
  }

  var visitors = [
    prefix,
    flexbox
  ];

  for (var style in styles) {
    visitors.forEach(function(visitor) {
      var result = visitor(styles, style);
      output[result[0]] = result[1];
    });
  }
  return output;
};
