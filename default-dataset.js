N = 200

nodes_A = []
nodes_B = []
nodes_C = []

for(let i = 0; i < N; i++) {
    nodes_A.push({"data": {"id":"A"+i}, "classes": ['group0']})
    nodes_B.push({"data": {"id":"B"+i}, "classes": ['group1']})
    nodes_C.push({"data": {"id":"C"+i}, "classes": ['group2']})
}

edges = []

for(let i = 0; i < N; i++) {
    edges.push({"data": {"id": "0:"+i, "source": "A"+i, "target": "B"+i}})
    edges.push({"data": {"id": "1:"+i, "source": "B"+i, "target": "C"+i}})
}

edges.push({"data": {"id": "2:0", "source": "B4", "target": "A7"}})
edges.push({"data": {"id": "2:1", "source": "B3", "target": "A7"}})

edges.push({"data": {"id": "2:2", "source": "B6", "target": "A9"}})
edges.push({"data": {"id": "2:3", "source": "B8", "target": "A9"}})

edges.push({"data": {"id": "2:4", "source": "B9", "target": "A11"}})
edges.push({"data": {"id": "2:5", "source": "B10", "target": "A11"}})


const defaultDataset = {
    "nodes": nodes_A.concat(nodes_B).concat(nodes_C),
    "edges": edges
}