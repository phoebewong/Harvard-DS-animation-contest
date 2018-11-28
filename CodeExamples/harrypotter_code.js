// URL: https://beta.observablehq.com/d/a0d38ee50fcbfc4a
// Title: Beta-Distributed Random Values
// Author: agasthyaps (@agasthyaps)
// Version: 68
// Runtime version: 1

// Example of a code submission in JavaScript. Because this generates an interactive plot, 
// the URL above is what you would include in your firstnamelastname_submission.md file (rather than a .gif, for example). 

// Submission file name should be "firstnamelastname_submission.js"
// Make sure you thoroughly comment your code 
// And give any attribution to code you have used from other people

// code from @mbostock

const m0 = {
  id: "a0d38ee50fcbfc4a@68",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Beta-Distributed Random Values

Generating [beta variates](https://en.wikipedia.org/wiki/Beta_distribution#Generating_beta-distributed_random_variates) from [gamma variates](https://en.wikipedia.org/wiki/Gamma_distribution). Implementation based on [jStat](https://github.com/jstat/jstat).`
)})
    },
    {
      inputs: ["chart"],
      value: (function(chart){return(
chart
)})
    },
    {
      name: "viewof α",
      inputs: ["DOM"],
      value: (function(DOM){return(
DOM.range(0, 5)
)})
    },
    {
      name: "α",
      inputs: ["Generators","viewof α"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof β",
      inputs: ["DOM"],
      value: (function(DOM){return(
DOM.range(0, 5)
)})
    },
    {
      name: "β",
      inputs: ["Generators","viewof β"],
      value: (G, _) => G.input(_)
    },
    {
      name: "data",
      inputs: ["randb","α","β"],
      value: (function(randb,α,β){return(
new Array(10000).fill().map(() => randb(α, β))
)})
    },
    {
      name: "x",
      inputs: ["d3","margin","width"],
      value: (function(d3,margin,width){return(
d3.scaleLinear().range([margin.left, width - margin.right])
)})
    },
    {
      from: "a0d38ee50fcbfc4a@68/6",
      name: "chart",
      remote: "chart"
    },
    {
      from: "a0d38ee50fcbfc4a@68/6",
      name: "d3",
      remote: "d3"
    },
    {
      from: "a0d38ee50fcbfc4a@68/6",
      name: "margin",
      remote: "margin"
    },
    {
      name: "randb",
      inputs: ["randg"],
      value: (function(randg){return(
function randb(alpha, beta) {
  const u = randg(alpha);
  return u / (u + randg(beta));
}
)})
    },
    {
      name: "randg",
      inputs: ["randn"],
      value: (function(randn){return(
function randg(shape) {
  let oalph = shape, a1, a2, u, v, x, mat;
  if (!shape) shape = 1;
  if (shape < 1) shape += 1;
  a1 = shape - 1 / 3;
  a2 = 1 / Math.sqrt(9 * a1);
  do {
    do {
      x = randn();
      v = 1 + a2 * x;
    } while (v <= 0);
    v = v * v * v;
    u = Math.random();
  } while (
    u > 1 - 0.331 * Math.pow(x, 4) &&
    Math.log(u) > 0.5 * x * x + a1 * (1 - v + Math.log(v))
  );
  if (shape === oalph) return a1 * v; // alpha > 1
  do u = Math.random(); while (u === 0); // alpha < 1
  return Math.pow(u, 1 / oalph) * a1 * v;
}
)})
    },
    {
      name: "randn",
      value: (function(){return(
function randn() {
  let u, v, x, y, q;
  do {
    u = Math.random();
    v = 1.7156 * (Math.random() - 0.5);
    x = u - 0.449871;
    y = Math.abs(v) + 0.386595;
    q = x * x + y * (0.19600 * y - 0.25472 * x);
  } while (q > 0.27597 && (q > 0.27846 || v * v > -4 * Math.log(u) * u * u));
  return v / u;
}
)})
    }
  ]
};

const m1 = {
  id: "a0d38ee50fcbfc4a@68/6",
  variables: [
    {
      name: "chart",
      inputs: ["d3","DOM","width","height","bins","x","y","xAxis","yAxis"],
      value: (function(d3,DOM,width,height,bins,x,y,xAxis,yAxis)
{
  const svg = d3.select(DOM.svg(width, height));
  
  const bar = svg.append("g")
      .attr("fill", "steelblue")
    .selectAll("rect")
    .data(bins)
    .enter().append("rect")
      .attr("x", d => x(d.x0) + 1)
      .attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 1))
      .attr("y", d => y(d.length))
      .attr("height", d => y(0) - y(d.length));

  svg.append("g")
      .call(xAxis);
  
  svg.append("g")
      .call(yAxis);
  
  return svg.node();
}
)
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3@5")
)})
    },
    {
      name: "margin",
      value: (function(){return(
{top: 20, right: 20, bottom: 30, left: 40}
)})
    },
    {
      name: "height",
      value: (function(){return(
500
)})
    },
    {
      name: "bins",
      inputs: ["d3","x","data"],
      value: (function(d3,x,data){return(
d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(40))
  (data)
)})
    },
    {
      from: "a0d38ee50fcbfc4a@68",
      name: "x",
      remote: "x"
    },
    {
      name: "y",
      inputs: ["d3","bins","height","margin"],
      value: (function(d3,bins,height,margin){return(
d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)]).nice()
    .range([height - margin.bottom, margin.top])
)})
    },
    {
      name: "xAxis",
      inputs: ["height","margin","d3","x","width","data"],
      value: (function(height,margin,d3,x,width,data){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .call(g => g.append("text")
        .attr("x", width - margin.right)
        .attr("y", -4)
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "end")
        .text(data.x))
)})
    },
    {
      name: "yAxis",
      inputs: ["margin","d3","y","data"],
      value: (function(margin,d3,y,data){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 4)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data.y))
)})
    },
    {
      from: "a0d38ee50fcbfc4a@68",
      name: "data",
      remote: "data"
    }
  ]
};

const notebook = {
  id: "a0d38ee50fcbfc4a@68",
  modules: [m0,m1]
};

export default notebook;
