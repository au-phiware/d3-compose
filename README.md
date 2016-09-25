# d3-compose

In the D3 way of functions as objects, composition of functions needs to also
inherit the properties of the functions being composed. This is what this small
utility aims to acheive, think of it as the combination of two Underscore's
functionalities: [_.compose][1] and [_.extend][2].

This allows the extention of common D3 modules such as axis, for example:

```
var height = ...;

var xAxis = d3.axisBottom();

xAxis = d3.compose(function(selection) {
        selection.attr("transform", "translate(0 " + height + ")");
    }, xAxis);

var svg = d3.select("body").append("svg");

svg.append("g")
    .attr("class", "x axis")
    .call(xAxis);
```


[1]: http://underscorejs.org/#compose
[2]: http://underscorejs.org/#extend
