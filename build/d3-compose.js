(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

  // Introduction
  // ============
  //
  // Many D3 plugins are intended to be invoked by [`selection.call`][call],
  // meaning that they produce a function that can be configured and then passed
  // to `selection.call`.  For example, [d3-axis][d3-axis] provides a number of
  // constructors (`axisLeft`, `axisTop`, etc.) that all produce an
  // [`axis`][axis], which is a function.  It is also an object with methods for
  // modifying the scale and ticks.
  //
  // [call]: https://github.com/d3/d3-selection/blob/master/README.md#selection_call "Selection#call (d3-selection)"
  // [d3-axis]: https://github.com/d3/d3-axis "d3-axis"
  // [axis]: https://github.com/d3/d3-axis#_axis "axis (d3-axis)"

  // `compose` takes a list of functions, `fns`, intended to be passed to
  // `selection.call` and returns a function that when passed to `selection.call`
  // invokes each function in turn, from right to left, as if they were passed to
  // `selection.call` one at a time.  The attributes of `fns` are merged into the
  // returned object.
  function compose() {
    var fns = [], len = arguments.length;
    while ( len-- ) fns[ len ] = arguments[ len ];

    // Construct a new function that when called enumerates over the functions in
    // the composition and applies each in turn.
    var f = function() {
      var this$1 = this;
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      for (var i = 0, list = fns; i < list.length; i += 1) {
        var f = list[i];

        f.apply(this$1, args);
      }
    };

    // The new function is now assigned each of the attributes from the source
    // functions.
    for (var i = 0, list = fns; i < list.length; i += 1) {
      var source = list[i];

      for (var k in source) {
        if (!nonEnumerableProps.test(k)) {
          f[k] = source[k];
        }
      }
    }

    // Reverse the order of the functions so that they are applied from right to
    // left.
    fns = fns.reverse();
    return f;
  }

  // These properties are not to be touched during the merge.
  var nonEnumerableProps = /^(valueOf|isPrototypeOf|to(Locale)?String|propertyIsEnumerable|hasOwnProperty)$/;

  exports.compose = compose;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
