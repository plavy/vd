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
    nodes_A.push({"data": {"id":"A"+i}, "classes": ['groupA']})
    nodes_B.push({"data": {"id":"B"+i}, "classes": ['groupB']})
    nodes_C.push({"data": {"id":"C"+i}, "classes": ['groupC']})
}

edges = []

for(let i = 0; i < N; i++) {
    edges.push({"data": {"id": "0:"+i, "source": "A"+i, "target": "B"+i}})
    edges.push({"data": {"id": "1:"+i, "source": "B"+i, "target": "C"+i}})
}

edges.push({"data": {"id": "2:0", "source": "B4", "target": "A7"}})
edges.push({"data": {"id": "2:1", "source": "B3", "target": "A7"}})


const dataset1 = {
    "name": "Dataset 1",
    "nodes": nodes_A.concat(nodes_B).concat(nodes_C),
    "edges": edges
}

// dataset 2
N = 100

nodes_A = []
nodes_B = []
nodes_C = []

for(let i = 0; i < N; i++) {
    nodes_A.push({"data": {"id":"A"+i}, "classes": ['groupA']})
    nodes_B.push({"data": {"id":"B"+i}, "classes": ['groupB']})
    if (i <= 0.8 * N) {
        nodes_C.push({"data": {"id":"C"+i}, "classes": ['groupC']})
    }
}

edges = []

for(let i = 0; i < N; i++) {
    if (i <= 0.2 * N) {
        edges.push({"data": {"id": "0:"+i, "source": "A"+i, "target": "B"+i}})
        edges.push({"data": {"id": "1:"+i, "source": "B"+i, "target": "C"+i}})
    } else if (i > 0.2 * N && i <= 0.8 * N) {
        edges.push({"data": {"id": "2:"+i, "source": "B"+i, "target": "C"+(i - 0.2 * N)}})
    }
}

const dataset2 = {
    "name": "Dataset 2",
    "nodes": nodes_A.concat(nodes_B).concat(nodes_C),
    "edges": edges
}

const datasets = [dataset1, dataset2]