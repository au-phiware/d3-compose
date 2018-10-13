# d3-compose

In the D3 way of functions as objects, composition of functions needs to also
inherit the properties of the functions being composed. This is what this small
utility aims to acheive, think of it as the combination of two Underscore's
functionalities: [compose][1] and [extend][2].

This allows the extention of common D3 modules such as axis, for example:

```js
function translate(selection, offset) {
    selection.attr("transform", "translate(0 "+offset+")");
}
var xAxis = d3.axisBottom(d3.scaleLinear()
    .domain([0, 10]).range([20, 180]));

var svg = d3.select("#example-1")
    .append("g")
        .call(d3.compose(translate, xAxis), 50);
```

For other ways of composing functions with D3 see [d3-wrap][3].

[1]: http://underscorejs.org/#compose
[2]: http://underscorejs.org/#extend
[3]: https://www.npmjs.com/package/d3-wrap
