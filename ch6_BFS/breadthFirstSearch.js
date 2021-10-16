var graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];


function search(name) {
    var search_queue = [];
    search_queue = search_queue.concat(graph[name]);
    var searched = [];
    while(search_queue.length) {
        var person = search_queue.shift();
        if(searched.indexOf(person) === -1) {
            if(person[person.length - 1] === "m") {
                console.log(person + ' is a mango seller');
                return true;
            } 
        }
             search_queue = search_queue.concat(graph[person]);
             searched.push(person);
     }
     return false
}

search("you");