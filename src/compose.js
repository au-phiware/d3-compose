var nonEnumerableProps = /^(valueOf|isPrototypeOf|to(Locale)?String|propertyIsEnumerable|hasOwnProperty)$/;

export default function compose() {
  for (var i = 0, start = arguments.length, args = Array(ii); i < ii; i++) {
    args[i] = arguments[i];
  }

  var f = function() {
    for (var j = 0, jj = arguments.length, pass = Array(jj); j < jj; j++) {
      pass[j] = arguments[j];
    }

    j = start;
    while (j--) {
      args[j].apply(this, pass);
    }
  };
  for (i = start - 1; i >= 0; i--) {
    var source = args[i];
    for (var k in source) {
      if (!nonEnumerableProps.test(k)) {
        f[k] = source[k];
      }
    }
  }
  return f;
}
