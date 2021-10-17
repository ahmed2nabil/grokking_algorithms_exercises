 // the graph

 const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};


// The costs table
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;


// the parents table
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed = [];
// console.log(graph);
// console.log(costs);
// console.log(parents);

const the_lowest_cost_node = (costs) => {
    let lowest_cost = Infinity;
    lowest_cost_node = null;
    for(let node in costs) {
        let cost = costs[node];
        if (cost < lowest_cost && processed.indexOf(node) === -1 ){
            lowest_cost = cost;
            lowest_cost_node = node;
        } 
    }
    return lowest_cost_node;
}

// console.log(the_lowest_cost_node(costs));

let node = the_lowest_cost_node(costs);
// console.log(node);
while(node !== null) {
    let cost = costs[node];
    let neighbors = graph[node];
    Object.keys(neighbors).forEach(n => {
        let new_cost = cost + neighbors[n];
        if(costs[n] > new_cost) {
            costs[n] = new_cost;
            parents[n] = node; 
        }
    })
  processed  = processed.concat(node);
    node = the_lowest_cost_node(costs);
}
console.log("costs for start = " ,costs );
console.log("parents: " ,parents );
