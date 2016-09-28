# d3-compose

In the D3 way of functions as objects, composition of functions needs to also
inherit the properties of the functions being composed. This is what this small
utility aims to acheive, think of it as the combination of two Underscore's
functionalities: [compose][1] and [extend][2].

This allows the extention of common D3 modules such as axis, for example:

```js
var height = ...;

var xAxis = d3.axisBottom();

xAxis = d3.compose(function(selection) {
        selection.attr("transform", "translate(0 " + height + ")");
    }, xAxis);

var svg = d3.select("body").append("svg");

svg.append("g")
    .attr("class", "x axis")
    .call(xAxis.domain([...]));
```

For other ways of composing functions with D3 see [d3-wrap][3].

[1]: http://underscorejs.org/#compose
[2]: http://underscorejs.org/#extend
[3]: https://www.npmjs.com/package/d3-wrap
