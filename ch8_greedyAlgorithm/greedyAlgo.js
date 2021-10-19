
let stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

const finalStations = new Set();



let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

while(statesNeeded.size) {
    let bestStation  = null;
    let statesCovered = new Set();
Object.keys(stations).forEach(s => {
    let states = stations[s];
    const covered = new Set([...statesNeeded].filter(x => states.has(x)));
    if(covered.size > statesCovered.size) {
        bestStation = s ;
        statesCovered = covered;
    }
})
statesNeeded = new Set([...statesNeeded].filter(x => !statesCovered.has(x)));
finalStations.add(bestStation);
}
console.log(finalStations);