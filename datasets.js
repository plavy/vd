// const dataset1 = {
//     "nodes": [
//         {
//             "data": {
//                 "id": "a"
//             }
//         },
//         {
//             "data": {
//                 "id": "b"
//             }
//         }
//     ],
//     "edges": [
//         {
//             "data": {
//                 "id": "a->b",
//                 "source": "a",
//                 "target": "b"
//             }
//         }
//     ]
// }

// dataset 1
N = 100

nodes_A = []
nodes_B = []
nodes_C = []

for(let i = 0; i < N; i++) {
    nodes_A.push({"data": {"id":"A"+i}})
    nodes_B.push({"data": {"id":"B"+i}})
    nodes_C.push({"data": {"id":"C"+i}})
}

edges = []

for(let i = 0; i < N; i++) {
    edges.push({"data": {"id": "0:"+i, "source": "A"+i, "target": "B"+i}})
    edges.push({"data": {"id": "1:"+i, "source": "B"+i, "target": "C"+i}})
}

edges.push({"data": {"id": "2:0", "source": "B4", "target": "A7"}})
edges.push({"data": {"id": "2:1", "source": "B3", "target": "A7"}})


const dataset1 = {
    "nodes": nodes_A.concat(nodes_B).concat(nodes_C),
    "edges": edges
}
